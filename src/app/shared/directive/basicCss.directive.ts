import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[basicCss]',
})
export class BasicDirective implements OnInit {
  constructor(private eleref: ElementRef) {}

  ngOnInit(): void {
    console.log(this.eleref.nativeElement);
    this.eleref.nativeElement.innerHTML = 'hello ,how are you';
    this.eleref.nativeElement.style.backgroundColor = 'orange';
    this.eleref.nativeElement.style.padding = '10px';
    this.eleref.nativeElement.style.color = '#fff';
  }
}
