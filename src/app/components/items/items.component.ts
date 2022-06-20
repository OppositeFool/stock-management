import { Component, OnInit } from '@angular/core';
import { IItem } from 'src/app/interface/item';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  isAddOn = false;
  items: IItem[];
  constructor(private itemservice:ItemsService) {
  }
  ngOnInit(): void {
    this.getItems();
  }
  getItems(): void {
    this.itemservice.getItems().subscribe(data => {
      this.items = data;
     
     })
  }
  toggleAddOn()
  {
    this.isAddOn = !this.isAddOn;
  }
  
  addItem(item: IItem) {
    this.itemservice.addItem(item).subscribe(item => {
     this.items.push(item);
     })
  }
  getItemsFiltered(filterstring: Event): void {
    this.itemservice.getItems().subscribe(data => {
      this.items = data;
      this.items = this.items.filter((item) => (
        item.name.toLowerCase().includes((filterstring.target as HTMLInputElement).value.toLowerCase())
      ))
     })
  }

}
