import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {LoginRequest} from "../../Models/RequestModels/LoginRequest";
import {HttpClient} from "@angular/common/http";
import {LoginResponse} from "../../Models/ViewModels/LoginResponse";
import {environment} from "../../../environments/environment";
import {RegistrationRequest} from "../../Models/RequestModels/RegistrationRequest";
import {UserResponse} from "../../Models/ViewModels/UserResponse";
import {Product} from "../../Models/Product";
import {Category} from "../../Models/ViewModels/Category";
import {empty} from "rxjs";
import {EditCategoryRequest} from "../../Models/RequestModels/EditCategoryRequest";
import {EditUserRequest} from "../../Models/RequestModels/EditUserRequest";
import {CreateProductRequest} from "../../Models/RequestModels/CreateProductRequest";
import {EditProductRequest} from "../../Models/RequestModels/EditProductRequest";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient:HttpClient, private route:Router,private fb:FormBuilder) { }

  Login=(request:LoginRequest)=>this.httpClient.post<LoginResponse>(`${environment.api_domain}/Authentication/Login`,request);
  Registration=(request:RegistrationRequest)=>this.httpClient.post<boolean>(`${environment.api_domain}/Authentication/Registration`,request);
  GetListUser=()=>this.httpClient.get<UserResponse[]>(`${environment.api_domain}/Authentication/Get-list-user`)
  DeleteUser=(id:string)=>this.httpClient.delete(`${environment.api_domain}/Authentication/Delete-User`+id);
  GetListProduct = () => this.httpClient.get<Product[]>(`${environment.api_domain}/Product/Get-list-product`);
  GetListCategory = () => this.httpClient.get<Category>(`${environment.api_domain}/Category/Get-list`);
  DeleteProduct=(id:string)=> this.httpClient.delete<any>(`${environment.api_domain}/Product/Delete-product`+id);
  DeleteCategory=(id:string)=> this.httpClient.delete<any>(`${environment.api_domain}/Category/Delete-category/`+id);
  EditCategory=(request:EditCategoryRequest)=>this.httpClient.post<any>(`${environment.api_domain}/Category/Edit-category`,request);
  EditUser=(request:EditUserRequest)=>this.httpClient.post<EditUserRequest>(`${environment.api_domain}/Authentication/Edit-user`,request)
  CreateProduct=(request:CreateProductRequest)=>this.httpClient.post<Product>(`${environment.api_domain}/Product/Create-Product`,request)
  EditProduct=(request:EditProductRequest)=>this.httpClient.post<Product>(`${environment.api_domain}/Product/Edit-product`,request);


}
