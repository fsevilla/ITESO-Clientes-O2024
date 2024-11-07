import { Component } from '@angular/core';
import { PageService } from '../../../services/page.service';
import { FormsModule } from '@angular/forms';
import { AuthStateDirective } from '../../../directives/auth-state.directive';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule, AuthStateDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  counter: number = 0;

  constructor(pageService: PageService) {
    pageService.counterObs.subscribe((counter: number) => {
      this.counter = counter;
    });
  }


}
