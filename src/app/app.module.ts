import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WalkthroughModule } from 'ngx-walkthrough';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    WalkthroughModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
