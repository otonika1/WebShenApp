import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    //{ path: 'profile', component: ProfileComponent, canActivate: [authGuard], resolve:{data:profileResolverGuard} ,canMatch:[roleMatchGuard], data: { roles: ['ADMIN','EDITOR'] }  },
    //{ path: 'login', component: LoginComponent, canDeactivate:[loginDeactivateGuard] },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    //{ path: '**', component: AccessDeniedComponent }
];
