import { Component, OnInit } from '@angular/core';
import { ChangePageService } from '../services/change-page.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private currentPage: ChangePageService) {}

  ngOnInit(): void {}

  changePage(page: string) {
    this.currentPage.changePage.emit(page)
  }
}
