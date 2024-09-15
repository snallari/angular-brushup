import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-title-render',
  templateUrl: './title-render.component.html',
  styleUrls: ['./title-render.component.css']
})
export class TitleRenderComponent implements OnInit {
  @Input() post: any
  @Output() titleClick = new EventEmitter()
  title: any;
  newMsg:string="Child call";

  ngOnInit(): void {
    console.log("child post", this.post)
    this.title=this.post.title
  }

  getItem(){
    this.titleClick.emit({name:this.title})
  }
}
