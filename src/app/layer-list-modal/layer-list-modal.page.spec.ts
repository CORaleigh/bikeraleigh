import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayerListModalPage } from './layer-list-modal.page';

describe('LayerListModalPage', () => {
  let component: LayerListModalPage;
  let fixture: ComponentFixture<LayerListModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayerListModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayerListModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
