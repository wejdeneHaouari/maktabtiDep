import {Component, OnInit} from '@angular/core';
import {ListReq} from '../../_models/request/ListReq';
import {Book} from '../../_models/book';
import {CrudService} from '../../_services/crud.service';
import {API_URL, BOOK} from '../../globals/global-variables';
import {HttpParams} from '@angular/common/http';
import {BookSubject} from '../../_models/enum/bookSubject';
import {Router} from '@angular/router';
import {CartService} from '../../_services/cart-service.service';
import {NotyService} from '../../_services/noty.service';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.scss']
})
export class ListBookComponent implements OnInit {
  books: ListReq<Book>;
  currentPage: number;
  sizePage: number;
  sort = 'createdAt,desc';
  categories = BookSubject;
  selectedCategory = 'ALL';
  connected: boolean;
  ACTION_ADD = 'Add to cart';


  constructor(private crudService: CrudService, private router: Router, private cartService: CartService, private noty: NotyService) {
  }

  getBooks() {
    let params: any;
    const selectedPage = this.currentPage - 1;
    if (this.selectedCategory !== 'ALL') {

      params = new HttpParams().set('page', selectedPage.toString())
        .set('size', this.sizePage.toString()).set('sort', this.sort.toString()).set('genre', this.selectedCategory);
    } else {
      params = new HttpParams().set('page', selectedPage.toString())
        .set('size', this.sizePage.toString()).set('sort', this.sort.toString());
    }
    console.log(params)
    this.crudService.getAllWithParams(API_URL + BOOK, params).subscribe(
      (response) => {
        this.books = response;
        console.log(this.books);
        this.currentPage = this.books.pageable.pageNumber + 1;
        console.log(this.books.pageable.pageNumber);
      },
      (error => {
        console.log(error);
      })
    );
  }

  ngOnInit() {
    this.currentPage = 1;
    this.sizePage = 3;
    this.selectedCategory = 'ALL';
    this.getBooks();
  }

  paginate(page) {
    this.currentPage = page ;
    this.getBooks();
  }

  addToCard(book): void {
    if (sessionStorage.getItem('currentUser') === null) {
      this.router.navigate(['/sign-in']);

    } else {
      this.connected = true;
    }

    this.cartService.addToCart(book, 1, book.price);

    // this.noty.displaySuccessNotification(this.ACTION_ADD);
  }

  selectCategorty(category: string) {
    this.selectedCategory = category;
    this.currentPage = 1;
    console.log(this.selectedCategory)
    this.getBooks();
  }

  onSort(event) {
    this.currentPage = 1;
    this.sort = event.target.value;
    this.getBooks();
  }
}
