import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Employee2 } from '../Models/Employee2';

@Injectable({
  providedIn: 'root'
})
export class Employee2Service {

  employee2List: Employee2[] = [
    {
      id: 1,
      name: "Mohamad",
      email: "1@helaly.com",
      phone: 95337070
    },
    {
      id: 2,
      name: "Sami Kamel",
      email: "2@helaly.com",
      phone: 99707033
    }

];

  constructor( private toastr: ToastrService) { }

  getAllEmp(){
    return this.employee2List;
  }

  getEmployee(id:number){
    return this.employee2List.find(em => em.id === id);
  }

  onUpdate(emp:Employee2){
    let current = this.employee2List.find(em => em.id === emp.id);
    if (current){
      current.email = emp.email;
      current.name = emp.name;
      current.phone = emp.phone 
    }
   
  }

  onAdd(emp:Employee2){
    this.employee2List.push(emp);
    this.toastr.success('Employee Added Successfully', 'Adding Employee', {
      timeOut: 3000,
    });
  }

  onDelete(id:number){
    let current = this.employee2List.find(e => e.id === id);
    if (current) {
      let index = this.employee2List.indexOf(current);
      this.employee2List.splice(index, 1);

      this.toastr.success('Employee Deleted Successfully', 'Deleting Employee', {
        timeOut: 3000,
      });

    }
  }

  filterEmployee(value:string){
    //return this.employee2List.find(em => em.id === id);
    return this.employee2List.filter((e) => e.name.toLowerCase().startsWith(value));
  }

}
