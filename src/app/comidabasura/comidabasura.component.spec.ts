import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ComidabasuraComponent } from './comidabasura.component';

describe('ComidabasuraComponent', () => {
  let component: ComidabasuraComponent;
  let fixture: ComponentFixture<ComidabasuraComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ComidabasuraComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ComidabasuraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
