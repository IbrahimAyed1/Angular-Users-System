import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUsersComponent } from './list-users/list-users.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';



@NgModule({
  declarations: [
    ListUsersComponent,
    CreateUserComponent,
    UpdateUserComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
