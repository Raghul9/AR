import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FticketbookingComponent } from './fticketbooking.component';

describe('FticketbookingComponent', () => {
  let component: FticketbookingComponent;
  let fixture: ComponentFixture<FticketbookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FticketbookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FticketbookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
