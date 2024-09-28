import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListClassComponent } from './list-class/list-class.component';
import { ListService } from './api/list.service';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { ParentChildComponent } from './parent-child/parent-child.component';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { TitleRenderComponent } from './parent-child/title-render/title-render.component';
import { ObservableComponent } from './observable/observable.component'
import { SpllituModule } from './spllitu/spllitu.module';
import { AuthGuardService } from './auth-guard.service';
import { ScrollDummyComponent } from './scroll-dummy/scroll-dummy.component';
import { StoreModule } from '@ngrx/store';
import { postReducer } from './parent-child/ngrx/state/post.reducer';
import { collectionReducer } from './parent-child/ngrx/state/collection.reducer';
import { provideStore } from '@ngrx/store';
@NgModule({
  declarations: [
    AppComponent,
    ParentChildComponent,
    TitleRenderComponent,
    ObservableComponent,
    ScrollDummyComponent
  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SpllituModule,
    BrowserModule,
    StoreModule.forRoot({posts:postReducer,collection:collectionReducer}, {})
  ],
  providers: [ListService, provideHttpClient(), AuthGuardService,provideStore()],
  bootstrap: [AppComponent]
})
export class AppModule { }

