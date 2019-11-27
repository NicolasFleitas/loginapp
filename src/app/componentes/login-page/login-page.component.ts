import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  public email: string;
  public password: string;

  constructor(
    public authservice: AuthService,
    public router: Router,
    public flashMensaje: FlashMessagesService
  ) { }

  ngOnInit() {
  }


  onSubmitLogin() {
    this.authservice.loginEmail(this.email, this.password)
    .then( (res) => {
      this.flashMensaje.show('Usuario logueado correctamente',
      {cssClass: 'alert-success', timeout: 3000 });
      this.router.navigate(['/privado']);
    }).catch( (err) => {
      this.flashMensaje.show(err.message,
      {cssClass: 'alert-danger', timeout: 3000 });
      console.log(err);
      this.router.navigate(['login']);
    });
  }

  onClickGoogleLogin() {
    this.authservice.loginGoogle()
    .then((res) => {
      this.router.navigate(['/privado']);
    }).catch( err => console.log(err.message));
  }

  onClickFacebookLogin() {
    this.authservice.loginFacebook()
    .then((res) => {
      this.router.navigate(['/privado']);
    }).catch( err => console.log(err.message));
  }


}
