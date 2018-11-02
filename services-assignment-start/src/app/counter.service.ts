import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  public stateChangesCount = 0;

  constructor() { }

  onStateChange() {
    this.stateChangesCount++;
    console.log(this.stateChangesCount);
  }
}
