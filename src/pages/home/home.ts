import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ApiProvider} from '../../providers/api/api';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public items:any = []
  constructor(public navCtrl: NavController, public api:ApiProvider) {
  	this.api.get().subscribe((data) => {
     console.log(data);
     this.getPosts();
  	});
  }

  getPosts(){
    this.api.get('posts?_embed').subscribe((data) => {
      this.items = data;
    });
  }

}
