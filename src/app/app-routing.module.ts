import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListClassComponent } from './list-class/list-class.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { ParentChildComponent } from './parent-child/parent-child.component';
import { ObservableComponent } from './observable/observable.component';
import { AuthGuardService } from './auth-guard.service';
import { ScrollDummyComponent } from './scroll-dummy/scroll-dummy.component';

const routes: Routes = [
  // { path: 'test', component: ListClassComponent},
  // { path: 'jsform', component: ReactiveFormsComponent},
  { path: 'pc', component: ParentChildComponent},
  { path: 'scroll', component: ScrollDummyComponent},
  { path: 'obs', component: ObservableComponent, canActivate:[AuthGuardService]},
  {path: 'split',
    loadChildren: () => import('./spllitu/spllitu.module').then(m => m.SpllituModule)
}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
