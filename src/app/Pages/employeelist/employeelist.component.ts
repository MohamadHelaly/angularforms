import { Component, OnInit } from '@angular/core';
import { Employee2 } from 'src/app/Models/Employee2';
import { Employee2Service } from 'src/app/services/employee2.service';


@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

  employee2List:Employee2[] = [];
  txtSearch:string = '';

  constructor(private service:Employee2Service) { }

  ngOnInit(): void {
    this.employee2List = this.service.getAllEmp();
  }

  delete(id:number){
    this.service.onDelete(id);
  }

  onKeyUp(){
    console.log(this.txtSearch);
    this.employee2List = this.service.filterEmployee(this.txtSearch);
  }

}
