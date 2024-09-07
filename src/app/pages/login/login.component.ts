import { Component, inject } from '@angular/core';
import {FormBuilder, FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import {Login} from "../login";
import {LoginService} from "../login.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  isLoginView: boolean = true;

  userRegisterObj: any = {
    userName:'',
    password: '',
    emailId:''
  }

  userLogin: any = {
    userName:'',
    password: '',
  }

  constructor(private loginService: LoginService) {}

  router =  inject(Router);

  /*onRegister() {
    debugger;
    const isLocalData = localStorage.getItem("angular18Local");
    if(isLocalData != null) {
      const localArray =  JSON.parse(isLocalData);
      localArray.push(this.userRegisterObj);
      localStorage.setItem("angular18Local",JSON.stringify(localArray))
    } else {
      const localArray = [];
      localArray.push(this.userRegisterObj);
      localStorage.setItem("angular18Local",JSON.stringify(localArray))
    }
    this.isLoginView = true;
    alert("Registration Success,please login");
  } */

  /*onLogin() {
    debugger;
    const isLocalData = localStorage.getItem("angular18Local");
    if(isLocalData != null) {
      const users = JSON.parse(isLocalData);

      const isUserFound =  users.find((m:any)=> m.userName == this.userLogin.userName && m.password == this.userLogin.password);
      if(isUserFound != undefined) {
        this.router.navigateByUrl('profile')
      } else {
        alert("User name or password is Wrong")
      }
    } else {
      alert("No User Found")
    }
  } */

  sendLogin(){
    const login:Login ={
      name:this.userLogin.userName,
      email:this.userLogin.emailId,
      password:this.userLogin.password,
    }
    this.loginService.postLogin(login);
  }

  CompareLogin() {
    // Call getLogin to compare username and password
    this.loginService.getLogin(this.userLogin.userName, this.userLogin.password).subscribe(
      response => {
        // Handle successful login here
        console.log('Login successful', response);
        this.router.navigateByUrl('profile');
      },
      error => {
        // Handle error here
        alert("LOGIN FAILED");
        console.error('Login failed', error);
      }
    );
  }
}
