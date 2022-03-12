import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
 users:any;
  constructor(private dataService:DataService) { } //object created

  ngOnInit(): void {
       this.findUsers();
  }


  public  findUsers(){
     this.dataService.findAllUsers().subscribe(
       (response:any)=>{
         this.users=response;
          console.log(response)
       },
       (error:any)=>{
         console.log(error)
       }
     )
  }

}
