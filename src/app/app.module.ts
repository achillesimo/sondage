import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DoughnutComponent } from './components/doughnut/doughnut.component';
import {ChartsModule} from "ng2-charts";
import { BarComponent } from './components/bar/bar.component';
import { SondageComponent } from './components/sondage/sondage.component';

@NgModule({
  declarations: [
    AppComponent,
    DoughnutComponent,
    BarComponent,
    SondageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
