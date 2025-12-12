import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PostresComponent } from './postres.component';

describe('PostresComponent', () => {
  let component: PostresComponent;
  let fixture: ComponentFixture<PostresComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [PostresComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PostresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
