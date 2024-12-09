import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {



  constructor(public database:AngularFirestore ) { }

  createTarea(data: any, path:string, id:string){
    const collection = this.database.collection(path);
    return collection.doc(id).set(data);
  }

  getTarea<tipo>(path:string, id:string){
    const collection = this.database.collection<tipo>(path);
    return collection.doc(id).valueChanges();
  }

  deleteTarea(path:string, id:string){
    const collection = this.database.collection(path);
    return collection.doc(id).delete();
  }

  updateTarea(data: any, path:string, id:string){
    const collection = this.database.collection(path);
    return collection.doc(id).update(data);
  }

  getId(){
    return this.database.createId();
  }

  getCollection<tipo>(path:string){
    const collection = this.database.collection<tipo>(path);
    return collection.valueChanges();
  }

}
