import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CrudService} from '../../_services/crud.service';
import {Book} from '../../_models/book';
import {API_URL, BOOK} from '../../globals/global-variables';

@Component({
  selector: 'app-details-book',
  templateUrl: './details-book.component.html',
  styleUrls: ['./details-book.component.scss']
})
export class DetailsBookComponent implements OnInit {
  selectedId: number;
  selectedBook: Book;
  constructor(private route: ActivatedRoute,
              private crudService: CrudService) { }

  ngOnInit() {
    this.selectedId = this.route.snapshot.params.id;
    console.log(this.selectedId);
    if (this.selectedId) {
      this.crudService.getOne(API_URL + BOOK, this.selectedId).subscribe(
        (response) => {
          this.selectedBook = response;
          console.log(this.selectedBook);
        },(error) => {
        console.log(error);
        }
      );
    }
  }

}
