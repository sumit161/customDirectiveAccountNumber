import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appAdvancedCss]',
})
export class AdvancedCssDirective implements OnInit {
  constructor(private eleRef: ElementRef, private renderer: Renderer2) {}
@Input() hoverColor!:string
  ngOnInit(): void {
    // console.log(this.eleRef.nativeElement);
    this.renderer.setStyle(
      this.eleRef.nativeElement,
      'background-color',
      'blueviolet'
    );
    // this.renderer.setStyle( this.eleRef.nativeElement,'color','white');
    // this.renderer.setStyle( this.eleRef.nativeElement,'padding','20px');
    this.renderer.addClass(this.eleRef.nativeElement, 'alert');
  }
  @HostListener('mouseover') callback() {
    this.renderer.setStyle(
      this.eleRef.nativeElement,
      'background-color',
      this.hoverColor
    );
  }
  @HostListener('mouseout') callback1() {
    this.renderer.setStyle(
      this.eleRef.nativeElement,
      'background-color',
      'blueviolet'
    );
  }
}
