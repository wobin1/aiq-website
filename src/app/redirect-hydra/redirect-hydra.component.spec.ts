import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirectHydraComponent } from './redirect-hydra.component';

describe('RedirectHydraComponent', () => {
  let component: RedirectHydraComponent;
  let fixture: ComponentFixture<RedirectHydraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedirectHydraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedirectHydraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
