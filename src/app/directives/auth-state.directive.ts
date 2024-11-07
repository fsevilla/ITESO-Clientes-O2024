import { Directive, Input, OnInit, AfterViewInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Directive({
  selector: '[appAuthState]',
  standalone: true
})
export class AuthStateDirective implements AfterViewInit {

  @Input() appAuthState: boolean | undefined;

  constructor(private authService: AuthService, private templateRef: TemplateRef<HTMLElement>, private viewContainerRef: ViewContainerRef) {
  }
  
  ngAfterViewInit() {
    this.authService.authStatus.subscribe((status) => {
      if (status === this.appAuthState) {
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainerRef.clear();
      }
    });
  }

}
