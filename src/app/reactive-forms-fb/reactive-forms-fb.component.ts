import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms-fb',
  templateUrl: './reactive-forms-fb.component.html',
  styleUrls: ['./reactive-forms-fb.component.scss']
})
export class ReactiveFormsFbComponent implements OnInit {

  registrationForm:FormGroup;
   passwordPattern:string="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$";
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.createRegistartionFrom();
  }

   createRegistartionFrom(){
     this.registrationForm= this.fb.group({
       'firstName':['',[Validators.required]],
       'lastName':['',[Validators.required]],
       'email':['',[Validators.required]],
       'password':['',[Validators.required,Validators.pattern(this.passwordPattern)]]
     })
   }

 //validationss
     public getFirstName(){
       return this.registrationForm.get('firstName');
     } 
     public getLastName(){
      return this.registrationForm.get('lastName');
    } 
    public getEmail(){
      return this.registrationForm.get('email');
    } 
    public getPassword(){
      return this.registrationForm.get('password');
    } 


   onSubmit(){
     console.log(this.registrationForm.value);
   }

}
