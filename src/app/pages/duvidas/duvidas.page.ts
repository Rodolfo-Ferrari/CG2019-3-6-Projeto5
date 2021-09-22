import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-duvidas',
  templateUrl: './duvidas.page.html',
  styleUrls: ['./duvidas.page.scss'],
})
export class DuvidasPage implements OnInit {
  constructor(public auth: AngularFireAuth) {}

  ngOnInit() {}
}
