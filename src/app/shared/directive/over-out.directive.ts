import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appOverOut]',
})
export class OverOutDirective implements OnInit {
  constructor(private eleRef: ElementRef, private renderer: Renderer2) {}
  ngOnInit(): void {
    this.renderer.setStyle(this.eleRef.nativeElement, 'background-color',"blue");
    this.renderer.setStyle(this.eleRef.nativeElement, 'margin-top','19px');
  }
 @HostListener('mouseover') call(){
    this.renderer.setStyle(this.eleRef.nativeElement,'background-color','orange')
    this.renderer.setStyle(this.eleRef.nativeElement,'margin-top','19px')
  }
  @HostListener('mouseout') call1(){
    this.renderer.setStyle(this.eleRef.nativeElement,'background-color','skyblue');
    this.renderer.setStyle(this.eleRef.nativeElement,'margin-top','19px')
  }
}
