import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models';
import { FirestoreService } from 'src/app/servicio/firestore.service';

@Component({
  selector: 'app-creacion-de-tareas',
  templateUrl: './creacion-de-tareas.component.html',
  styleUrls: ['./creacion-de-tareas.component.scss'],
})
export class CreacionDeTareasComponent  implements OnInit {
  tareas:Tarea[] =[];
  newTarea:Tarea={
    nombre:'',
    descripcion:'',
    prioridad: null,
    id:this.firestoreService.getId(),
    fecha: new Date(),
  }
  path='Tareas/'

  currentValue = 'javascript';
  onIonChange(event: CustomEvent) {
    this.currentValue = event.detail.value;
  }
  onDidDismiss(event: CustomEvent) {
    console.log('didDismiss', JSON.stringify(event.detail));
  }

  constructor(public firestoreService: FirestoreService) { }

  ngOnInit() {
    this.getProductos();
  }
  getProductos(){
    this.firestoreService.getCollection<Tarea>(this.path).subscribe(res=>{
      this.tareas =res;
    }); 
}
deleteTar(tarea:Tarea){

    this.firestoreService.deleteTarea(this.path, tarea.id)
} 
  

guardarTarea(){
    this.firestoreService.createTarea(this.newTarea, this.path, this.newTarea.id)
  }

enableNewTarea=false;
nuevo(){
  this.enableNewTarea=true;
  this.newTarea={
    nombre:'',
    descripcion:'',
    prioridad: null,
    id:this.firestoreService.getId(),
    fecha: new Date(),
  }
}
}
