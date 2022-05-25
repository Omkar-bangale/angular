import { Component, OnInit } from '@angular/core';
import { countries } from '../country-data-store';
import Form from '../Entity/Form';
import { UserServiceService } from '../user-service.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
 form:Form=new Form();
countries:any=countries;
  constructor(public  userservice: UserServiceService) { }
save()
{

  console.log("The name of the user is "+this.form.firstName+" "+this.form.lastName+" Address "+this.form.address+" and Gender "+this.form.Gender);
  const observable = this.userservice.createUser(this.form);
  observable.subscribe(
    function (response: any) {
      console.log(response);
      alert("Data Saved, Thanks!");  
    },
    function(error){
      alert('something went wrong');
    }
    );
  
}

  ngOnInit(): void {
  }

}
