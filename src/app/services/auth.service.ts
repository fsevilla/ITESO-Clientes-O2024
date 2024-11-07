import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authStatus: BehaviorSubject<boolean> = new BehaviorSubject(false);

  storage: undefined | Storage;

  constructor() {
    this.authStatus.next(this.isLoggedIn());

    if (typeof window !== undefined) {
      this.storage = localStorage;
    }
  }

  saveToken(token: string) {
    if (this.storage) {
      localStorage.setItem('token', token);
    }
    this.authStatus.next(true);
  }

  clearToken(): void {
    if (this.storage) {
      localStorage.removeItem('token');
    }
    this.authStatus.next(false);
  }

  getToken(): string {
    if (this.storage) {
      return localStorage.getItem('token') ?? '';
    } else {
      return '';
    }
  }

  isLoggedIn(): boolean {
    if (this.storage) {
      return !!localStorage.getItem('token');
    } else {
      return false;
    }
  }
}
