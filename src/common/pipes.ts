import { Pipe } from '@angular/core';
import { PipeTransform } from '@angular/core';

@Pipe({
  name: 'XXX'
})
export class XXX implements PipeTransform {
  transform(o: any, ...arg: any[]): any{
    // todo
    return o;
  }
}
