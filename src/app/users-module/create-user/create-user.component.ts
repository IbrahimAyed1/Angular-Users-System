import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { User } from '../user.model';
import { UsersService } from '../users-service.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent implements OnInit {
  profileForm = new FormGroup({});
  user: User;
  constructor(private _usersService: UsersService, private router: Router) {}

  ngOnInit(): void {
    this.createUSerFormInit();
  }

  createUSerFormInit() {
    return (this.profileForm = new FormGroup({
      first_name: new FormControl(null, Validators.required),
      last_name: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.email),
      password: new FormControl(null, Validators.minLength(6)),
    }));
  }

  get _profileForm() {
    return this.profileForm;
  }

  onSubmit() {
    this._usersService.createUser(this._profileForm.value).subscribe((resp) => {
      Swal.fire({
        icon: 'success',
        title: 'User has been Added',
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
