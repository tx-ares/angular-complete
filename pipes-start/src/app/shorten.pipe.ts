import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {
  public transform(value: any, limit: number): string {
    if ( value.length > limit ) {
      return value.substr(0, limit) + ' ...';
    }
    return value;
  }
}
