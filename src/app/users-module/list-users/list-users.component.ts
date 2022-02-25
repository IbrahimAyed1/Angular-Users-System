import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UsersServiceService } from '../users-service.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss'],
})
export class ListUsersComponent implements OnInit {
  usersArray: User[] = [];

  constructor(private _usersSerive: UsersServiceService) {}

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this._usersSerive.getAllUsers().subscribe((response) => {
      this.usersArray = response.data;
      console.log(this.usersArray);
    });
  }
}
