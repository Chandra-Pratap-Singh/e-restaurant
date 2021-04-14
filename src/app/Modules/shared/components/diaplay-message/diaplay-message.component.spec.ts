import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaplayMessageComponent } from './diaplay-message.component';

describe('DiaplayMessageComponent', () => {
  let component: DiaplayMessageComponent;
  let fixture: ComponentFixture<DiaplayMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiaplayMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaplayMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
