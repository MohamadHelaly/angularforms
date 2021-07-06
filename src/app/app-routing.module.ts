import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AformComponent } from './forms/aform/aform.component';
import { CRUDfromComponent } from './forms/crudfrom/crudfrom.component';
import { EmployeedetailsComponent } from './pages/employeedetails/employeedetails.component';
import { EmployeelistComponent } from './pages/employeelist/employeelist.component';

const routes: Routes = [
    {path : 'firstform', component: AformComponent},
    {path : 'realCRUD', component: CRUDfromComponent},
    {path : 'employees', component: EmployeelistComponent},
    {path : 'employees/add/:id', component: EmployeedetailsComponent},
    {path : 'employees/edit/:id', component: EmployeedetailsComponent}
  ];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
