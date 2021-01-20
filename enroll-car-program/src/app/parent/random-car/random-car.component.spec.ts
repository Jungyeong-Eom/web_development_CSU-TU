import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomCarComponent } from './random-car.component';

describe('RandomCarComponent', () => {
  let component: RandomCarComponent;
  let fixture: ComponentFixture<RandomCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomCarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
