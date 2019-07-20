import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SignService {
  url = 'http://localhost:3000';
  constructor(private http: HttpClient) {}
  addData(name,email,canteenname,phone,password,address) {
      const obj = {name,email,canteenname,phone,password,address};
      this
          .http
          .post(`${this.url}/sIndex/add`, obj)
          .subscribe(res => console.log(res));
  }
 
  getData() {
      return(
      this
          .http
          .get(`${this.url}/sIndex/view`)
      );
  }
  upData(id, name) {
      const obj = { name };
      this
          .http
          .post(`${this.url}/update/${id}`, obj)
          .subscribe(res => console.log(res));
  }
  delData(id) {
    console.log("delete function");
      return this.http.get(`${this.url}/sIndex/delete/${id}`).subscribe();
  }
  editData(id) {
    return this
            .http
            .get(`${this.url}/edit/${id}`);
    }
 
 
    up_data(name,email,canteenname,phone,password,address, id) {
 
      const obj = {
          name: name,
          email:email,
          canteenname :canteenname,
          phone :phone,
          password: password,
          address:address
         
        };
      this
        .http
        .post(`${this.url}/update/${id}`, obj)
        .subscribe(res => console.log('Done'));
    }
}
 

