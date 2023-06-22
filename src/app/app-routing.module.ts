import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CakeListComponent } from './cake-list/cake-list.component';
import { CakeListDetailComponent } from './cake-list-detail/cake-list-detail.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path:'home', component:HomeComponent},
  { path:'cakes', component:CakeListComponent},
  { path:'cake/:id',component:CakeListDetailComponent,data:{}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
