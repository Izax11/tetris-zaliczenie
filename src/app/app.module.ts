import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TetrisCoreModule } from 'ngx-tetris';

import { AppComponent } from './app.component';
import { WprowadzenieComponent } from './wprowadzenie/wprowadzenie.component';
import { GraComponent } from './gra/gra.component';

@NgModule({
  declarations: [
    AppComponent,
    WprowadzenieComponent,
    GraComponent,
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
