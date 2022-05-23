import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ClBackFnComponent } from './cl-back-fn/cl-back-fn.component';
import { CallBindApplyComponent } from './call-bind-apply/call-bind-apply.component';
import { RestestCallBindComponent } from './restest-call-bind/restest-call-bind.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, ClBackFnComponent,CallBindApplyComponent,RestestCallBindComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
