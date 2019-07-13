import { Component, OnInit } from '@angular/core';
import { UserService} from '../users.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 name;
 password;
 constructor(private us: UserService) { }

    ngOnInit() {
    }
    addData() {
      this.us.addData(this.name,this.password);
      // console.log(this.name)
  }
    employees: any[]=[   //employees is an array and any is a datatype which can store any type of data
      {
       "name":this.name,
       "password":this.password
      }
    ]
    }
    

    

  


