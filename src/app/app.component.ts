import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Application de gestion de devoirs à rendre';
  showSidebar = false;

  constructor(public authService: AuthService, private router: Router) { }

  showLoginForm() {
    this.router.navigate(['/login']);
  }

  login() {
    if (!this.authService.isLogged()) {
      this.authService.logIn("username", "password");
    } else {
      this.authService.logout();
      this.router.navigate(['/home']);
    }
  }
}
