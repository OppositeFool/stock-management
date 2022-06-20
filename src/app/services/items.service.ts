import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { IItem } from '../interface/item';

const httpoptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  url : string = "http://localhost:3000/items/";

  constructor(private http:HttpClient) { }

  getItems():Observable<IItem[]> {
    return this.http.get<IItem[]>(this.url);
  }

  addItem(item: IItem):Observable<IItem> {
    return this.http.post<IItem>(this.url, item, httpoptions);
  }
  changeItem(item: IItem) :Observable<IItem>
  {
    return this.http.put<IItem>(this.url + item.id, item, httpoptions);
  }
}
