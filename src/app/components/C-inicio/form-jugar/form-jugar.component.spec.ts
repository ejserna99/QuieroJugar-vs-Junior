import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormJugarComponent } from './form-jugar.component';

describe('FormJugarComponent', () => {
  let component: FormJugarComponent;
  let fixture: ComponentFixture<FormJugarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormJugarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormJugarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
