import {
  Directive,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appApplycss]',
})
export class ApplycssDirective implements OnInit {
  check!: number;
  constructor(private EleRef: ElementRef, private renderer: Renderer2) {}
  ngOnInit(): void {
    this.renderer.setStyle(
      this.EleRef.nativeElement,
      'background-color',
      'skyblue'
    );
  }
  @HostListener('mouseover') call() {
    this.renderer.setStyle(
      this.EleRef.nativeElement,
      'background-color',
      'white'
    );
  }
  @HostListener('mouseout') call2() {
    this.renderer.setStyle(
      this.EleRef.nativeElement,
      'background-color',
      'warning'
    );
  }
  @HostListener('keyup') callb() {
    // let check = +this.EleRef.nativeElement.value;
    // console.log(typeof check)
    // console.log(check)
    //     if (+this.EleRef.nativeElement.value >= 0) {
    //  this.EleRef.nativeElement.value >= 0
    //     }else{
    //       alert("po")
    //     }
    let p = this.EleRef.nativeElement.value.toString();
    // console.log(typeof p);
    p = this.EleRef.nativeElement.value.replace(/ /gi, '');
    console.log(p);
    let arr: Array<string> = [];

    if (p.length > 16) {
      p = p.slice(0, 16);
      console.log(p);
    }
    for (let i = 0; i < p.length; i = i + 4) {
      arr.push(p.slice(i, i + 4));
    }

    console.log(arr);
    console.log(arr.join(' '));
    let number = arr.map((ele) => +ele);

    if (number.every((ele) => ele >= 0)) {
      this.EleRef.nativeElement.value = arr.join(' ');
    }else{
      alert("allow only numbers")
    }
  }
}
