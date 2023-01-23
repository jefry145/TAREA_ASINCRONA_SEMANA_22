import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { AppMaterial } from '../angular.material.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule } from '../app.routing.module';
import { PageDadComponent } from './page-dad/page-dad.component';


@NgModule({
  declarations: [
    MainComponent,
    LoginComponent,
    RegisterComponent,
    PageDadComponent
  ],
  imports: [
    CommonModule,
    AppMaterial,
    MatSlideToggleModule,
    AppRoutingModule
  ],
  exports:[
    MainComponent,
    LoginComponent,
    RegisterComponent,
    PageDadComponent
  ]
})
export class PagesModule { }
