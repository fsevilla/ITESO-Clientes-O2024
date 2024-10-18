import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../types/user';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private selectedUser: User | undefined;

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<User[]> {
    const url = `${environment.apiUrl}users`
    return this.httpClient.get<User[]>(url);
  }

  signup() {}

  setSelectedUser(user: User) {
    this.selectedUser = user;
  }

  getSelectedUser(): User | undefined {
    return this.selectedUser;
  }
}
