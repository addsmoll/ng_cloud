import { Component, ViewEncapsulation } from '@angular/core';
import { NewsService } from './news.service'

@Component({
  selector: 'az-news',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  providers: [ NewsService ]

})
export class NewsComponent {
public news: Array<Object>;

  constructor(private _newsService: NewsService) {  }

  ngOnInit() {
    this._loadNews();
  }

  expandMessage (message){
    message.expanded = !message.expanded;
  }


  private _loadNews() {
    this.news = this._newsService.getData();
  }

}
