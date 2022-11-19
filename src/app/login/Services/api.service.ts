import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {LoginRequest} from "../../Models/RequestModels/LoginRequest";
import {HttpClient} from "@angular/common/http";
import {LoginResponse} from "../../Models/ViewModels/LoginResponse";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient:HttpClient, private route:Router,private fb:FormBuilder) { }

  Login=(request:LoginRequest)=>this.httpClient.post<LoginResponse>(`${environment.api_domain}/Authentication/Login`,request);


}
