import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUserModel } from '../model/login';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: LoginUserModel = new LoginUserModel();
  constructor(  private router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    if (
      !this.loginForm.email ||
      !this.loginForm.password
    ) {
      return;
    }
    this.router.navigate(['/product']);
  }
}
