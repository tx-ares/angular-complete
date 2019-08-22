import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(stringToReverse: string): string {

    const test = stringToReverse.split('');

    console.log(test);

    return null;
  }

}
