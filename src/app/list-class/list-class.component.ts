import { Component, OnChanges, OnInit } from '@angular/core';
import { ListService } from '../api/list.service';

@Component({
  selector: 'app-list-class',
  templateUrl: './list-class.component.html',
  styleUrls: ['./list-class.component.css']
})
export class ListClassComponent implements OnInit, OnChanges{
  isInsane: boolean=false
  value: string | undefined;
  name:string|undefined;
  email:string|undefined;


  constructor(private listService:ListService){
  }
  ngOnInit(): void {
    this.getList()
  }
  ngOnChanges(): void {
    console.log("the value changes", this.isInsane)
  }
  getList() {
    setTimeout(()=>{this.isInsane=true},10000)
    this.value="Shes the smartest"
  }
  getvalue(){
    if(!this.isInsane){
      this.value="Shes the preetiest"
    }else{
      this.value="Shes the smartest"
    }
    let data={
      name:this.name,
      email:this.email,
      value:this.value,
      isInsane:this.isInsane
    }
    console.log("get value", data)
  }

}
