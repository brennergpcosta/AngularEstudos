import { Component } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(private dataStorageService: DataStorageService) {}

  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe(
      (responseData) => {
        console.log('Fetch Data Response: ', responseData);
      }
    );
  }

  onStoreData(){
    this.dataStorageService.storeRecipes();
  }
}
