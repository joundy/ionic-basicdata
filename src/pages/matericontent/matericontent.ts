import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MatericontentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-matericontent',
  templateUrl: 'matericontent.html',
})
export class MatericontentPage {

  
  public idBab :any;
  public babTitle :any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    // console.log(this.navParams.get('title'));
    this.idBab = this.navParams.get('id');
    this.babTitle = this.navParams.get('title');
  }

}
