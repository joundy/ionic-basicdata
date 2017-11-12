import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
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
  public quiz:any[] = {};
  public dataQuiz:any;
  public data:any;
  public quizData:any;

  public no:any = 1;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public http : Http) {
    // this.quiz = {};
    this.data = {};
  }

  ionViewDidLoad() {
    this.username = this.navParams.get('username');
    this.quizLoad();
    console.log(this.quizData);
    
  }

  quizLoad(){
  	this.http.get('http://localhost/basicdata/quiz/getquiz.php')
  	.map(res => res.json())
  	.subscribe(data=> {
      this.quizData = data;
      // console.log(data);
    });
  }

  prepareData(){
    this.dataQuiz = {
      username:this.username,
      quiz:this.quiz
    };
  }

  quizResult(){
    var link = 'http://localhost/basicdata/test.php';
    var data = JSON.stringify({username: this.username,quiz:this.quiz});
    
    this.http.post(link, data)
    .subscribe(data => {
        // this.data.response = data._body;
        console.log('yoolo');
    }, error => {
        console.log("Oooops!");
    });
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
            this.prepareData();
            this.quizResult();
            console.log(this.dataQuiz);
          }
        }
      ]
    });
    confirm.present();
  }
}
