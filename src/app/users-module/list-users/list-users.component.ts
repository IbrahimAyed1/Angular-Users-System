import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { User } from '../user.model';
import { UsersService } from '../users-service.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss'],
})
export class ListUsersComponent implements OnInit {
  usersArray: User[] = [];

  constructor(private _usersSerive: UsersService) {}

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this._usersSerive.getAllUsers().subscribe((response) => {
      this.usersArray = response.data;
    });
  }

  //While working with a real API this should delete the user but because I am not .. so I am trying smth else
  deleteUser(id: number) {
    this._usersSerive.deleteUser(id).subscribe((response) => {});
  }

  confirmationMessage(id: number) {
    Swal.fire({
      title: 'Do you want to save the changes?',
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.deleteUser(id);
        Swal.fire('Removed!', '', 'success');
      }
    });
  }
}
