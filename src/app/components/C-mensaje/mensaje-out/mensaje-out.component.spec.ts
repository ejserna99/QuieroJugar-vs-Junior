import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajeOutComponent } from './mensaje-out.component';

describe('MensajeOutComponent', () => {
  let component: MensajeOutComponent;
  let fixture: ComponentFixture<MensajeOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MensajeOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MensajeOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
