import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHorizontalOrderCardComponent } from './admin-horizontal-order-card.component';

describe('AdminHorizontalOrderCardComponent', () => {
  let component: AdminHorizontalOrderCardComponent;
  let fixture: ComponentFixture<AdminHorizontalOrderCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminHorizontalOrderCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHorizontalOrderCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
