import { Directive, Input, ElementRef, ViewContainerRef } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Directive({
  selector: '[appAuth]',
  standalone: true
})
export class AuthDirective {

  @Input() appAuth: undefined;

  constructor(private authService: AuthService, private elementRef: ElementRef, private containerRef: ViewContainerRef) {
    console.log('Cargaste la directiva', this.authService.isLoggedIn(), this.elementRef.nativeElement);
  }

}
