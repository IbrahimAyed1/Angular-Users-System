import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { User } from '../user.model';
import { UsersService } from '../users-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  private _id: number;
  user_profile: User;

  constructor(
    private _usersService: UsersService,
    private _activatedRoute: ActivatedRoute
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
}
