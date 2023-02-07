import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatBadgeModule} from '@angular/material/badge';
import { SharedRoutingModule } from './shared-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    NavbarComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatBadgeModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  exports:[
    NavbarComponent,
    NotFoundComponent
  ]
})
export class SharedModule { }
