import { Component, OnInit } from '@angular/core';
import {UsersService} from '../user.service';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
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


up_data(id) {
  this.us.up_data(this.name,this.email,this.password,this.weight,this.height,id);
 

}


}




