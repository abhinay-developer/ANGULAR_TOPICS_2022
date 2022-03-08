import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor-ex',
  templateUrl: './ngfor-ex.component.html',
  styleUrls: ['./ngfor-ex.component.scss']
})
export class NgforExComponent implements OnInit {
 companyArr:string[]=["Infosys","TCS","Deloitee","Wipro","Cognizant","MindTree"]

 //Single Object   
  student={
    name:"Navya",
    id:1,
    age:34,
    branch:"CSE"
 }

 //multiple Objects  ==>Array Of Objects
   employees:any[]=[
     {
       id:1,
       name:"sai",
       email:"Sai@gmail.com",
       role:"Java Developer" 
     },
     {
       id:2,
       name:"Vamshi",
       email:"vamshi@gmail.com",
       role:"Web Dev"
     },
     {
      id:3,
      name:"Raj",
      email:"Raj@gmail.com",
      role:"Python Dev"
    },
    {
      id:4,
      name:"Naresh",
      email:"Naresh@gmail.com",
      role:"Snow Flake Dev"
    },
    {
      id:5,
      name:"abhinay",
      email:"abhinay@gmail.com",
      role:"Full Stack Dev"
    }
   ];

   cricketTeams:any[]=[{
     
      id:1,
      name:"IND",
      established:1990,
      players:[
        {
          id:1,
          name:"Dhoni",
          age:40,
          team:"IND",
          inningsPlayes:300,
          centures:100,
          halfCentures:35
        },
        {
          id:2,
          name:"virat",
          age:34,
          team:"IND",
          inningsPlayes:400,
          centures:200,
          halfCentures:55
        }
      ]


   }]





  constructor() { }

  ngOnInit(): void {
    //unshift()    we can add first
     this.companyArr.unshift("TCL");
   //push()   we can add las
    this.companyArr.push("Value Labs")

    console.log(this.student);

    this.employees.push({
      id:6,
      name:"akhil",
      email:"akhil@gmail.com",
      role:"Business Analyst"
    },
    {
    id:7,
    name:"naveen",
    email:"naveen@gmail.com",
    role:" React Dev"
  }
    )
  }  

}
