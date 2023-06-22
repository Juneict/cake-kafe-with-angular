import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CakeComponent } from './cake/cake.component';
import { CakeDetailComponent } from './cake-detail/cake-detail.component';
import { FormsModule } from '@angular/forms';
import { CakeListComponent } from './cake-list/cake-list.component';
import { CakeListDetailComponent } from './cake-list-detail/cake-list-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CakeComponent,
    CakeDetailComponent,
    CakeListComponent,
    CakeListDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
