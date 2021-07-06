import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee2 } from 'src/app/Models/Employee2';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {

  id:number= 0;
  title:string = '';
  emp:Employee2 = new Employee2();
  
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id =  parseInt(this.route.snapshot.paramMap.get('id') ?? '0' );
    // if(this.id === 0){
    //   this.title = 'Adding New Employee';
    // }else{
    //   this.title = 'Update Employee';
    // }

    this.title = this.id > 0 ? 'Update Employee' : 'Adding New Employee';

  }

}
