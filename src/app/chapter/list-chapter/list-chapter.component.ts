import {Component, OnInit} from '@angular/core';
import {Chapter} from '../../_models/chapter';
import {CrudService} from '../../_services/crud.service';
import {SignInService} from '../../_services/sign-in.service';
import {FormBuilder} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {API_URL, CHAPTERS_STORY, LIST_CHAPTERS} from '../../globals/global-variables';
import {ListReq} from '../../_models/request/ListReq';
import {Story} from '../../_models/story';
import {HttpParams} from '@angular/common/http';
import {Book} from '../../_models/book';

@Component({
  selector: 'app-list-chapter',
  templateUrl: './list-chapter.component.html',
  styleUrls: ['./list-chapter.component.scss']
})
export class ListChapterComponent implements OnInit {
  isVisible = false;
  chapters: ListReq<Chapter>;
  currentPage: number;
  sizePage: number;
  sort = 'createdAt,desc';
  private selectedId: number;
  constructor(private crudService: CrudService,
              private router: Router,
              private route: ActivatedRoute) { }

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

    console.log(params)
    this.crudService.getAllWithParams(API_URL + CHAPTERS_STORY + '/' + this.selectedId, params).subscribe(
      (response) => {
        this.chapters = response;
        console.log(this.chapters);
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

  viewRequest(book: Book) {
    this.router.navigate(['request', book.id] );
  }

  addChapter(story: Story) {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

}
