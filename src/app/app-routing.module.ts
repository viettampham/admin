import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {SystemPageComponent} from "./system-page/system-page.component";

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"system",component:SystemPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
