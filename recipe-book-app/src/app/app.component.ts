import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'app';
  public currentView = 'recipes';

  public onViewChanged(viewName: {currentView: string}) {
    console.log('onViewChanged fired!');
    this.currentView = viewName.currentView;
  }
}
