import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealershipPageComponent } from './dealership-page.component';

describe('DealershipPageComponent', () => {
  let component: DealershipPageComponent;
  let fixture: ComponentFixture<DealershipPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DealershipPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DealershipPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
