import { Component, OnInit } from '@angular/core';
import { EnrollmentService } from 'src/app/services/enrollment.service';
import { User } from 'src/app/user';


@Component({
  selector: 'app-aform',
  templateUrl: './aform.component.html',
  styleUrls: ['./aform.component.css']
})
export class AformComponent implements OnInit {

  topics: string[] = ['Angular', 'React', 'Vue'];

  userModel: User = new User('', 'mohamad.helaly@gmail.com', 595337070, '', '', true);

  topicHasError= true;

  errorMsg = '';

  constructor(private _service:EnrollmentService) { }

  ngOnInit(): void {
  }

  checkSelectedValue(value:string){
    if(value === '')
      this.topicHasError = true;
    else
      this.topicHasError = false;
  }

  onSubmit(){
    //console.log(this.userModel);
    this._service.enrollUser(this.userModel)
                  .subscribe(
                    data => console.log("Success", data),
                    error => this.errorMsg = error.statusText
                  );
  }

}
