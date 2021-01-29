import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatInternalCommsAppComponent } from './cat-internal-comms-app.component';

describe('CatInternalCommsAppComponent', () => {
  let component: CatInternalCommsAppComponent;
  let fixture: ComponentFixture<CatInternalCommsAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatInternalCommsAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatInternalCommsAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
