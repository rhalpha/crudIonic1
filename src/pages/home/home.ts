import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EmpleadoService } from '../../services/empleado.services';
import{LoginPage} from '../login/login';
import { App, MenuController } from 'ionic-angular';
import { DetailtPage } from '../detailt/detailt';
import firebase from 'firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  empleados = [];

//articulos = [];

  constructor(public navCtrl: NavController,  public empleadoService: EmpleadoService, public app: App, public menuCtrl: MenuController ) {
  
      this.empleadoService.getEmpleados().subscribe( empleados=> {
      this.empleados=empleados;
   
  });

  }

  CerrarSesion()
 {

 this.navCtrl.setRoot(LoginPage);
   location.reload();
 }

  public irDetalle(cedula){
    this.navCtrl.push(DetailtPage, {cedula:cedula});
  }

  public createEmpleado(){
    this.navCtrl.push(DetailtPage,{cedula:0})
  }


}
