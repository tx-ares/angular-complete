import { Directive,
         Renderer2,
         OnInit,
         ElementRef,
         HostListener,
         HostBinding,
         Input} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'dodgerblue';
  // With host binding, we gain access to the elements attributes inside the component.
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private renderer: Renderer2,
              private elRef: ElementRef) { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
    // this.renderer.setStyle(this.elRef.nativeElement , 'background-color', 'goldenrod');
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement , 'background-color', 'goldenrod');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement , 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
  }

}
