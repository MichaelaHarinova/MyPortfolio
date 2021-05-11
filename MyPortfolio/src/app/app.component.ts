import { Component } from '@angular/core';
import { Item } from './Item';
import {AddItemService} from './add-item.service';
import {OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  constructor(
    private addItemService: AddItemService,
  ) {
    this.addItemService = addItemService;
  }
  title = 'MyPortfolio';
  public items = [{placeName: null, plan: null, date: null}];

  item = new Item('', '', new Date(''));

  addItem(): void {
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

