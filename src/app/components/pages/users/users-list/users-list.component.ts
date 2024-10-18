import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../../../../services/user.service';
import { User } from '../../../../types/user';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent implements OnInit {

  @Output() onUserSelected: EventEmitter<User> = new EventEmitter();

  users: User[] = [];
  @Input() selectedUser: User | undefined;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getAll().subscribe({
      next: (response: User[]) => {
        this.users = response;
      },
      error: (e) => {
        console.log('Ocurrio un error', e);
      }
    });
  }

  selectUser(user: User) {
    this.selectedUser = user;
    this.onUserSelected.emit(this.selectedUser);
    console.log('Si hizo click');
  }

  setSelectedUser(user: User) {
    console.log('A este si le hizo click');
    this.userService.setSelectedUser(user);
  }
}
