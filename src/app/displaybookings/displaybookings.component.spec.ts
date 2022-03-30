import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaybookingsComponent } from './displaybookings.component';

describe('DisplaybookingsComponent', () => {
  let component: DisplaybookingsComponent;
  let fixture: ComponentFixture<DisplaybookingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaybookingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaybookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
