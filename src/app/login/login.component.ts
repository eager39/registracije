import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( 
    private auth: AuthService
    ) { }

  ngOnInit() {
    this.login()
  }
  login(){
    this.auth.login()
    console.log(localStorage.getItem("currentUser"))
  }

}
