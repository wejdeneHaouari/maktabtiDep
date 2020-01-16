import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {CrudService} from '../../_services/crud.service';
import {API_URL, CREATE_CHAPTER} from '../../globals/global-variables';
import {Chapter} from '../../_models/chapter';
import {SignInService} from '../../_services/sign-in.service';
import {BookSubject} from '../../_models/enum/bookSubject';

@Component({
  selector: 'app-create-chapter',
  templateUrl: './create-chapter.component.html',
  styleUrls: ['./create-chapter.component.scss']
})
export class CreateChapterComponent implements OnInit {

  chapter: Chapter = new Chapter();
  formGroup: FormGroup;
  private chapterJson: any;
  categories = BookSubject;
  dateFormat = 'yyyy/MM/dd';
  constructor(private crudService: CrudService, private signInService: SignInService, private formBuilder: FormBuilder, private router: Router) {
  }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      name: '',
      genre: '',
      price: 0,
      releaseDate: ''
    });
  }

  onSubmit() {
    console.log(API_URL + CREATE_CHAPTER);
    this.signInService.currentUser.subscribe(user => {
    });

    console.log(this.formGroup.value);
    this.crudService.post(API_URL + CREATE_CHAPTER, this.formGroup.value).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['/write-chapter/', response.id]);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
