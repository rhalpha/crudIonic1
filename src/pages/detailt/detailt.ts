import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmpleadoService } from '../../services/empleado.services';
import { HomePage} from '../home/home';
@IonicPage()
@Component({
  selector: 'page-detailt',
  templateUrl: 'detailt.html',
})
export class DetailtPage {


empleado:any = { cedula:null, nombre:null,  apellido:null, cargo:null};
cedula=null;
show = true;

  constructor(public navCtrl: NavController, public navParams: NavParams,  public empleadoService: EmpleadoService) {

  this.cedula = navParams.get('cedula');
  if(this.cedula != 0){
 
  this.empleadoService.getEmpleado(this.cedula).subscribe(empleado => {
  this.empleado=empleado;
});

}
}

agregarEmpleado(){
  
  if(this.cedula != 0){
    this.empleadoService.editar(this.empleado);
    alert('editado con exito');

}else{
  this.empleadoService.guardar(this.empleado)
  alert('registrado con exito');
}
  this.navCtrl.pop();
}


eliminarEmpleado(){
  this.show = false;

    this.empleadoService.eliminar(this.empleado);

    alert('eliminado con éxito!');

    this.navCtrl.pop();
}





  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailtPage');
  }




}