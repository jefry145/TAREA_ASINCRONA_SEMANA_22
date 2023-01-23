import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { PagesModule } from './pages/pages.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { initializeApp} from 'firebase/app';
import { provideFirebaseApp } from "@angular/fire/app";
import { environment } from './environment/environment';
import { provideAuth,getAuth } from "@angular/fire/auth";
import { AppMaterial } from './angular.material.module';

//FIREBASE:POST TERMINAR INSTALACION EN EL CMD
var config = {
  apiKey:environment.firebase.apiKey,
  authDomain:environment.firebase.authDomain,
  projectId: environment.firebase.projectId,
  storageBucket:environment.firebase.storageBucket,
  messagingSenderId:environment.firebase.messagingSenderId
}
//</>


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppMaterial,
    AppRoutingModule,
    PagesModule,
    BrowserAnimationsModule,
    //FIREBASE:POST TERMINAR INSTALACION EN EL CMD
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth())
    //</>
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
