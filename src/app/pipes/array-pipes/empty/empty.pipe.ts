import {NgModule, Pipe, PipeTransform} from '@angular/core';
import {isEmptyArray} from "../../../utils/utils";

@Pipe({
  name: 'empty'
})
export class EmptyPipe implements PipeTransform {

  transform<T>(value: T[]): boolean {
    return isEmptyArray(value);
  }
}

@NgModule({
  declarations: [EmptyPipe],
  exports: [EmptyPipe],
})
export class NgEmptyPipeModule {}
