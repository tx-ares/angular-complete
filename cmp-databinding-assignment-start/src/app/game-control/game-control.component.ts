import { Component, OnInit, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  // My solution did not use events, but it should. Oh well. :o
  // @Output() intervalFired = new EventEmitter<number>();
  lastNumber = 0;

  counter = 0;
  ref;
  evenNumbers = [];
  oddNumbers = [];

  constructor() { }

  ngOnInit() {

  }

  onPause() {
    clearInterval(this.ref);
  }

  onStart() {
    this.ref = setInterval(() => {
      this.counter ++;
      console.log('tick');
      this.checkCounter();
    }, 1000);
  }

  onReset() {
   this.counter = 0;
   clearInterval(this.ref);
   this.evenNumbers = [];
   this.oddNumbers = [];
  }

  checkCounter() {
    if ( this.counter % 2 === 0) {
      this.evenNumbers.push('Even');
    }
    if ( Math.abs(this.counter % 2) === 1 ) {
      this.oddNumbers.push('Odd');
    }
  }

}
