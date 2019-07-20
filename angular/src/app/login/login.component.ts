import { Component, OnInit } from '@angular/core';

import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  name;
  password;
  constructor(private us: LoginService) { }
 
  ngOnInit() {
  }
  add() {
    this.us.add(this.name,this.password);
    // console.log(this.name)
}


}
