
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import{ User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the RegistrarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registrar',
  templateUrl: 'registrar.html',
})
export class RegistrarPage {

user = {} as User;

  constructor(private fireAuth: AngularFireAuth, public navCtrl: NavController,private toast: ToastController, public navParams: NavParams) {
  }

  // ir a login pagina
  login() {
    this.navCtrl.push(LoginPage);
  }

  register(user: User) {
    try {
    const info =  this.fireAuth.auth.createUserWithEmailAndPassword(user.email , user.password);

 if(info){
   alert("Registro Con Exito");
   this.navCtrl.setRoot(LoginPage);

 }

  } catch(e){
    this.toast.create({
      message: "La Contraseña Debe Tener mas de 6 caracteres",
      duration: 4000,
      cssClass: "error"
    }).present();
  }
}
}
