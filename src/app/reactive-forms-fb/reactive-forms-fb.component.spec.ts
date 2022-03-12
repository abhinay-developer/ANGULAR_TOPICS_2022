import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsFbComponent } from './reactive-forms-fb.component';

describe('ReactiveFormsFbComponent', () => {
  let component: ReactiveFormsFbComponent;
  let fixture: ComponentFixture<ReactiveFormsFbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormsFbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormsFbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
