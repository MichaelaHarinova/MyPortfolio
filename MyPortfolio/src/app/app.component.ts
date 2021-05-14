import {Component, ElementRef, HostListener, ViewChild} from '@angular/core';
import {Item} from './Item';
import {AddItemService} from './add-item.service';
import {OnInit} from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'MyPortfolio';
  public items = [{name: null, content: null, date: null}];

  item = new Item('', '', new Date(''));

  @ViewChild('carousel', {static: true})
  carousel!: NgbCarousel;
  // tslint:disable-next-line:typedef
  prevSlide() {
    this.carousel.prev();
  }

  // tslint:disable-next-line:typedef
  nextSlide() {
    this.carousel.next();
  }

  // tslint:disable-next-line:typedef
  stopSlider() {
    this.carousel.pause();
  }
  // parallax
 // IniTop = 0;
 // parallaxRatio = 1;
/*
 @ViewChild('parallax') parallax!: ElementRef;
  @HostListener('window: scroll', ['$event'])
  // tslint:disable-next-line:typedef
  onWindowScroll(event: any) {
    // tslint:disable-next-line:no-unused-expression
    this.parallax.nativeElement.style.top(this.IniTop - (window.scrollY * this.parallaxRatio)) + 'px';
  }*/
  // form
  constructor(
    private addItemService: AddItemService,
  ) {
    this.addItemService = addItemService;
  }
  onSubmit(): void {
    this.addItemService.addItem(this.item).subscribe
    (data => this.getRequest('http://localhost:9001/items').then(res => console.log(this.items)), error => console.error(error));
  }

  async getRequest(url: string): Promise<any> {
    // custom getter
    await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json()).then(data => this.items = data);
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): any {
    this.getRequest('http://localhost:9001/items').then(res => console.log(this.items));
  }
}

