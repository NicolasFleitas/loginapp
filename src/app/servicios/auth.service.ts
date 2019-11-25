import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public afAuth: AngularFireAuth
  ) { }

  // Creación de un usuario
  registerUser(email: string, pass: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(email, pass)
      .then( userData => resolve(userData),
    err => reject(err));
    });
  }

  // Realizar el login

  loginEmail(email: string, pass: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, pass)
      .then( userData => resolve(userData),
    err => reject(err));
    });
  }

  // Devuelve los datos del usuario logueado
  getAuth() {
    return this.afAuth.authState.map(auth => auth );
  }

  logout() {
    return this.afAuth.auth.signOut();
  }
}
