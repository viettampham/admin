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
import {MultilevelMenuService, NgMaterialMultilevelMenuModule} from "ng-material-multilevel-menu";
import { MnUserComponent } from './system-page/component/mn-user/mn-user.component';
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import { MnProductComponent } from './system-page/component/mn-product/mn-product.component';
import { MnCategoryComponent } from './system-page/component/mn-category/mn-category.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SystemPageComponent,
    MnUserComponent,
    MnProductComponent,
    MnCategoryComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSidenavModule,
        NgMaterialMultilevelMenuModule,
        MatTableModule,
        MatPaginatorModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
  providers: [MultilevelMenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
