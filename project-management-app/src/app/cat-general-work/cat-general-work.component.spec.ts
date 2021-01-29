import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatGeneralWorkComponent } from './cat-general-work.component';

describe('CatGeneralWorkComponent', () => {
  let component: CatGeneralWorkComponent;
  let fixture: ComponentFixture<CatGeneralWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatGeneralWorkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatGeneralWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
