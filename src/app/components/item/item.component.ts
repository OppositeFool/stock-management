import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IItem } from 'src/app/interface/item';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() itemData: IItem;
  @Output() onChangeName: EventEmitter<IItem> = new EventEmitter();
  constructor(private itemService: ItemsService) {}

  ngOnInit(): void {
    
  }
  saveItemName(newName: Event, itemData: IItem) {

   // this.newName = (name.target as HTMLInputElement).value;
itemData.name = (newName.target as HTMLInputElement).value;
this.itemService.changeItem(itemData).subscribe(item => item.id === itemData.id);
  }
}
