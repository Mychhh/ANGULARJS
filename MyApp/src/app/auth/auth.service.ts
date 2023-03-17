import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";

import { LoginForm } from '../types/LoginAuth';
import { RegisterForm } from '../types/RegisterAuth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticated: boolean = false;
  isLoading: boolean = false;

  passwordMatched: boolean = true;

  constructor(private router: Router) { }

  login(form: LoginForm) {

    if (this.isLoading) return;
    this.isLoading = true;

    const auth = getAuth();
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        // Signed in 
        // const user = userCredential.user;
        // ...
        this.isAuthenticated = true;
        this.router.navigate(['']);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        this.isAuthenticated = false;
      })
      .finally(() => {
        this.isLoading = false;
      });
  }

  register(registerForm: RegisterForm) {

    if (this.isLoading) return;
    this.isLoading = true;

    if (registerForm.password != registerForm.confirm_password) {
      this.passwordMatched = false;
      return;
    }

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, registerForm.email, registerForm.password)
      .then((userCredential) => {
        // Signed in 
        // const user = userCredential.user;
        // ...
        this.isAuthenticated = false;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        this.isAuthenticated = true;
      })
      .finally(() => {
        this.isLoading = false;
      });
  }

  logout() {
    const auth = getAuth();
    signOut(auth).then(() => {
      // Sign-out successful.
      this.router.navigate(['login']);
      this.isAuthenticated = false;
    }).catch((error) => {
      // An error happened.
    });
  }
}
