import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UsersService } from '../users-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({});
  constructor(private _usersService: UsersService, private router: Router) {}

  ngOnInit(): void {
    this.createUSerFormInit();
  }

  createUSerFormInit() {
    return (this.loginForm = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    }));
  }
  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }

  onSubmit() {
    this._usersService.login(this.email?.value, this.password?.value).subscribe(
      (response) => {
        console.log('loggedin');
        Swal.fire({
          icon: 'success',
          title: 'User has been Added',
          showConfirmButton: false,
          timer: 1500,
        });
        this.router.navigate(['/users/list-users']);
      },
      (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Check Entered Data Again!',
        });
      }
    );
  }

  onCancel() {
    this.router.navigate(['/users/list-users']);
  }
}
