import { Component, OnInit } from '@angular/core';
import {ListReq} from '../../_models/request/ListReq';
import {Book} from '../../_models/book';
import {CrudService} from '../../_services/crud.service';
import {HttpParams} from '@angular/common/http';
import {API_URL, BOOK, MY_BOOKS} from '../../globals/global-variables';
import {Router} from '@angular/router';

@Component({
  selector: 'app-card-exchange-book',
  templateUrl: './card-exchange-book.component.html',
  styleUrls: ['./card-exchange-book.component.scss']
})
export class CardExchangeBookComponent implements OnInit {
  books: ListReq<Book>;
  currentPage: number;
  sizePage: number;
  sort = 'createdAt,desc';
  constructor(private crudService: CrudService,
              private router: Router) { }

  ngOnInit() {
    this.currentPage = 1;
    this.sizePage = 6;
    this.getBooks();
  }

  getBooks() {
    let params: any;
    const selectedPage = this.currentPage - 1;
      params = new HttpParams().set('page', selectedPage.toString())
        .set('size', this.sizePage.toString()).set('sort', this.sort.toString());

    console.log(params)
    this.crudService.getAllWithParams(API_URL + MY_BOOKS, params).subscribe(
      (response) => {
        this.books = response;
        console.log(this.books);
        this.currentPage = this.books.pageable.pageNumber + 1;
      },
      (error =>  {
        console.log(error);
      })
    );
  }

  paginate(page: number) {
    this.currentPage = page ;
    this.getBooks();
  }

  viewRequest(book: Book) {
    this.router.navigate(['request', book.id] );
  }
}
