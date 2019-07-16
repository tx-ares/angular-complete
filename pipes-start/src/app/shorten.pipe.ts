import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {
  public transform(value: any): string {
    if ( value.length > 10 ) {
      return value.substr(0, 10) + ' ...';
    }
    return value;
  }
}
