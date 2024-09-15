import { AfterViewInit, Component, OnInit, ViewChild, inject } from '@angular/core';
import { ListService } from '../api/list.service';
import { TitleRenderComponent } from './title-render/title-render.component';
import { debounceTime, fromEvent, map, throttleTime } from 'rxjs';
import { Store } from '@ngrx/store';
import { PostActions, PostActionsAPI } from './ngrx/state/post.actions';
import { selectPostCollection, selectPosts } from './ngrx/state/post.selector';

@Component({
  selector: 'app-parent-child',
  templateUrl: './parent-child.component.html',
  styleUrls: ['./parent-child.component.css']
})
export class ParentChildComponent implements OnInit, AfterViewInit {

  posts$ = this.store.select(selectPosts);
  postCollection = this.store.select(selectPostCollection);
  post: any
  // @ViewChild('nameRef')nameElementRef:ElementRef | undefined;
  @ViewChild(TitleRenderComponent, {static: false})childComponentRef: TitleRenderComponent | undefined;

  constructor(private listService: ListService, private store:Store) {
    console.log("post",this.posts$)

  }
  ngAfterViewInit(): void {
    console.log("ref",this.childComponentRef)
    //this.childComponentRef.newMsg="This is coming from parent";
    
  }
  ngOnInit(): void {
    //this.listService.getAllThreeRace().subscribe({next:(res)=>{this.post=res, console.log(res)},error: (e)=>console.log(e),complete:()=>console.log("complete")})
    //this.listService.getAllThree().subscribe({next:(res)=>{this.post=res, console.log(res)},error: (e)=>console.log(e),complete:()=>console.log("complete")})
    this.listService.getWeather('https://jsonplaceholder.typicode.com/posts').subscribe({next:(res)=> this.store.dispatch(PostActionsAPI.retreivePostList(res)),
    error:(e)=>console.log(e)}
    )
    // this.listService.getFetch().then((data)=>console.log(data))
  }   

  getClick(e:any){
   console.log(e)
  // this.store.dispatch(PostActions.addPost({post}))
  }

}
