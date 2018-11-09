import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegistrarPage } from '../pages/registrar/registrar';
import { EmpleadoService } from '../services/empleado.services';
import { DetailtPage } from '../pages/detailt/detailt';

////
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyB8e0hn_Ft78VkeGQE1ASArCKxVItOlJUI",
  authDomain: "crudempleados-90f3f.firebaseapp.com",
  databaseURL: "https://crudempleados-90f3f.firebaseio.com",
  projectId: "crudempleados-90f3f",
  storageBucket: "crudempleados-90f3f.appspot.com",
  messagingSenderId: "820941653701"
};





@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
     RegistrarPage,
    DetailtPage
  ],

  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  AngularFireModule.initializeApp(firebaseConfig),
AngularFireDatabaseModule,
AngularFireAuthModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegistrarPage,
    DetailtPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EmpleadoService
  ]
})
export class AppModule {}
