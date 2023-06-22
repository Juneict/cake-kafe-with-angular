import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CakeComponent } from './cake/cake.component';
import { CakeDetailComponent } from './cake-detail/cake-detail.component';
import { FormsModule } from '@angular/forms';
import { CakeListComponent } from './cake-list/cake-list.component';
import { CakeListDetailComponent } from './cake-list-detail/cake-list-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
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
    FormsModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
