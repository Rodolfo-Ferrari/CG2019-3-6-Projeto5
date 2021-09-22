import { Component, OnInit } from '@angular/core';

//
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-support',
  templateUrl: './support.page.html',
  styleUrls: ['./support.page.scss'],
})
export class SupportPage implements OnInit {

  constructor(public auth: AngularFireAuth,) { }

  ngOnInit() {
  }

}
