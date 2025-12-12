import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AlimentoveganosComponent } from './alimentoveganos.component';

describe('AlimentoveganosComponent', () => {
  let component: AlimentoveganosComponent;
  let fixture: ComponentFixture<AlimentoveganosComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [AlimentoveganosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AlimentoveganosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
