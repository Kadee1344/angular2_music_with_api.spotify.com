import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HTTP_PROVIDERS } from '@angular/http';
import { Router } from '@angular/router';
import { MuSearcherService } from './services/mu-searcher.service';


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [NavbarComponent, ROUTER_DIRECTIVES],
  providers: [HTTP_PROVIDERS, MuSearcherService],
})

export class AppComponent {
  constructor (private _router: Router) {

  }
}
