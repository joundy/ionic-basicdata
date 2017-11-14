import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the QuizanswerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quizanswer',
  templateUrl: 'quizanswer.html',
})
export class QuizanswerPage {

  public quizTitle:any;
  public quizId:any;

  public quizAnswers:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http : Http) {
  }

  ionViewDidLoad() {
    this.quizTitle = this.navParams.get('quizTitle');
    this.quizId = this.navParams.get('quizId');

    this.http.get('https://www.zrthrteam.duniaarloji.com/quiz/answer.php?id='+this.quizId)
  	.map(res => res.json())
  	.subscribe(data=> {
      this.quizAnswers = data;
      // console.log(data);
    });
  }

}
