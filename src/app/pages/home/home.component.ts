import { Component } from '@angular/core';

import { LogoComponent } from '../logo/logo.component';
import { CreateAccountComponent } from '../create-account/create-account.component';
import { LogInComponent } from '../log-in/log-in.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LogoComponent,CreateAccountComponent,LogInComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
