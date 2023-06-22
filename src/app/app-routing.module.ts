import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CakeListComponent } from './cake-list/cake-list.component';
import { CakeListDetailComponent } from './cake-list-detail/cake-list-detail.component';

const routes: Routes = [
  { path:'cakes', component:CakeListComponent},
  { path:'cake/:id',component:CakeListDetailComponent,data:{}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
