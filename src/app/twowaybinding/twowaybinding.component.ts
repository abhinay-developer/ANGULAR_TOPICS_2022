import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twowaybinding',
  templateUrl: './twowaybinding.component.html',
  styleUrls: ['./twowaybinding.component.scss']
})
export class TwowaybindingComponent implements OnInit {
 course:string;
 courseArr:string[]=[];
  constructor() { }

  ngOnInit(): void {
  }

  onAddCourse(){
      if(this.courseArr.length>4){
        alert("Limit Exceed")
        this.courseArr.pop();
      }
      if(this.courseArr.includes(this.course)){
        alert(`Already this ${this.course } is Exixts Please Add another Course`)
      }
      this.courseArr.push(this.course);
      console.log(this.courseArr);
      
  }
}
