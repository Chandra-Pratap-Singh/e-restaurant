import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { EntryService } from 'src/app/services/entry.service';

import { EntryComponent } from './entry.component';

fdescribe('EntryComponent', () => {
  let component: EntryComponent;
  let fixture: ComponentFixture<EntryComponent>;
  let entryService: EntryService;
  let router: Router

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntryComponent ],
      providers: [EntryService],
      imports: [RouterTestingModule]
    })
    .compileComponents();
    fixture = TestBed.createComponent(EntryComponent);
    component = fixture.componentInstance;
    entryService = TestBed.inject(EntryService);
    router = TestBed.inject(Router);
  });

  beforeEach(() => {
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('testing', () => {
    expect(component.testing()).toBe(true)
  })

  xit('getEntry should be called', () => {
    spyOn(entryService, 'setEntry').and.returnValue(true)
    expect(component.userEntry('admin')).toBeTrue();
    // expect(entryService.setEntry).toHaveBeenCalled()
  })

});
