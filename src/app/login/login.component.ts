import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {ApiService} from "./Services/api.service";
import {LoginRequest} from "../Models/RequestModels/LoginRequest";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  LoginForm = this.fb.group({
    username:[''],
    password:['']
  });

  constructor(private fb:FormBuilder,private route:Router,private apiService:ApiService) { }

  ngOnInit(): void {
  }


  submit() {
    this.apiService.Login(this.LoginForm.value as LoginRequest).subscribe(res=>{
      if (res.token!=null){
        this.route.navigate(['system'])
      }
    },error => {
      alert("Username or password incorrect")
    })
  }
}
