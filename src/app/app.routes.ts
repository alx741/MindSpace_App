import { Routes } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { CreateAccountComponent } from './pages/create-account/create-account.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'create-account', component: CreateAccountComponent}
];
