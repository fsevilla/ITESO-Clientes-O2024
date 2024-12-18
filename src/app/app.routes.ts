import { Routes } from '@angular/router';
import { SignupComponent } from './components/pages/signup/signup.component';
import { UsersComponent } from './components/pages/users/users.component';
import { UserDetailsPageComponent } from './components/pages/users/user-details-page/user-details-page.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: 'users', pathMatch: 'full' },
    { path: 'signup', component: SignupComponent },
    { path: 'users', component: UsersComponent },
    { path: 'users/:id', component: UserDetailsPageComponent },
    { path: '**', component: NotFoundComponent }
];

