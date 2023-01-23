import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  constructor(
    private userservice:DataService,
    private routes:Router,
    private _snackBar: MatSnackBar,
  ){}

  panelOpenState = false;
//FUNCION QUE CIERRA LA SESION DEL USUARIO EN UTILIZACION

  logout(){
    this.userservice.logout()
    .then(response => {
      console.log(response)
      this.routes.navigate(["/pageinit/login"]);
      this._snackBar.open(`Hasta la proxima`,"hecho");
    })
    .catch(error => console.log(error));
   }

}

