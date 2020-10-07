import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagPopupComponent } from './flag-popup.component';

describe('FlagPopupComponent', () => {
  let component: FlagPopupComponent;
  let fixture: ComponentFixture<FlagPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlagPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlagPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
