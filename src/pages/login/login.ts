import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { RegistrarPage } from '../registrar/registrar';
import { HomePage} from '../home/home';
import{ User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';



/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
let _this;

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage  {

user = {} as User;

  constructor(private fireAuth: AngularFireAuth, private toast: ToastController, public navCtrl: NavController, public navParams: NavParams) {
    _this = this;
  }


  // ir a Registrar pagina
  registrar()
   {
   this.navCtrl.push(RegistrarPage);
  }



  // ir a crud
  login(user: User) {
    firebase.auth().signInWithEmailAndPassword(user.email, user.password).then(function(user) {
      alert("Bienvenido");
      _this.navCtrl.setRoot(HomePage);
      // user signed in
   }).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  if (errorCode === 'auth/wrong-password') {
    alert('Wrong password.');
  } else {
    alert(errorMessage);
  }
  alert(error);

});

    
}
}
