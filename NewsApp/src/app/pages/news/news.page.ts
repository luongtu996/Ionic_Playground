import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Observable } from 'rxjs';
import { News } from 'src/app/interfaces/news';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  news$: Observable<News[]>;
  loadingSkeleton = Array(4);

  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
    this.news$ = this.api.getNews<News[]>();
  }

  doRefresh(event: any) {
    setTimeout(() => {
      this.news$ = this.api.getNews<News[]>();
      event.target.complete();
    }, 500);
  }

  onClick(url: string) {
    window.open(url, '_blank');
  }

}
