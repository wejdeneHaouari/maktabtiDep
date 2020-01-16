import { Component, OnInit } from '@angular/core';
import {ListReq} from '../../_models/request/ListReq';
import {Book} from '../../_models/book';
import {CrudService} from '../../_services/crud.service';
import {HttpParams} from '@angular/common/http';
import {API_URL, BOOK_REQUEST, MY_BOOKS, SEND_REQUEST} from '../../globals/global-variables';
import {Router} from '@angular/router';

@Component({
  selector: 'app-send-request',
  templateUrl: './send-request.component.html',
  styleUrls: ['./send-request.component.scss']
})
export class SendRequestComponent implements OnInit {
  books: ListReq<Book>;
  currentPage: number;
  sizePage: number;
  sort = 'createdAt,desc';
  current = 0;
  requestedBook: Book;
  exchangeWith: Book;
  index = 1;
  myBooks: ListReq<Book>;
  pre(): void {
    this.current -= 1;
    this.changeContent();
  }

  next(): void {
    this.current += 1;
    this.changeContent();
  }

  done(): void {
    console.log('done');
    this.crudService.post(API_URL + SEND_REQUEST,{
      requestBook: this.requestedBook.id,
      exchangeWith: this.exchangeWith.id
    }).subscribe(
      (response) => {
        this.router.navigate(['my-exchanges']);
      },
      (error => console.log(error))
    );
  }

  changeContent(): void {
    switch (this.current) {
      case 0: {
        this.index = 1;
        break;
      }
      case 1: {
        this.index = 2;
        break;
      }
      case 2: {
        this.index = 3;
        break;
      }
      default: {
        this.index = 4;
      }
    }
  }

  constructor(private crudService: CrudService,
              private router: Router) { }

  ngOnInit() {
    this.currentPage = 1;
    this.sizePage = 6;
    this.getBooks(API_URL + BOOK_REQUEST);
  }

  getBooks(url: String) {
    let params: any;
    const selectedPage = this.currentPage - 1;
    params = new HttpParams().set('page', selectedPage.toString())
      .set('size', this.sizePage.toString()).set('sort', this.sort.toString());

    console.log(params)
    this.crudService.getAllWithParams(API_URL + BOOK_REQUEST, params).subscribe(
      (response) => {
        this.books = response;
        console.log(this.books);
        this.currentPage = this.books.pageable.pageNumber + 1;
        return response;
      },
      (error =>  {
        console.log(error);
      })
    );
    this.crudService.getAllWithParams(API_URL + MY_BOOKS, params).subscribe(
      (response) => {
        this.myBooks = response;
        console.log(this.books);
        this.currentPage = this.books.pageable.pageNumber + 1;
        return response;
      },
      (error =>  {
        console.log(error);
      })
    );
  }

  paginate(page: number) {
    this.currentPage = page ;
    this.getBooks(API_URL + BOOK_REQUEST);
  }

  onSend(book: Book) {
    this.requestedBook = book;
    this.current += 1;
    this.changeContent();
  }

  onExchange(book: Book) {
    this.exchangeWith = book;
    this.current += 1;
    this.changeContent();
  }
}
