import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {
  NgIsArrayOfObjectPipeModule
} from "./pipes/array-pipes/is-array-of-object/is-array-of-object.pipe";
import {NgEmptyPipeModule} from "./pipes/array-pipes/length/length.pipe";
import { UniquePipe } from './pipes/array-pipes/unique/unique.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UniquePipe,
  ],
  imports: [
    BrowserModule,
    NgIsArrayOfObjectPipeModule,
    NgEmptyPipeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
