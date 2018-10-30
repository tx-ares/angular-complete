import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      // By using this set directive we can embed a template within a ng-template.  aka, creating our own structual directive.
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      // Destroys the template.
      this.viewContainerRef.clear();
    }
  }

  constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) { }

}
