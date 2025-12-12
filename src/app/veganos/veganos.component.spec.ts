import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { VeganosComponent } from './veganos.component';

describe('VeganosComponent', () => {
  let component: VeganosComponent;
  let fixture: ComponentFixture<VeganosComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [VeganosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VeganosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
