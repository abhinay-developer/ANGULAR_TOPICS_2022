import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgifElseExComponent } from './ngif-else-ex.component';

describe('NgifElseExComponent', () => {
  let component: NgifElseExComponent;
  let fixture: ComponentFixture<NgifElseExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgifElseExComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgifElseExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
