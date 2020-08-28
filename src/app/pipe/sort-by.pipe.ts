import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';




@Pipe({
  name: 'sortBy'
})
export class SortByPipe {
  transform(array: Array<{}>, args: string[]): Array<string> | Array<{}> {

    array = array || [];

    if (typeof args === 'undefined' || args.length !== 2) {
        return array;
    }

    const [key, direction] = args;

    if (direction !== 'ASC' && direction !== 'DESC') {
        return array;
    }

    return _.orderBy(array, (item:any) => item[key], direction.toLowerCase());
}
}