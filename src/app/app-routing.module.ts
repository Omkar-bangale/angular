import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { RegisteredUsersComponent } from './registered-users/registered-users.component';

const routes: Routes = [{path:'form', component:FormComponent},
{path:'registeredusers', component:RegisteredUsersComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
