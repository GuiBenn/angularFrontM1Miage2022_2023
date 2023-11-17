import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users = [
    { username: 'user1', password: 'mdp1', role: 'user' },
    { username: 'user2', password: 'mdp2', role: 'user' },
    { username: 'admin', password: 'admin', role: 'admin' }
  ];
  loggedIn = false;
  actualUser: any;

  constructor() { }

  logIn(username: string, password: string): boolean {
    const user = this.users.find(u => u.username === username && u.password === password);

    if (user) {
      this.loggedIn = true;
      this.actualUser = user;
      return true;
    }

    return false;
  }

  logout() {
    this.loggedIn = false;
    this.actualUser = null;
  }

  isLogged(): boolean {
    return this.loggedIn;
  }

  isAdmin(): boolean {
    return this.isLogged() && this.actualUser.role === 'admin';
  }
}