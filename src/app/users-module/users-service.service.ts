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
export class UsersService {
  private base: string = 'https://reqres.in/api/';

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<PaginatedResult<User>> {
    return this.http.get<PaginatedResult<User>>(this.base + 'users');
  }
  getUserById(id: number): Observable<IResult<User>> {
    return this.http.get<Result<User>>(this.base + 'users/' + id);
  }
  updateUser(User: User, id: number) {
    return this.http.put(this.base + 'users/' + id, User);
  }
  deleteUser(id: number): Observable<IResult<string>> {
    return this.http.get<Result<string>>(this.base + 'users/' + id);
  }
}
// pipe(map((response:IResult<User>) => response))
