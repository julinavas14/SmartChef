import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ModalPerfilComponent } from './modal-perfil.component';

describe('ModalPerfilComponent', () => {
  let component: ModalPerfilComponent;
  let fixture: ComponentFixture<ModalPerfilComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ModalPerfilComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ModalPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
