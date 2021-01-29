import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatAllTaskComponent } from './cat-all-task.component';

describe('CatAllTaskComponent', () => {
  let component: CatAllTaskComponent;
  let fixture: ComponentFixture<CatAllTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatAllTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatAllTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});