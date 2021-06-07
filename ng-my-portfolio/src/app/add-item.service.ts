import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Item } from './Item';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AddItemService {
  url = 'http://localhost:9001/addItem';
  constructor(
    private http: HttpClient,
    ) { }
  addItem(item: Item ): Observable<any>{
    return this.http.post(this.url, item);
  }
}
