import { Component, OnInit } from '@angular/core';
import {ListReq} from '../../_models/request/ListReq';
import {Book} from '../../_models/book';
import {CrudService} from '../../_services/crud.service';
import {Router} from '@angular/router';
import {HttpParams} from '@angular/common/http';
import {ACCEPTE_REQUESTS, API_URL, BOOK_IN_PROGRESS, CONFIRM_EXCHANGE, MY_BOOKS} from '../../globals/global-variables';

@Component({
  selector: 'app-confirm-receive',
  templateUrl: './confirm-receive.component.html',
  styleUrls: ['./confirm-receive.component.scss']
})
export class ConfirmReceiveComponent implements OnInit {
  books: ListReq<Book>;
  currentPage: number;
  sizePage: number;
  sort = 'createdAt,desc';
  isVisible = false;
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
    this.crudService.getAllWithParams(API_URL + BOOK_IN_PROGRESS, params).subscribe(
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
    this.isVisible = true;
  }

  accept(book: Book) {
    this.isVisible = true;
  }

  handleOk(book: Book): void {

    this.isVisible = false;
    this.crudService.getAll(API_URL + CONFIRM_EXCHANGE + '/' + book.id).subscribe(
      (response) => {
        console.log(response)
        this.router.navigate(['my-exchanges']);
      },
      (error => console.log(error))
    );
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

}
