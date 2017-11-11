import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-materi',
  templateUrl: 'materi.html',
})
export class MateriPage {

  public babs : any;
  // public data : any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public http : Http) {
    // this.data = {};
    // this.data.username = '';
    // this.data.response = '';

    // this.http = http;
  }

  matericontent(babId,babTitle){

    let data = {
      id:babId,
      title:babTitle
    }
    this.navCtrl.push('MatericontentPage',data);
  }

  ionViewDidLoad() {

    // var link = 'http://localhost/basicdata/test.php';
    // var data = JSON.stringify({username: 'jondeasdfasdfadfss',password:'ssssess'});
    
    // this.http.post(link, data)
    // .subscribe(data => {
    //     // this.data.response = data._body;
    // }, error => {
    //     console.log("Oooops!");
    // });


  }

  ionViewWillEnter(){
  	this.babsLoad();
  }

  babsLoad(){
    
  	this.http.get('http://localhost/basicdata/bab/bab.php')
  	.map(res => res.json())
  	.subscribe(data=> {
  		this.babs = data;
  	});
  }

}
