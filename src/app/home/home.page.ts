import { Component ,ViewChild} from '@angular/core';
import { RouterLink } from '@angular/router';
import type { IonModal } from '@ionic/angular';
import { AnimationController } from '@ionic/angular'
import { FirebaseAuthService } from 'src/app/servicio/firebase-auth.service';
import { Usuario } from '../models';
import { Subscription } from 'rxjs';
import { FirestoreService } from 'src/app/servicio/firestore.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  isAlertOpen = false;
  alertButtons = ['Action'];
  isOpen: boolean


  usuario:Usuario={
    uid:'',
    nombre:'',
    password: '',
    rut: '',
    telefono: '',
    email: '',
    
    }
    subscribeuserInfo:Subscription;
    uid='';
    
  constructor(private animationCtrl: AnimationController,
    private firebaseAuthService:FirebaseAuthService,
    private firestoreService:FirestoreService,
    private router:Router,
  ) {this.firebaseAuthService.estadoauten().subscribe(res => {
    if(res !== null){
      this.uid= res.uid;
      this.getUserInfo(this.uid);
      this.router.navigate(['inicio']);
      this.setOpen(true);
    }else{
     this.initCliente();
     this.setOpen(false);

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

async salir(){
  this.firebaseAuthService.logout();
  this.subscribeuserInfo.unsubscribe();
}

ingresar(){
  const credenciales ={
    email:this.usuario.email,
    password: this.usuario.password,
  };
  this.firebaseAuthService.login(credenciales.email,credenciales.password).then(res =>{

  });

}


getUserInfo(uid:string){
  console.log('getUserInfo');
  const path ='Usuarios/'
  this.subscribeuserInfo = this.firestoreService.getTarea<Usuario>(path, this.uid).subscribe(res =>{
      this.usuario = res;
  });
}
setOpen(isOpen: boolean) {
  this.isAlertOpen = isOpen;
}

}
