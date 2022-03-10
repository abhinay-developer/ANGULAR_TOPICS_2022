import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {
      // elementRef=new ElementRef();
  constructor(private elementRef:ElementRef) {
       this.elementRef.nativeElement.style.color="red";
       this.elementRef.nativeElement.style.padding="10px";
       this.elementRef.nativeElement.style.backgroundColor="blue";
   }

}
