import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MiToastComponent } from './mi-toast.component';

describe('MiToastComponent', () => {
  let component: MiToastComponent;
  let fixture: ComponentFixture<MiToastComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [MiToastComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MiToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
