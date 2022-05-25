import { Component, OnInit } from '@angular/core';
import Form from '../Entity/Form';
import { UserServiceService } from '../user-service.service';
@Component({
  selector: 'app-registered-users',
  templateUrl: './registered-users.component.html',
  styleUrls: ['./registered-users.component.css']
})
export class RegisteredUsersComponent implements OnInit {

  form:Form=new Form();
  users: Form[]=[];
  constructor(public  userservice: UserServiceService) { }


  ngOnInit(): void {
    const promise = this.userservice.getUsers();
    promise.subscribe(
      (response) => {
        console.log(response);
        this.users=response as Form[];
      } );
  }

}
