import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Observer, Subscription, interval } from 'rxjs';

import { map } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  numbersObsSubscription: Subscription;
  customObsSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    const myNumbers = Observable.interval(1000)
      .pipe(map( // the map operator from rxjs will take the data emitted and can be used to manipulate the data.
        (data: number) => {
          return data * 2; // here it will simply double the emitted value.
        }
      ));
    this.numbersObsSubscription = myNumbers.subscribe(
      (number: Number) => {
        console.log(number);
      }
    );

    const myObservable = Observable.create((observer: Observer) => {
      setTimeout(() => {
        observer.next('first package');
      }, 2000);
      setTimeout(() => {
        observer.next('second package');
      }, 4000);
      setTimeout(() => {
        // observer.error('there was an error');
        observer.complete();
      }, 5000);
      setTimeout(() => {
        observer.next('I shouldnt see this!');
      }, 6000);
    });
    this.customObsSubscription = myObservable.subscribe(
      (data: string) => { console.log(data); },
      (error: string) => { console.log(error); },
      () => { console.log('completed'); }
    );
  }

  ngOnDestroy() {
    this.numbersObsSubscription.unsubscribe();
    this.customObsSubscription.unsubscribe();
  }
}
