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
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AddCakeComponent } from './dialog/add-cake/add-cake.component';
import {MatSelectModule} from '@angular/material/select';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    CakeComponent,
    CakeDetailComponent,
    CakeListComponent,
    CakeListDetailComponent,
    AddCakeComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
