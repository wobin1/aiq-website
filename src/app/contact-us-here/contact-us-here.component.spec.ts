import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsHereComponent } from './contact-us-here.component';

describe('ContactUsHereComponent', () => {
  let component: ContactUsHereComponent;
  let fixture: ComponentFixture<ContactUsHereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactUsHereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactUsHereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
