import { Component, OnInit } from '@angular/core';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public stateChangesCount: number;

  constructor(private counterService: CounterService) { }

  ngOnInit() {
    this.stateChangesCount = this.counterService.stateChangesCount;
  }
}
