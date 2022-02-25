import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IResult } from '../core/service-wrappers/IResult';
import { PaginatedResult } from '../core/service-wrappers/paginatedReslut';
import { Result } from '../core/service-wrappers/result';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersServiceService {
  private base: string = 'https://reqres.in/api/';

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<PaginatedResult<User>> {
    return this.http.get<PaginatedResult<User>>(this.base + 'users');
  }
}
// pipe(map((response:IResult<User>) => response))
