import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass-ex',
  templateUrl: './ngclass-ex.component.html',
  styleUrls: ['./ngclass-ex.component.scss']
})
export class NgclassExComponent implements OnInit {
   class1:string="myClass";
   class2:string="myClass2";
  constructor() { }

  ngOnInit(): void {
  }

}
