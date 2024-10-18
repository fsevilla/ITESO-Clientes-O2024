import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../services/user.service';
import { User } from '../../../../types/user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-details-page',
  standalone: true,
  imports: [],
  templateUrl: './user-details-page.component.html',
  styleUrl: './user-details-page.component.scss'
})
export class UserDetailsPageComponent implements OnInit {

  user: User | undefined;

  constructor(private userService: UserService, private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.user = this.userService.getSelectedUser();

    if (!this.user) {
      this.router.navigate(['..'], {
        relativeTo: this.activatedRoute
      })
    }
  }

}
