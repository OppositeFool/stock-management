import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IItem } from 'src/app/interface/item';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
  @Output() onAddItem: EventEmitter<IItem> = new EventEmitter();

  name: string;
  price: number;
  unit: string;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit()
  {
    if(!this.name)
    {
    alert("Add Name!");
    return;
    }

    const newItem = {
      name: this.name,
      price: this.price,
      unit: this.unit
    }
this.onAddItem.emit(newItem);

    this.name = "";
    this.price = 0;
    this.unit = "";
  }

}
