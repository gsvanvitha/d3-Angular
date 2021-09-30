import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BasicFeaturesComponent } from './basic-features/basic-features.component';
import { ShatterComponent } from './shatter/shatter.component';
import { LineComponentComponent } from './line-component/line-component.component';
//import { NgModule,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    BasicFeaturesComponent,
    ShatterComponent,
    LineComponentComponent
  ],
  imports: [
    BrowserModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
