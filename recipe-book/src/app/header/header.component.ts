import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../services/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuth: boolean = false;
  userSub: Subscription;

  constructor(
    private dataStorageService: DataStorageService,
    private authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe((loginUser) => {
      // this.isAuth = !loginUser ? false : true;
      //It's the same as:
      this.isAuth = !!loginUser;
      console.log('!loginUser: ', !loginUser)
      console.log('!!loginUser: ', !!loginUser)
    });
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

  onSaveData() {
    this.dataStorageService.storeRecipes();
  }

  onFetchData() {
    this.dataStorageService.fetcheRecipes().subscribe();
  }

  onLogout(){
    this.authService.logout();
    this.router.navigate(['./auth']);
  }
}
