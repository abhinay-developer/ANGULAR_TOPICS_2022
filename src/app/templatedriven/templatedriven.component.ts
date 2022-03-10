import { Component, OnInit } from '@angular/core';
import { Amazon } from '../models/amazon';

@Component({
  selector: 'app-templatedriven',
  templateUrl: './templatedriven.component.html',
  styleUrls: ['./templatedriven.component.scss']
})
export class TemplatedrivenComponent implements OnInit {
   isTableHide:boolean=false;
  amazon=new Amazon();
  amazonArr:any[]=[];
  constructor() { 
     
  }

  ngOnInit(): void {
    console.log(this.amazon);
  }
signup(){
  this.isTableHide=true;
  this.amazonArr.push(this.amazon);

}
}
