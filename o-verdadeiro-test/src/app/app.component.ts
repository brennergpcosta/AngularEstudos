import { Component, OnInit } from '@angular/core';
import { ChangePageService } from './services/change-page.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  page: string;

  constructor(private currentPage: ChangePageService) {}

  ngOnInit() {
    this.currentPage.changePage.subscribe((page: string) => {
      this.page = page;
      console.log(page)
    });
  }
}
