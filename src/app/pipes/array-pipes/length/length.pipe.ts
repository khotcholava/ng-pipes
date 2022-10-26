import {NgModule, Pipe, PipeTransform} from '@angular/core';
import {length} from "../../../utils/utils";

@Pipe({
  name: 'length'
})
export class LengthPipe implements PipeTransform {

  transform(value: unknown): unknown {
    return length(value);
  }
}

@NgModule({
  declarations: [LengthPipe],
  exports: [LengthPipe],
})
export class NgEmptyPipeModule {}
