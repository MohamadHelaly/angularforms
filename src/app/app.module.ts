import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
 
//import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AformComponent } from './forms/aform/aform.component';
import { CRUDfromComponent } from './forms/crudfrom/crudfrom.component';
import { EmployeelistComponent } from './pages/employeelist/employeelist.component';
import { EmployeedetailsComponent } from './pages/employeedetails/employeedetails.component';



@NgModule({
  declarations: [
    AppComponent,
    AformComponent,
    CRUDfromComponent,
    EmployeelistComponent,
    EmployeedetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

    //CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
