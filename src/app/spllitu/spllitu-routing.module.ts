import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListClassComponent } from '../list-class/list-class.component';
import { ReactiveFormsComponent } from '../reactive-forms/reactive-forms.component';

const routes: Routes = [
  { path: "form", component: ListClassComponent },
  { path: "reactive", component: ReactiveFormsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpllituRoutingModule { }
