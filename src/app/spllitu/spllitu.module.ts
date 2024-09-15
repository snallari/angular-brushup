import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpllituRoutingModule } from './spllitu-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsComponent } from '../reactive-forms/reactive-forms.component';
import { ListClassComponent } from '../list-class/list-class.component';
import { AuthGuardService } from '../auth-guard.service';


@NgModule({
  declarations: [
    ListClassComponent,
    ReactiveFormsComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    SpllituRoutingModule,
  ]
})
export class SpllituModule { }
