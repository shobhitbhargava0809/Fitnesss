import { Component, OnInit } from '@angular/core';
import { UsersService } from '../user.service';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent implements OnInit {
  arr;
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

  addData() {
    this.us.addData(this.name,this.email,this.password,this.weight,this.height);
    // console.log(this.name)
}


delData(id) {
  this.us.delData(id);
}


}
