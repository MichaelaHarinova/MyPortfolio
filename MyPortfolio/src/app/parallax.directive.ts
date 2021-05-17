import {Directive, Input, ElementRef, HostListener} from '@angular/core';

const input = Input('ratio');

@Directive({
  selector: '[appParallax]'
})
export class ParallaxDirective {
  @input parallaxRatio1 = 1;
  initialTop1 = 0;
  @input parallaxRatio2 = 2;
  initialTop2 = 1;

  constructor(private planet1: ElementRef, private planet2: ElementRef) {
    this.initialTop1 = this.planet1.nativeElement.getBoundingClientRect().top;
    this.initialTop2 = this.planet2.nativeElement.getBoundingClientRect().top;
  }

  @HostListener('window:scroll', ['$event'])
  // tslint:disable-next-line:typedef
  onWindowScroll(event: any) {
    this.planet1.nativeElement.style.top = (this.initialTop1 - (window.scrollY * this.parallaxRatio1)) + 'px';
    this.planet2.nativeElement.style.top = (this.initialTop2 - (window.scrollY * this.parallaxRatio2)) + 'px';
  }
}
