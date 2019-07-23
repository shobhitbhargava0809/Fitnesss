import { Component, OnInit } from '@angular/core';
import { UsersService } from '../user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  arr;
  // name;
  name;
  email;
  password;
  weight;
  height;
  constructor(private us: UsersService) { }
  
 
  ngOnInit() {
    this.getData();
  }
  getData() {
    this.us.getData().subscribe(data => { this.arr = data; });
}
 
delData(id) {
  this.us.delData(id);
}



up_data(id) {
  this.us.up_data(this.name,this.email,this.password,this.weight,this.height,id);
 

}

}
