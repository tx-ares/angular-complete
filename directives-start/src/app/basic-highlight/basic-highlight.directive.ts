import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
    constructor(private elementRef: ElementRef) {

    }
    // With elementRef, I have access to any element this directive is bound to.
    // ex) <span appBasicHighLight>Highlight me!</span>
    ngOnInit() {
        this.elementRef.nativeElement.style.backgroundColor = 'lime';
    }
}
