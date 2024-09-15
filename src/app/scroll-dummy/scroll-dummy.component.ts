import { Component, OnInit } from '@angular/core';
import { debounceTime, fromEvent, interval, map, throttleTime } from 'rxjs';

@Component({
  selector: 'app-scroll-dummy',
  templateUrl: './scroll-dummy.component.html',
  styleUrls: ['./scroll-dummy.component.css']
})
//Add the scroll event, the page y ofset , and throttle time when the page moves down  the page y set increases and moves up the page y set decresaes
//Throttle subscribes , silences and than subscribes
//Debounce subscribes after a particular time
export class ScrollDummyComponent implements OnInit{
  ngOnInit(): void {
    const obs = fromEvent(window, 'scroll');
    obs.pipe(throttleTime(500), map((data) => {
      console.log('throttle');
      console.log(window.pageYOffset);
      return data;
    }),
    debounceTime(350)).subscribe((res) => {
      console.log("test", res)
    }, (e) => { console.log(console.error(e)) });
  }

}
