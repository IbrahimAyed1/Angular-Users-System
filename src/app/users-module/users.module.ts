import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUsersComponent } from './list-users/list-users.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { Routes, RouterModule } from '@angular/router';
import { NotfoundComponent } from '../shared-modules/notfound/notfound.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: 'list-users', component: ListUsersComponent },
  { path: 'add-user', component: CreateUserComponent },
  { path: 'update-user', component: UpdateUserComponent },
  { path: 'profile/:id', component: ProfileComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  declarations: [
    ListUsersComponent,
    CreateUserComponent,
    UpdateUserComponent,
    ProfileComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class UsersModule {}
