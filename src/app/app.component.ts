import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Adotar', url: '/adotar', icon: 'caret-up-circle' },
    { title: 'Doar', url: '/doar', icon: 'caret-down-circle' },
    { title: 'Dúvidas', url: '/duvidas', icon: 'help-circle' },
    { title: 'Suporte', url: '/suporte', icon: 'information-circle' },
  ];
  constructor(public auth: AngularFireAuth) {}
}
