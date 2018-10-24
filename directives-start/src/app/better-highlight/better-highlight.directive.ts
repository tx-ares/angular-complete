import { Directive,
         Renderer2,
         OnInit,
         ElementRef,
         HostListener,
         HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  // With host binding, we gain access to the elements attributes inside the component.
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private renderer: Renderer2,
              private elRef: ElementRef) { }

  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement , 'background-color', 'goldenrod');
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement , 'background-color', 'goldenrod');
    this.backgroundColor = 'goldenrod';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement , 'background-color', 'transparent');
    this.backgroundColor = 'transparent';
  }

}
