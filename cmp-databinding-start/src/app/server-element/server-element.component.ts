import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges,
         DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit,
         OnDestroy, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
  // View Encapsulation is how Angular applies styles to only specific components and not have them 'bleed' into others.
  // .Emulated is the default behavior, which is emulating the shadow DOM, a copy of the DOM to make changes to the real DOM.
})
export class ServerElementComponent implements OnInit, OnChanges, OnDestroy,
             DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit {
   // This uses an input alias. The template uses srvElement, but actually binds to 'element' property.
  @Input('srvElement') element: {type: string, name: string, content: string};
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() {
    console.log('contructor called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit called');
    console.log('Text Content: ' + this.header.nativeElement.textContent);
    // The below line will be empty.  Content has not been initialized.
    console.log('Text Content of paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log('ngDoCheck called');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called');
    console.log('Text Content of paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked() {
   console.log('ngAfterContentChecked called');
  }

  ngAfterViewChecked() {
   console.log('ngAfterViewInit called');
  }

  ngAfterViewInit() {
   console.log('ngAfterViewInit called');
   console.log('Text Content: ' + this.header.nativeElement.textContent);
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called');
  }

}
