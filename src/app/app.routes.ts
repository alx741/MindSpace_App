import { Routes } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { CreateAccountComponent } from './pages/create-account/create-account.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { Page1Component } from './pages/page1/page1.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'create-account', component: CreateAccountComponent},
    {path: 'login', component: LogInComponent},
    {path: 'page1', component: Page1Component}
];
