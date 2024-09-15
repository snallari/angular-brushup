import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollDummyComponent } from './scroll-dummy.component';

describe('ScrollDummyComponent', () => {
  let component: ScrollDummyComponent;
  let fixture: ComponentFixture<ScrollDummyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrollDummyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollDummyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
