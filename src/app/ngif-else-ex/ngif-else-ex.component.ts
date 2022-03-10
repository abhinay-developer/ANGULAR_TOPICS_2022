import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif-else-ex',
  templateUrl: './ngif-else-ex.component.html',
  styleUrls: ['./ngif-else-ex.component.scss']
})
export class NgifElseExComponent implements OnInit {
myName:string="Raja";
isLoggedIn:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

  onIsLoggedIn(){
       this.isLoggedIn=!this.isLoggedIn;
      
  }

}
