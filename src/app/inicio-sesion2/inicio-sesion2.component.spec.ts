import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InicioSesion2Component } from './inicio-sesion2.component';

describe('InicioSesion2Component', () => {
  let component: InicioSesion2Component;
  let fixture: ComponentFixture<InicioSesion2Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [InicioSesion2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(InicioSesion2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
