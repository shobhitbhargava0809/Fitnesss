import { Component, OnInit } from '@angular/core';
import { FgService } from '../fg.service';

@Component({
  selector: 'app-forgotpw',
  templateUrl: './forgotpw.component.html',
  styleUrls: ['./forgotpw.component.css']
})
export class ForgotpwComponent implements OnInit {

  
  email;
  
  constructor(private us: FgService) { }
 
  ngOnInit() {
  }
  add() {
    this.us.add(this.email);
    // console.log(this.name)
}
  }


