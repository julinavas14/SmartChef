import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FormularioEditarComponent } from './formulario-editar.component';

describe('FormularioEditarComponent', () => {
  let component: FormularioEditarComponent;
  let fixture: ComponentFixture<FormularioEditarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [FormularioEditarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormularioEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
