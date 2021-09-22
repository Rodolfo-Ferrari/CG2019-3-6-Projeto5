import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-doar',
  templateUrl: './doar.page.html',
  styleUrls: ['./doar.page.scss'],
})
export class DoarPage implements OnInit {

  constructor(public auth: AngularFireAuth) { }

  ngOnInit() {
  }

}
