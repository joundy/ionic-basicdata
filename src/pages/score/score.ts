import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the ScorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-score',
  templateUrl: 'score.html',
})
export class ScorePage {

  public username:any;
  public score:any;
  public correct:any;
  public incorrect:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http : Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScorePage');
    var quiz = this.navParams.get('quiz');
    var username = this.navParams.get('username');

    var link = 'http://localhost/basicdata/test.php';
    var data = JSON.stringify({username: username,quiz:quiz});
    
    this.http.post(link, data)
    .map(res => res.json())
    .subscribe(data => {
       console.log(data.username);

       this.username = data.username;
       this.score = data.score;
       this.correct = data.correct;
       this.incorrect = data.incorrect;

    }, error => {
        console.log("Oooops!");
    });
  }

  back(){
    this.navCtrl.remove(2,1);
    this.navCtrl.pop();
  }

  quizResult(){
    
  
  }

}
