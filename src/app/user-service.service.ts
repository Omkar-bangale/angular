import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const BASE_URL="http://localhost:3002/users";
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(public http: HttpClient) { }
  createUser(form:{firstName:String;lastName:String; 
    address:String;city:String; state:String; zipcode:number;country:String;    
    countryCode:number;  phonenumber:number;email:String; birthdate: Date; Gender:String;StartingDate:String;  comments:String; }){
    return this.http.post(BASE_URL, form);
   }
   getUsers()
   {
     return this.http.get(BASE_URL);
   }
}
