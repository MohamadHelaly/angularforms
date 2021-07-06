import { Injectable } from '@angular/core';
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

  constructor() { }

  getAllEmp(){
    return this.employee2List;
  }

}
