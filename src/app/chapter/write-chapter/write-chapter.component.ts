import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {CrudService} from '../../_services/crud.service';
import {API_URL, CHAPTERS_STORY, CREATE_CHAPTER} from '../../globals/global-variables';
import {ChapterMV} from '../chaptreModelView/ChapterMV';

@Component({
  selector: 'app-write-chapter',
  templateUrl: './write-chapter.component.html',
  styleUrls: ['./write-chapter.component.scss']
})
export class WriteChapterComponent implements OnInit {
  id: number;
  formWriteChapter: FormGroup;
  chaptercontent = '<p></p>';
  config: any = {
    allowedContent: true,
    toolbar: [['Bold', 'Italic', 'Underline', '-', 'NumberedList', 'BulletedList', 'Link', '-', 'CreatePlaceholder']],
    removePlugins: 'elementspath',
    resize_enabled: false,
    extraPlugins: 'font,divarea,placeholder',
    contentsCss: ['body {font-family: \'Helvetica Neue\', Helvetica, Arial, sans-serif;}'],
    autoParagraph: false,
    enterMode: 2
  };

  constructor(private crudService: CrudService, private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
    });
  }

  ngOnInit(): void {
    this.formWriteChapter = this.formBuilder.group({
      content: '',
      name: '',
    });
  }

  onClick() {

    console.log(this.formWriteChapter.value);

    this.crudService.post(API_URL + CHAPTERS_STORY + '/' + this.id, this.formWriteChapter.value).subscribe(
      (response) => {
        this.router.navigate(['/story/chapters/', this.id]);

        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
