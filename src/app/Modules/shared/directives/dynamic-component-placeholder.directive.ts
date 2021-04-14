import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[dynamicComponentPlaceholder]',
})
export class DynamicComponentPlaceholderDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
