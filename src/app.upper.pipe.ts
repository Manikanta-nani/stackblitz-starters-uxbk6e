import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'square',
  standalone:true  
})
export class SquareTransform implements PipeTransform {
  transform(value: any) {
    console.log(9,value);
    return value * value;
  }
}
