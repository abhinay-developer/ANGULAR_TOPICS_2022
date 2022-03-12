import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipesEx'
})
export class PipesExPipe implements PipeTransform {
  // myValue:any;
  transform(value:any): unknown {
    //  this.myValue=value.toUpperCase();
    return `${value.toUpperCase()}_ `;
  }

}
