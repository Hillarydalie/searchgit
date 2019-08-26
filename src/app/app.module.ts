import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { TafutaFormComponent } from './tafuta-form/tafuta-form.component';
import { TafutanavComponent } from './tafutanav/tafutanav.component';
import { TafutaComponent } from './tafuta/tafuta.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TafutaRepoComponent } from './tafuta-repo/tafuta-repo.component';
import { HoverDirective } from './hover.directive';
import { DatecountPipe } from './datecount.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TafutaFormComponent,
    TafutanavComponent,
    TafutaComponent,
    NotFoundComponent,
    TafutaRepoComponent,
    HoverDirective,
    DatecountPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
