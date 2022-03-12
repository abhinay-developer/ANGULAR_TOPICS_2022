import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-example',
  templateUrl: './pipe-example.component.html',
  styleUrls: ['./pipe-example.component.scss']
})
export class PipeExampleComponent implements OnInit {
  colorsArr:string[]=["red","green","violet","pink","Green","Violet"]

  date=new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
