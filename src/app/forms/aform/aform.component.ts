import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aform',
  templateUrl: './aform.component.html',
  styleUrls: ['./aform.component.css']
})
export class AformComponent implements OnInit {

  topics: string[] = ['Angular', 'React', 'Vue'];
  constructor() { }

  ngOnInit(): void {
  }

}
