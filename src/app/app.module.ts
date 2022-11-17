import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { SystemPageComponent } from './system-page/system-page.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {NgMaterialMultilevelMenuModule} from "ng-material-multilevel-menu";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SystemPageComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSidenavModule,
        NgMaterialMultilevelMenuModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
