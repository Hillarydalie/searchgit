import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TafutaFormComponent } from './tafuta-form/tafuta-form.component';
import { TafutanavComponent } from './tafutanav/tafutanav.component';

@NgModule({
  declarations: [
    AppComponent,
    TafutaFormComponent,
    TafutanavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
