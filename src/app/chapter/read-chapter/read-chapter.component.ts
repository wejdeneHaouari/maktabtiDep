import {Component, OnInit} from '@angular/core';
import {API_URL, CREATE_CHAPTER} from '../../globals/global-variables';
import {CrudService} from '../../_services/crud.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-read-chapter',
  templateUrl: './read-chapter.component.html',
  styleUrls: ['./read-chapter.component.scss']
})
export class ReadChapterComponent implements OnInit {

  content: string;
  test: string;
  id: number;

  constructor(private crudService: CrudService, private router: ActivatedRoute) {
    router.params.subscribe(params => {
      this.id = (params['id']);
    });
  }

  ngOnInit() {
    this.crudService.getOne(API_URL + CREATE_CHAPTER, this.id).subscribe(
      (response) => {
        this.content = response.content;
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
