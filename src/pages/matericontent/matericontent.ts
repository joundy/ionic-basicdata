import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-matericontent',
  templateUrl: 'matericontent.html',
})
export class MatericontentPage {

  
  public idBab :any;
  public babTitle :any;

  public babContents :any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http : Http) {
  }

  ionViewDidLoad() {
    // console.log(this.navParams.get('title'));
    this.idBab = this.navParams.get('id');
    this.babTitle = this.navParams.get('title');
    this.babContentLoad();
    }

  babContentLoad(){
  	this.http.get('https://www.zrthrteam.duniaarloji.com/bab/content.php?id=' + this.navParams.get('id'))
  	.map(res => res.json())
  	.subscribe(data=> {
      this.babContents = data;
      // console.log(data);
    });
  }

}
