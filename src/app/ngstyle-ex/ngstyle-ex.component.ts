import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstyle-ex',
  templateUrl: './ngstyle-ex.component.html',
  styleUrls: ['./ngstyle-ex.component.scss']
})
export class NgstyleExComponent implements OnInit {
isChangeColor:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }
  onChangeColor(){
    this.isChangeColor=false;
  }
}
