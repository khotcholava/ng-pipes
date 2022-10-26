import {NgModule, Pipe, PipeTransform} from '@angular/core';
import {every} from "../../../utils/utils";


@Pipe({
  name: 'isArrayOfObject'
})
export class IsArrayOfObjectPipe implements PipeTransform {

  transform<T>(value: T[]): boolean {
    return every(value, item => typeof item === "object")
  }
}

@NgModule({
  declarations: [IsArrayOfObjectPipe],
  exports: [IsArrayOfObjectPipe],
})
export class NgIsArrayOfObjectPipeModule {
}
