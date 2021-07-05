import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Models/employee';
import { EmpcrudService } from 'src/app/services/empcrud.service';

@Component({
  selector: 'app-crudfrom',
  templateUrl: './crudfrom.component.html',
  styleUrls: ['./crudfrom.component.css']
})
export class CRUDfromComponent implements OnInit {

  operationTitle:string = 'Save';
  errorMsg:string='';
  employee:Employee = new Employee();
  lstEmps:Employee[] = [];

  constructor(private service:EmpcrudService) { }

  ngOnInit(): void {
    this.getAllEmp();
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

    }else{
      //update 
      this.service.update(this.employee).subscribe(
        data => this.employee = data,
        error => this.errorMsg = error.statusText,
        );
    }


  }

  getAllEmp(){

     this.service.getAll().subscribe(
        data => this.lstEmps =  data,
        error => this.errorMsg = error.statusText,
        );
  }

  Edit(emp:Employee){
    this.employee = emp;
    this.operationTitle = 'Update';
  }

  Add(){
   this.employee = new Employee();
  }

  Delete(id:number){
    // const empToRemove = this.lstEmps.find(obj => obj.id === id);
    // console.log(empToRemove);

    this.service.Delete(id).subscribe(
      () => (this.lstEmps = this.lstEmps.filter( (obj) => obj.id !== id)),
      error => this.errorMsg = error.statusText
    );

    //this.taskService.deleteTask(task).subscribe(()=> (this.tasks = this.tasks.filter((t)=> t.id !== task.id))  );

    console.log(this.lstEmps);
  }

}
