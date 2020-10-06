import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'squareKilometer'
})
export class SquareKilometerPipe implements PipeTransform {

  transform(value: number): string {
    return `${value} km²`;
  }

}
