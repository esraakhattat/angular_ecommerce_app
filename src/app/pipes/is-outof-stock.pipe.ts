import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isOutofStock'
})
export class IsOutofStockPipe implements PipeTransform {

  transform(value: number): string {
    if (value===0){
      return 'Out of Stock'
    }
    else{
    return 'In Stock';
  }
  }

}
