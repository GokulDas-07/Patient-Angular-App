import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ViewPatientComponent } from './view-patient/view-patient.component';
import { SearchPatientComponent } from './search-patient/search-patient.component'

@NgModule({
  declarations: [
    AppComponent,
    AddPatientComponent,
    NavbarComponent,
    ViewPatientComponent,
    SearchPatientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
