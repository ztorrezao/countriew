import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'squareKilometer'
})
export class SquareKilometerPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
