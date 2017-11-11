import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the QuizcontentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quizcontent',
  templateUrl: 'quizcontent.html',
})
export class QuizcontentPage {

  public username:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    this.username = this.navParams.get('username');
    console.log('yolo');
  }
  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Kirim Quiz?',
      message: 'Aksi tidak bisa di ralat:3',
      buttons: [
        {
          text: 'Cek Kembali',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Kirim',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }
}
