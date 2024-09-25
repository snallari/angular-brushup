import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListClassComponent } from './list-class.component';

describe('ListClassComponent', () => {
  let component: ListClassComponent;
  let fixture: ComponentFixture<ListClassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ListClassComponent ]
    });

    fixture = TestBed.createComponent(ListClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should call getList on ngOnInit', () => {
    jest.spyOn(component, 'getList');
    component.ngOnInit();
    expect(component.getList).toHaveBeenCalled();
  });

  it('should log value change on ngOnChanges', () => {
    console.log = jest.fn();  // Mock console.log
    component.isInsane = true;
    component.ngOnChanges();
    expect(console.log).toHaveBeenCalledWith('the value changes', true);
  });

  it('should set correct value when isInsane is false in getValue', () => {
    component.isInsane = false;
    component.getvalue();
    expect(component.value).toBe("Shes the preetiest");
  });

  it('should set correct value when isInsane is true in getValue', () => {
    component.isInsane = true;
    component.getvalue();
    expect(component.value).toBe("Shes the smartest");
  });

  it('should log correct data in getvalue', () => {
    console.log = jest.fn();
    component.isInsane = true;
    component.name = "Alice";
    component.email = "alice@example.com";
    
    component.getvalue();
    
    expect(console.log).toHaveBeenCalledWith("get value", {
      name: "Alice",
      email: "alice@example.com",
      value: "Shes the smartest",
      isInsane: true
    });
  });
});