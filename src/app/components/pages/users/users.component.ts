import { Component } from '@angular/core';
import { UsersListComponent } from "./users-list/users-list.component";
import { UserDetailsComponent } from "./user-details/user-details.component";
import { User } from '../../../types/user';
import { PageService } from '../../../services/page.service';
import { AuthService } from '../../../services/auth.service';
import { AuthDirective } from '../../../directives/auth.directive';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [UsersListComponent, UserDetailsComponent, AuthDirective],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {

  selectedUser: User | undefined;
  isLoggedIn: boolean = false;

  constructor(private pageService: PageService, private authService: AuthService) {
    this.isLoggedIn = this.authService.isLoggedIn();
  }

  clearUser() {
   this.selectedUser = undefined; 
  }

  selectUser(user: User) {
    this.selectedUser = user;
  }

  increaseCounter() {
    this.pageService.increaseCounter();
  }
  
}
