import { Component, OnInit } from '@angular/core';
import {BookSubject} from '../../_models/enum/bookSubject';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CrudService} from '../../_services/crud.service';
import {Router} from '@angular/router';
import {API_URL, BOOK, EXCHANGE_BOOK} from '../../globals/global-variables';

@Component({
  selector: 'app-exchange-book',
  templateUrl: './exchange-book.component.html',
  styleUrls: ['./exchange-book.component.scss']
})
export class ExchangeBookComponent implements OnInit {

  date = null;
  dateFormat = 'yyyy/MM/dd';
  keys = Object.keys;
  categories = BookSubject;
  createBook: FormGroup;
  file: any;
  constructor(private formBuilder: FormBuilder,
              private crudService: CrudService,
              private router: Router) { }

  ngOnInit() {
    this.createBook = this.formBuilder.group({
      name: '',
      genre: '',
      price: 0,
      releaseDate: '',
      author: '',
      publisher: '',
      description: '',
    });
  }

  onChange(result): void {
    console.log('onChange: ', result);

  }
  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.file = file;
    }
  }
  onSubmit() {
    const formData = new FormData();
    formData.append('image', this.file);
    formData.append('name', this.createBook.get('name').value);
    formData.append('author', this.createBook.get('author').value);
    formData.append('publisher', this.createBook.get('publisher').value);
    formData.append('genre', this.createBook.get('genre').value);
    formData.append('price', this.createBook.get('price').value);
    formData.append('releaseDate', this.createBook.get('releaseDate').value);
    formData.append('description', this.createBook.get('description').value);
    this.crudService.post(API_URL + EXCHANGE_BOOK, formData).subscribe(
      (response) => {
        console.log(response)
        this.router.navigate(['/my-exchanges']);
      }, (error => console.log(error))
    );
  }

}
