import { Injectable } from "@angular/core";


@Injectable()
export class AuthService {

  constructor() {
    
  }

  signInWithEmail(credentials) {
    console.log("Sign in with email");
   
  }

  signUp(credentials) {
    
  }

  get authenticated(): boolean {
    return true
  }

  getEmail() {
  }

  signOut(): void {
   
  }

  signInWithGoogle() {
    console.log("Sign in with google");
    
  }

  sendEmail() {
   
  }
  resetPassword(email: string): void {
  }
}
