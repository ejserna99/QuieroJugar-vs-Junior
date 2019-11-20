import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajeInComponent } from './mensaje-in.component';

describe('MensajeInComponent', () => {
  let component: MensajeInComponent;
  let fixture: ComponentFixture<MensajeInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MensajeInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MensajeInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
