import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.scss']
})
export class EventbindingComponent implements OnInit {
  dynamicType:any="text"
  constructor() { }

  ngOnInit(): void {
  }

  onClickMe(){
    this.dynamicType="number";
  }
}
