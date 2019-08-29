import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegendModalPage } from './legend-modal.page';

describe('LegendModalPage', () => {
  let component: LegendModalPage;
  let fixture: ComponentFixture<LegendModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegendModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegendModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
