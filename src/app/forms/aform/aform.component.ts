import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';


@Component({
  selector: 'app-aform',
  templateUrl: './aform.component.html',
  styleUrls: ['./aform.component.css']
})
export class AformComponent implements OnInit {

  topics: string[] = ['Angular', 'React', 'Vue'];

  userModel: User = new User('mohamad', 'mohamad.helaly@gmail.com', 595337070, '', '', true);

  constructor() { }

  ngOnInit(): void {
  }

}
