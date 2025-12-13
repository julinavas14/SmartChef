import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Formulario4Component } from './formulario4.component';

describe('Formulario4Component', () => {
  let component: Formulario4Component;
  let fixture: ComponentFixture<Formulario4Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [Formulario4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Formulario4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
