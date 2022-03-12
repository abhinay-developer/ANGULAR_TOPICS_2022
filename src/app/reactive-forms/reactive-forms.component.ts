import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {
   registrationForm:FormGroup;
   passwordPattern:string="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$";
  constructor() { }

  ngOnInit(): void {
    this.createRegistartionFrom();
  }

   createRegistartionFrom(){
     this.registrationForm=new FormGroup({
       'firstName':new FormControl('',[Validators.required,Validators.minLength(5)]),
       'lastName':new FormControl('',Validators.required),
       'email':new FormControl('',Validators.required),
       'password':new FormControl('',[Validators.required,Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")])
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
