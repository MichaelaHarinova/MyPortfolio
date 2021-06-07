/*import {Directive, Input, ElementRef, HostListener} from '@angular/core';*/
import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

const input = Input('ratio');

@Directive({
  selector: '[appParallax]'
})
export class ParallaxDirective {
  @Input('factor') set parallaxFactor(val: any) {
    this.factor = val ? val : -1;
  }

  private factor!: number;

  constructor(
    private planet1: ElementRef,
    private planet2: Renderer2
  ) { }

  @HostListener('window:scroll')
  // tslint:disable-next-line:typedef
  onWindowScroll() {
    this.planet2.setProperty(
      this.planet1.nativeElement,
      'style',
      `transform: translateY(-${this.getTranslation()}px)`);
  }

  // tslint:disable-next-line:typedef
  private getTranslation() {
    return window.scrollY * this.factor / 10;
  }
  /*
  @input parallaxRatio1 = 1;
  initialTop1 = 0;
  @input parallaxRatio2 = 0.8;
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
  }*/
}
