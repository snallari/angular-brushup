import { AppComponent } from "./app.component";

describe('AppComponent',()=>{
  let fixture:AppComponent;
  beforeEach(()=>{
    fixture=new AppComponent();
  })
  it('should have a title sai-angular',()=>{
    expect(fixture.title).toEqual('sai-angular')
  })
})