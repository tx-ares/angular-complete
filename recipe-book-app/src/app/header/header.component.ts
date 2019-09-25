import { Component } from '@angular/core';
import { DataStorageService } from 'app/shared/data-storage.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
  constructor(private dataStorageService: DataStorageService) { }

  public onSaveData() {
    this.dataStorageService.storeRecipes();
  }

  public onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe();
  }
}
