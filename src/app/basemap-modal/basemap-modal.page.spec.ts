import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasemapModalPage } from './basemap-modal.page';

describe('BasemapModalPage', () => {
  let component: BasemapModalPage;
  let fixture: ComponentFixture<BasemapModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasemapModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasemapModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
