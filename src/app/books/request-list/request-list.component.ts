import { Component, OnInit } from '@angular/core';
import {ListReq} from '../../_models/request/ListReq';
import {Book} from '../../_models/book';
import {CrudService} from '../../_services/crud.service';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpParams} from '@angular/common/http';
import {ACCEPTE_REQUESTS, API_URL, BOOK_REQUESTS, MY_BOOKS, SEND_REQUEST} from '../../globals/global-variables';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.scss']
})
export class RequestListComponent implements OnInit {
  isVisible = false;
  books: Book[];
  selectedId: number;
  constructor(private crudService: CrudService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.selectedId = this.route.snapshot.params.id;
    this.getBooks();
  }

  getBooks() {

    this.crudService.getAll(API_URL + BOOK_REQUESTS + '/' + this.selectedId).subscribe(
      (response) => {
        this.books = response;
        console.log(this.books);

      },
      (error =>  {
        console.log(error);
      })
    );
  }

  accept(book: Book) {
    this.isVisible = true;
  }

  handleOk(book: Book): void {

    this.isVisible = false;
    this.crudService.post(API_URL + ACCEPTE_REQUESTS, {
      requestBook: this.selectedId,
      exchangeWith: book.id
    }).subscribe(
      (response) => {
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
