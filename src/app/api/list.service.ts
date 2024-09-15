import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { debounceTime, map, take, throttle } from 'rxjs/operators';
import { interval, forkJoin,race } from 'rxjs';
import { Posts } from '../parent-child/ngrx/posts.model';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  debounceTimeMs = 30000
  constructor(private http: HttpClient) { }

  getWeather(url:any) {
    return this.http.get<any>(url)
  }
  getPipe(url: any) {
    return this.http.get(url)
  }

  getFetch() {
    return fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json())
  }

  getAllThree() {
    return forkJoin([
    this.http.get('https://jsonplaceholder.typicode.com/posts'),
    this.http.get('https://jsonplaceholder.typicode.com/todos/1'),
    this.http.get('https://jsonplaceholder.typicode.com/albums')
    ])
  }

  getAllThreeRace() {
    return race([
    this.http.get('https://jsonplaceholder.typicode.com/posts'),
    this.http.get('https://jsonplaceholder.typicode.com/todos/1'),
    this.http.get('https://jsonplaceholder.typicode.com/albums')
    ])
  }
}
