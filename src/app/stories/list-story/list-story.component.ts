import { Component, OnInit } from '@angular/core';
import {ListReq} from '../../_models/request/ListReq';
import {Book} from '../../_models/book';
import {CrudService} from '../../_services/crud.service';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpParams} from '@angular/common/http';
import {API_URL, MY_STORIES, STORY} from '../../globals/global-variables';
import {Story} from '../../_models/story';
import {SignInService} from '../../_services/sign-in.service';
import {User} from '../../_models/user';

@Component({
  selector: 'app-list-story',
  templateUrl: './list-story.component.html',
  styleUrls: ['./list-story.component.scss']
})
export class ListStoryComponent implements OnInit {
  isVisible = false;
  stories: ListReq<Story>;
  currentPage: number;
  sizePage: number;
  sort = 'createdAt,desc';
  user: User;
  uri: string;
  constructor(private crudService: CrudService,
              private router: Router,
              private route: ActivatedRoute,
              private signInService: SignInService) {
    this.signInService.currentUser.subscribe(user => {
      this.user = user;
    });
  }

  ngOnInit() {
    this.uri = this.route.snapshot.routeConfig.path;
    this.currentPage = 1;
    this.sizePage = 6;
    this.getStories();
  }

  getStories() {
    let params: any;
    const selectedPage = this.currentPage - 1;
    params = new HttpParams().set('page', selectedPage.toString())
      .set('size', this.sizePage.toString()).set('sort', this.sort.toString());

    console.log(params);
    let url: string;
    if (this.uri === 'list-story') {
      url = API_URL + MY_STORIES;
    } else {
      url = API_URL + STORY;
    }
    console.log(this.uri, url)
    this.crudService.getAllWithParams(url, params).subscribe(
      (response) => {
        this.stories = response;
        console.log(this.stories);
        this.currentPage = this.stories.pageable.pageNumber + 1;
      },
      (error =>  {
        console.log(error);
      })
    );
  }

  paginate(page: number) {
    this.currentPage = page ;
    this.getStories();
  }


  viewChapter(story: Story) {
    this.router.navigate(['story/chapters', story.id]);
  }

  addChapter() {

  }
}
