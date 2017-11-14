import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the QuizselectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quizselect',
  templateUrl: 'quizselect.html',
})
export class QuizselectPage {

  public quizLevels:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http) {
  }

  ionViewDidLoad() {
    this.http.get('https://www.zrthrteam.duniaarloji.com/quiz/getlevel.php')
  	.map(res => res.json())
  	.subscribe(data=> {
      this.quizLevels = data;
    });
    console.log('ionViewDidLoad QuizselectPage');
  }

  quizPage(quizId,quizTitle){
    let data = {
      quizId:quizId,
      quizTitle:quizTitle
    };
    this.navCtrl.push('QuizPage',data);
  }

}
