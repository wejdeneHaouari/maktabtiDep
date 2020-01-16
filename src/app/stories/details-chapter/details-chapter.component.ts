import { Component, OnInit } from '@angular/core';
import {CrudService} from '../../_services/crud.service';
import {ActivatedRoute} from '@angular/router';
import {API_URL, CHAPTER, CREATE_CHAPTER, STORY} from '../../globals/global-variables';
import {Chapter} from '../../_models/chapter';

@Component({
  selector: 'app-details-chapter',
  templateUrl: './details-chapter.component.html',
  styleUrls: ['./details-chapter.component.scss']
})
export class DetailsChapterComponent implements OnInit {
  numero: number;
  idStory: number;
  chapter: Chapter;
  content: string;
  constructor(private crudService: CrudService, private router: ActivatedRoute) {
    router.params.subscribe(params => {
      this.numero = (params['id']);
      this.idStory = (params['idStory']);
    });
    console.log(this.idStory);
    console.log(this.numero );
  }

  ngOnInit() {
    this.crudService.getOne(API_URL + STORY + '/' + this.idStory + CHAPTER , this.numero).subscribe(
      (response) => {
        this.chapter = response;
       this.content = this.chapter.content;
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
