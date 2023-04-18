import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
@Directive({
  selector: '[appAppMyTooltip]',
})
export class AppMyTooltipDirective {
  // @Input('appAppMyTooltip') tooltipcontent: string = '';
  constructor(private eleRef: ElementRef, private renderer: Renderer2) {}
  createTooltip(): any {
    const tooltip = this.renderer.createElement('div');

  }
}
