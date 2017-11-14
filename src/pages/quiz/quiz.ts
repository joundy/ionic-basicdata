import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the QuizPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quiz',
  templateUrl: 'quiz.html',
})
export class QuizPage {

  public quizTitle:any;
  public quizId:any;

  public username:any;
  public scores:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http : Http) {
    this.username = '';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuizPage');
    this.quizTitle = this.navParams.get('quizTitle');
    this.quizId = this.navParams.get('quizId');

  }

  ionViewDidEnter(){
    this.http.get('https://www.zrthrteam.duniaarloji.com/quiz/score.php?id='+this.quizId)
  	.map(res => res.json())
  	.subscribe(data=> {
      this.scores = data;
      // console.log(data);
    });
  }

  quizContent(){
    let data = {
      username:this.username,
      quizTitle:this.quizTitle,
      quizId:this.quizId
    };

    this.navCtrl.push('QuizcontentPage',data);
  }

}
