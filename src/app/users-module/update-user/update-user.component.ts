import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user.model';
import { UsersService } from '../users-service.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss'],
})
export class UpdateUserComponent implements OnInit {
  private _id: number;
  user_profile: User;

  constructor(
    private _usersService: UsersService,
    private _activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this._activatedRoute.snapshot.params;
    this._id = this._activatedRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.getUSerById();
  }
  getUSerById() {
    this._usersService.getUserById(this._id).subscribe((resp) => {
      this.user_profile = resp.data as User;
      console.log(this.user_profile);
    });
  }

  onSubmit() {
    this._usersService
      .updateUser(this.user_profile, this._id)
      .subscribe((resp) => {
        Swal.fire({
          icon: 'success',
          title: 'User has been updated',
          showConfirmButton: false,
          timer: 1500,
        });
        this.router.navigate(['/users/list-users']);
      });
  }
  onCancel() {
    this.router.navigate(['/users/list-users']);
  }
}
