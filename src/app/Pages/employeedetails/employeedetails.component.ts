import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee2 } from 'src/app/Models/Employee2';
import { Employee2Service } from 'src/app/services/employee2.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {

  id:number= 0;
  title:string = '';
  emp:Employee2 = new Employee2();
  
  constructor(private route:ActivatedRoute, private service:Employee2Service, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.id =  parseInt(this.route.snapshot.paramMap.get('id') ?? '0' );
    // if(this.id === 0){
    //   this.title = 'Adding New Employee';
    // }else{
    //   this.title = 'Update Employee';
    // }

    this.title = this.id > 0 ? 'Update Employee' : 'Adding New Employee';

    if(this.id > 0){
      this.emp = this.service.getEmployee(this.id) ?? new Employee2;
    }

  }


  onSubmit(){
    if(this.emp.id === 0){
      this.service.onAdd(this.emp);
      this.router.navigateByUrl('employees');
    }else{
      //alert('updaete');
      this.service.onUpdate(this.emp);
      this.toastr.success('Employee Updated Successfully', 'Updating Employee', {
        timeOut: 3000,
      });
      
      this.router.navigateByUrl('employees');
    }
  }

}
