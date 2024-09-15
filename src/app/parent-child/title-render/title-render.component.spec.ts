import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleRenderComponent } from './title-render.component';

describe('TitleRenderComponent', () => {
  let component: TitleRenderComponent;
  let fixture: ComponentFixture<TitleRenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleRenderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
