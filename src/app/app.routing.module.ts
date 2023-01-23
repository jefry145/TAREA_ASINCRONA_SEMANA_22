import { NgModule } from "@angular/core";
import { Routes , RouterModule } from "@angular/router";
import { LoginComponent } from "./pages/login/login.component";
import { MainComponent } from "./pages/main/main.component";
import { RegisterComponent } from "./pages/register/register.component";
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { BreakingPageComponent } from "./components/breakpage";
import { PageDadComponent } from "./pages/page-dad/page-dad.component";

const routes : Routes =[
    {path:"main" , component: MainComponent, ...canActivate(()=> redirectUnauthorizedTo(["/pageinit"]))},
    {path:"pageinit" , component : PageDadComponent,
         children:[
            {path:"login" , component : LoginComponent},
            {path:"register" , component:RegisterComponent} //...canActivate(()=> redirectUnauthorizedTo(["/pageinit"]))
         ]},
    
    {path:'', pathMatch:'full', redirectTo:'/pageinit'},

    {path:'404', component: BreakingPageComponent},
  {path:'**', redirectTo:'404', pathMatch:'full'},//devuelve aqui si la ruta no existe
]
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule {}