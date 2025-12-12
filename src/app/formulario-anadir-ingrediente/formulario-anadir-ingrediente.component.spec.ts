import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FormularioAnadirIngredienteComponent } from './formulario-anadir-ingrediente.component';

describe('FormularioAnadirIngredienteComponent', () => {
  let component: FormularioAnadirIngredienteComponent;
  let fixture: ComponentFixture<FormularioAnadirIngredienteComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [FormularioAnadirIngredienteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormularioAnadirIngredienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
