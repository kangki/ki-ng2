import { Pipe } from '@angular/core';
import { PipeTransform } from '@angular/core';

@Pipe({
  name: 'Xxx'
})
export class Xxx implements PipeTransform {
  transform(o: any, ...arg: any[]): any{
    // todo
    return o;
  }
}
