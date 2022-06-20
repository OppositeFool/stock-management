import { Component, OnInit, Input } from '@angular/core';
import { IItem } from 'src/app/interface/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() itemData: IItem;

  constructor() {}

  ngOnInit(): void {
    
  }
}
