import { Component } from '@angular/core';
import { Route,Router } from '@angular/router';
@Component({
  selector: 'app-page-dad',
  templateUrl: './page-dad.component.html',
  styleUrls: ['./page-dad.component.css']
})
export class PageDadComponent {
  constructor(
    private routes:Router
  ){}
  ngOnInit(){
    this.routes.navigate(["/pageinit/login"])
 }
}
