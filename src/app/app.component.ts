import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LogoComponent } from './logo/logo.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { LogInComponent } from './log-in/log-in.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LogoComponent, CreateAccountComponent, LogInComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MindSpace-App';
}