import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { TestGuard } from './test.guard';

const routes: Routes = [
  //{ path: '', redirectTo: '/first-component', pathMatch: 'full' },
  { 
    path: 'first-component', 
    component: FirstComponent,
    children: [
      { path: 'child-a', component: ChildAComponent },
      { path: 'child-b', component: ChildBComponent, canActivate: [TestGuard] }
    ]
  },
  { path: 'second-component', component: SecondComponent },
  { path: '',   redirectTo: '/first-component', pathMatch: 'full' }, // redirect to `first-component` 
  { path: '**', component: PageNotFoundComponent} // Wildcard route for a 404 page 
];
@NgModule({
  imports: [RouterModule.forRoot(routes /*, { useHash: true } */ )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
