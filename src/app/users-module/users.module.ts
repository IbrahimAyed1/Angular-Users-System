import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUsersComponent } from './list-users/list-users.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { Routes, RouterModule } from '@angular/router';
import { NotfoundComponent } from '../shared-modules/notfound/notfound.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'list-users', component: ListUsersComponent },
  { path: 'add-user', component: CreateUserComponent },
  { path: 'update-user/:id', component: UpdateUserComponent },
  { path: 'profile/:id', component: ProfileComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  declarations: [
    ListUsersComponent,
    CreateUserComponent,
    UpdateUserComponent,
    ProfileComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class UsersModule {}
