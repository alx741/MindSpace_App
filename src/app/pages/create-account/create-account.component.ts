import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-create-account',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.css'
})
export class CreateAccountComponent {

}
