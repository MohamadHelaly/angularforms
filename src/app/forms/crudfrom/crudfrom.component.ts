import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Models/employee';
import { EmpcrudService } from 'src/app/services/empcrud.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-crudfrom',
  templateUrl: './crudfrom.component.html',
  styleUrls: ['./crudfrom.component.css']
})
export class CRUDfromComponent implements OnInit {



//https://www.youtube.com/watch?v=S5dzfuh3t8U&t=2909s


  operationTitle:string = 'Save';
  errorMsg:string='';
  employee:Employee = new Employee();
  lstEmps:Employee[] = [];

  constructor(private service:EmpcrudService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getAllEmp();


    

  }

  resetForm(from:NgForm){
    alert('still not working !!');
    from.reset;
  }

  onSubmit(){
    //alert('aaa');
    //console.log(this.employee);

    if(this.employee.id === 0){
    //add
    this.service.Add(this.employee).subscribe(
      data => this.lstEmps.push(data),
      error => this.errorMsg = error.statusText, 
    );

    this.toastr.success('New Employee Added Successfully', 'Adding Employee', {
      timeOut: 3000,
    });

    }else{
      //update 
      this.service.update(this.employee).subscribe(
        data => {
          //this.employee = data
          this.getAllEmp();
        },
        error => this.errorMsg = error.statusText,
        );
    }
    this.toastr.success('Update Employee Successfully', 'Update Employee', {
      timeOut: 3000,
    });

  }

  getAllEmp(){

     this.service.getAll().subscribe(
        data => this.lstEmps =  data,
        error => this.errorMsg = error.statusText,
        );

        this.toastr.success('data loaded successfully', 'Loading Data', {
          timeOut: 3000,
        });
  }

  Edit(emp:Employee){
    this.employee = Object.assign({}, emp);
    this.operationTitle = 'Update';
  }

  Add(){
   this.employee = new Employee();
   this.operationTitle = 'SAVE'
  }

  Delete(id: number) {
    // const empToRemove = this.lstEmps.find(obj => obj.id === id);
    // console.log(empToRemove);

    if (confirm("Are you sure to delete?")) {
      this.service.Delete(id).subscribe(
        () => (this.lstEmps = this.lstEmps.filter((obj) => obj.id !== id)),
        error => this.errorMsg = error.statusText
      );

      //this.taskService.deleteTask(task).subscribe(()=> (this.tasks = this.tasks.filter((t)=> t.id !== task.id))  );

      console.log(this.lstEmps);
    }

    
  }

}
