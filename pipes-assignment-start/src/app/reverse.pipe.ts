import { Pipe, PipeTransform } from '@angular/core';
import { reverse } from 'dns';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(stringToReverse: string): string {

    const splitString = stringToReverse.split('');
    const reverseString = (splitString.reverse()).toString().replace(/,/g, '');

    return reverseString;
  }

}
