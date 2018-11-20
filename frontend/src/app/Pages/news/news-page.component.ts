import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent implements OnInit {
  public searchStr = '';
  public pageData: Array<any>;
  public news: Array<any>;

  constructor(private route: ActivatedRoute) {
    this.news = this.route.snapshot.data['news'][0].news;
    this.pageData = this.route.snapshot.data['pageData'][0].items[0];
 }

  ngOnInit() {
  }

}
