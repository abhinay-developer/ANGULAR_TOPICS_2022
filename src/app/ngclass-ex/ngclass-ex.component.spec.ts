import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgclassExComponent } from './ngclass-ex.component';

describe('NgclassExComponent', () => {
  let component: NgclassExComponent;
  let fixture: ComponentFixture<NgclassExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgclassExComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgclassExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
