import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WprowadzenieComponent } from './wprowadzenie/wprowadzenie.component';
import {TetrisCoreModule} from 'ngx-tetris';


@NgModule({
  declarations: [
    AppComponent,
    WprowadzenieComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    TetrisCoreModule,
  ],  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
