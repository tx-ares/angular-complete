import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false // Pipes by default don't automatically run again on template data if the data object or array is changed.  Setting the 'pure' property to 'false' will force the pipe to run every time the data is changed.
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): any {

    if (value.length = 0 || filterString === '') {
      return value;
    }
    const resultArray = [];

    for (const item of value) {
      if (item[propName] === filterString) {
        resultArray.push(item);
      }
    }
    return resultArray;

  }

}
