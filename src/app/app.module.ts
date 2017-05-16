import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';

import { AppComponent } from './app.component';
import { DoughnutComponent } from './components/doughnut/doughnut.component';
import {ChartsModule} from "ng2-charts";
import { BarComponent } from './components/bar/bar.component';
import { SondageComponent } from './components/sondage/sondage.component';
import { UsersComponent } from './components/users/users.component';
import { UserDetailComponent } from './components/users/item/user-detail.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {sondagesRouting} from "./app.routes";
import { UserComponent } from './components/users/sheet/user.component';
import { BoderDirective } from './directives/boder.directive';

@NgModule({
  declarations: [
    AppComponent,
    DoughnutComponent,
    BarComponent,
    SondageComponent,
    UsersComponent,
    UserDetailComponent,
    DashboardComponent,
    UserComponent,
    BoderDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    Angular2FontawesomeModule,
    ChartsModule,
    sondagesRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
