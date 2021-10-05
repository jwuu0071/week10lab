import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getage'
})
export class GetagePipe implements PipeTransform {

  transform(value: number, ...args: number[]): number {
    let age: number = 0;
    let myDate: Date = new Date()

    age = myDate.getFullYear() - value;
    return age;
  }

}
