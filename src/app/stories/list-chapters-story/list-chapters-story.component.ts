import { Component, OnInit } from '@angular/core';
import {ListReq} from '../../_models/request/ListReq';
import {Chapter} from '../../_models/chapter';
import {CrudService} from '../../_services/crud.service';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpParams} from '@angular/common/http';
import {API_URL, CHAPTER, CHAPTERS_STORY, STORY} from '../../globals/global-variables';
import {Book} from '../../_models/book';
import {Story} from '../../_models/story';
import {SignInService} from '../../_services/sign-in.service';
import {User} from '../../_models/user';

@Component({
  selector: 'app-list-chapters-story',
  templateUrl: './list-chapters-story.component.html',
  styleUrls: ['./list-chapters-story.component.scss']
})
export class ListChaptersStoryComponent implements OnInit {
  isVisible = false;
  chapters: ListReq<Chapter>;
  currentPage: number;
  sizePage: number;
  sort = 'createdAt,desc';
  user: User;
  owner = false;
  private selectedId: number;
  constructor(private crudService: CrudService,
              private router: Router,
              private route: ActivatedRoute,
              private signInService: SignInService
              ) {
    this.signInService.currentUser.subscribe(user => {
      this.user = user;
    });
  }

  ngOnInit() {
    this.selectedId = this.route.snapshot.params.id;
    this.currentPage = 1;
    this.sizePage = 6;
    this.getChaptersByStory();

  }

  getChaptersByStory() {
    let params: any;
    const selectedPage = this.currentPage - 1;
    params = new HttpParams().set('page', selectedPage.toString())
      .set('size', this.sizePage.toString()).set('sort', this.sort.toString());


    this.crudService.getAllWithParams(API_URL + STORY + '/' + this.selectedId + CHAPTER, params).subscribe(
      (response) => {
        this.chapters = response;
        console.log(this.chapters);
        if (this.chapters && (this.user.id === this.chapters.content[0].story.owner.id)){
          this.owner = true;
        }
        this.currentPage = this.chapters.pageable.pageNumber + 1;
      },
      (error =>  {
        console.log(error);
      })
    );
  }

  paginate(page: number) {
    this.currentPage = page ;
    this.getChaptersByStory();
  }

  addChapter() {

    this.router.navigate(['story/create-chapter/', this.selectedId] );

  }


  viewChapter(chapter: Chapter) {
    this.router.navigate(['story/' + this.selectedId + '/chapter/', chapter.numero] );
  }
}
