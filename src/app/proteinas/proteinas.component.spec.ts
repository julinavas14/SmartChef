import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProteinasComponent } from './proteinas.component';

describe('ProteinasComponent', () => {
  let component: ProteinasComponent;
  let fixture: ComponentFixture<ProteinasComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ProteinasComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProteinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
