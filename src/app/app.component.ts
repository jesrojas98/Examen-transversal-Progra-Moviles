import { Component } from '@angular/core';
import { FirebaseAuthService } from 'src/app/servicio/firebase-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  admin = false;
  constructor(private firebaseAuthService:FirebaseAuthService,
  
  )
   {this.initializeApp();}

initializeApp(){
this.getUid();
}


getUid(){
  this.firebaseAuthService.estadoauten().subscribe(res=>{
    console.log('res.uid')
    if(res !==null){
      if(res.uid.length>5){
        this.admin=true;
      }else{
        this.admin=false;
      }
    }else{
      this.admin=false;
  }

  });
}


}

