import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword , signInWithEmailAndPassword, signOut } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor (private auth:Auth) { }

//REGISTRO DE USUARIO EN LA BASE DE DATOS FIREBASE
  registerUser({email,password}:any){
      //console.log(email)

     return createUserWithEmailAndPassword(this.auth,email,password)
  }


  //LOGUEO DE USUARIO ; VERIFICANDO SI ESTA EN LA BASE DE DATOS
  login({email,password}:any){
    return signInWithEmailAndPassword(this.auth,email,password)
  }


  //FUNCION QUE CIERRA LA SESION DEL USUARIO EN UTILIZACION
  logout(){
    return signOut(this.auth)
  }
}
