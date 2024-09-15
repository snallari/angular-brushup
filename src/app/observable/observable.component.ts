import { AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { ListService } from '../api/list.service';
import { Observable, concatAll, debounce, debounceTime, filter, from, fromEvent, interval, map, mergeAll, of, take, takeLast } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit, AfterViewInit {
  post: any
  name: any
  @ViewChild('nameRef') nameElementRef: ElementRef | undefined
  value: any = {
    name: ""
  }

  constructor(private listService: ListService) {
  }
  ngAfterViewInit(): void {
    console.log(this.nameElementRef)
    this.setTypingTimeOut()
    //this.nameElementRef?.nativeElement.focus();
    //this.nameElementRef.
  }

  setTypingTimeOut() {
    const eventStream = fromEvent(this.nameElementRef?.nativeElement, 'input').pipe(map((event:any) => event.target.value),debounceTime(500))
      eventStream.subscribe((data:any) => {
       console.log(data)
      });
  }

  ngOnInit(): void {
    // this.listService.getPipe('https://jsonplaceholder.typicode.com/posts').pipe().subscribe(
    //   (res: any) => {
    //     this.post = res
    //     console.log("post", this.post)
    //   }, (e: any) => {
    //     console.log(e)
    //   })
    this.get5();
    this.getfilter()
    this.getConcatall()
  }

  get5() {
    // To make the observables readable we have pipe, take (), gives out the first to the number mentioned in the arguments
    const observable$ = from([1, 2, 3, 4, 5, 6]);
    const limited$ = observable$.pipe(take(5));
    limited$.subscribe(
      value => console.log(value),
      err => console.error(err),
      () => console.log('Observable complete')
    );
  }

  getfilter() {
    const observable$ = from([1, 2, 3, 4, 5, 6]);
    const limited$ = observable$.pipe(filter((v) => v % 2 !== 0))
    limited$.subscribe(
      value => console.log(value),
      err => console.error(err),
      () => console.log('filter Observable complete')
    );
  }
  getConcatall(){
    console.log("interval")
    //inetrval are creation observers
    //from takes an array as i/p to the observers
    // Pipe takes a observable i/p and returns another observable
    const a = interval(1000).pipe(take(3))
    //console.log(a.subscribe(v=>console.log(v), e=>console.log(e), ()=>console.log("end")))
    const b=from([10,20,40, 50, 60]).pipe(takeLast(3))
   // console.log(a.subscribe(v=>console.log(v), e=>console.log(e), ()=>console.log("end")))
    //of converts the args to observable sequence
    //HOC, take 2 observable,
    //concat waits for one observable and returns the next observable
    //Merge all combines 2 observables and return
    const hoc=of(a,b)
    hoc.pipe(concatAll()).subscribe((value) => console.log(value));
    //hoc.pipe(mergeAll()).subscribe((value) => console.log(value));
  }
}

