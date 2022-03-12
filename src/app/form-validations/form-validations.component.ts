import { User } from './../models/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-validations',
  templateUrl: './form-validations.component.html',
  styleUrls: ['./form-validations.component.scss']
})
export class FormValidationsComponent implements OnInit {
 user=new User();
  constructor() { }

  ngOnInit(): void {
  }
  onRegister(){
    console.log(this.user)
  }
}
