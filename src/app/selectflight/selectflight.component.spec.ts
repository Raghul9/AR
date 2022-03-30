import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectflightComponent } from './selectflight.component';

describe('SelectflightComponent', () => {
  let component: SelectflightComponent;
  let fixture: ComponentFixture<SelectflightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectflightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectflightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
