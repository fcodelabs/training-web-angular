import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  username: string
  constructor() { }

  setUsername(data) {
    this.username = data
  }

  getUsername() {
    return this.username;
  }
}
