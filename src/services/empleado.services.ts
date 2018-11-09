import { Injectable } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';


@Injectable()
export class EmpleadoService {



empleados = [];

 constructor( public afDB: AngularFireDatabase){

}


public getEmpleados(){
  return this.afDB.list('empleados/').valueChanges();
 
}

public getEmpleado(cedula){
  return this.afDB.object('empleados/'+cedula).valueChanges();
  
}


public guardar(empleado){
 this.afDB.database.ref('empleados/'+empleado.cedula).set(empleado);
 
}


public editar(empleado){
  this.afDB.database.ref('empleados/'+empleado.cedula).set(empleado);
}

public eliminar(empleado){
 

   this.afDB.database.ref('/empleados/'+empleado.cedula).remove();
  


}
}
