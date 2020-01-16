import { Component, OnInit } from '@angular/core';
import {Chapter} from '../../_models/chapter';
import {FormBuilder, FormGroup} from '@angular/forms';
import {BookSubject} from '../../_models/enum/bookSubject';
import {CrudService} from '../../_services/crud.service';
import {SignInService} from '../../_services/sign-in.service';
import {Router} from '@angular/router';
import {API_URL, BOOK, CREATE_CHAPTER, STORY} from '../../globals/global-variables';

@Component({
  selector: 'app-create-story',
  templateUrl: './create-story.component.html',
  styleUrls: ['./create-story.component.scss']
})
export class CreateStoryComponent implements OnInit {

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
      description: ''
    });
  }



  onSubmit() {
   console.log(this.createBook)
    this.crudService.post(API_URL + STORY, this.createBook.value).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['/list-story']);
      }, (error => console.log(error))
    );
  }


}
