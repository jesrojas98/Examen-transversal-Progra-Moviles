import { Component, OnInit } from '@angular/core';
import {  Subscription } from 'rxjs';
import { Usuario } from 'src/app/models';
import { FirebaseAuthService } from 'src/app/servicio/firebase-auth.service';
import { FirestoreService } from 'src/app/servicio/firestore.service';

@Component({
  selector: 'app-input-email',
  templateUrl: './input-email.component.html',
  styleUrls: ['./input-email.component.scss'],
})
export class InputEmailComponent  implements OnInit {
usuario:Usuario={
uid:'',
nombre:'',
password: '',
rut: '',
telefono: '',
email: '',

}

uid='';

subscribeuserInfo:Subscription;

  constructor(public firebaseAuthService:FirebaseAuthService,
public firestoreService:FirestoreService
  ) { 
    this.firebaseAuthService.estadoauten().subscribe(res => {
      if(res !== null){
        this.uid= res.uid;
        this.getUserInfo(this.uid);
      }else{
       this.initCliente();
      }
    });

  }

  async ngOnInit() {

    const uid= await this.firebaseAuthService.getUid();
    console.log(uid);

  }

  initCliente(){
    this.uid = '';
        this.usuario={
          uid:'',
          nombre:'',
          password: '',
          rut: '',
          telefono: '',
          email: '',
          
          }
          console.log('initCliente')
  }

 async registrarse(){
    const credenciales = {
      email: this.usuario.email,
      password: this.usuario.password,
    };
    const res = await this.firebaseAuthService.registrar(credenciales.email,credenciales.password).catch(err =>{console.log('error ->',res);});
  
    const uid= await this.firebaseAuthService.getUid();
    this.usuario.uid = uid;
    this.guardarUsuario();
    console.log(uid);


  }
  guardarUsuario(){
    const path = 'Usuarios/';
    const name = this.usuario.nombre;
    this.firestoreService.createTarea(this.usuario, path, this.usuario.uid)
  }


  async salir(){
    this.firebaseAuthService.logout();
    this.subscribeuserInfo.unsubscribe();
  }

  getUserInfo(uid:string){
    console.log('getUserInfo');
    const path ='Usuarios/'
    this.subscribeuserInfo = this.firestoreService.getTarea<Usuario>(path, this.uid).subscribe(res =>{
        this.usuario = res;
    });
  }


}
