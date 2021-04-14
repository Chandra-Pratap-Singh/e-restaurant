import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailSentConfirmationPageComponent } from './email-sent-confirmation-page.component';

describe('EmailSentConfirmationPageComponent', () => {
  let component: EmailSentConfirmationPageComponent;
  let fixture: ComponentFixture<EmailSentConfirmationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailSentConfirmationPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailSentConfirmationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
