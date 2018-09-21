import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
  // View Encapsulation is how Angular applies styles to only specific components and not have them 'bleed' into others.
  // .Emulated is the default behavior, which is emulating the shadow DOM, a copy of the DOM to make changes to the real DOM.
})
export class ServerElementComponent implements OnInit {
   // This uses an input alias. The template uses srvElement, but actually binds to 'element' property.
  @Input('srvElement') element: {type: string, name: string, content: string};

  constructor() { }

  ngOnInit() {
  }

}