import {ComponentFixture, TestBed, inject, tick, fakeAsync, waitForAsync} from '@angular/core/testing';

import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { ItemsComponent } from './items.component';

describe('HeaderComponent', () => {
  let component: ItemsComponent;
  let fixture: ComponentFixture<ItemsComponent>;
  let de: DebugElement;
  
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ItemsComponent],
    })
    .compileComponents();
  }));
  
  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
  
    fixture.detectChanges();
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  });