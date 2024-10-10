import { Component } from '@angular/core';
import { UsersListComponent } from "./users-list/users-list.component";
import { UserDetailsComponent } from "./user-details/user-details.component";
import { User } from '../../types/user';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [UsersListComponent, UserDetailsComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {

  selectedUser: User | undefined;

  clearUser() {
   this.selectedUser = undefined; 
  }

  selectUser(user: User) {
    this.selectedUser = user;
  }

  
}
