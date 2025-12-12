import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InstockComponent } from './instock.component';

describe('InstockComponent', () => {
  let component: InstockComponent;
  let fixture: ComponentFixture<InstockComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [InstockComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InstockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
