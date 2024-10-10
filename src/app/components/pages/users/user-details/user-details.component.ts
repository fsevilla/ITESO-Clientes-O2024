import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../../../types/user';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent {

  @Input() user: User | undefined;
  @Output() onClearUser: EventEmitter<void> = new EventEmitter();

  clearUser() {
    // this.user = undefined;
    this.onClearUser.emit();
  }

}
