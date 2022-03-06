import { Employee } from './../models/employee';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  employeesArr:any[]=[];
  emp=new Employee(1,"Ramu","Hyd",9944554455,"Java Developer");
  emp1=new Employee(2,"abhinay","Hyd",9944555644,"Java Full Stack Developer")
  employees=new Set();

  agePlaceholder:string="Please Enter age";
  imageURL:string="https://cdn.pixabay.com/photo/2017/06/18/18/39/baby-2416718_960_720.jpg";
  imageWidth:number=300;
  imageHeight:number=200;

  constructor() { 
        
  }

  ngOnInit(): void {
     this.employees.add(this.emp);
     this.employees.add(this.emp1);
     
     for(let employee of this.employees){
       this.employeesArr.push(employee);
     }

  }

}
