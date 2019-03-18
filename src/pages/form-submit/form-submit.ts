import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CapturePage } from '../capture/capture';

/**
 * Generated class for the FormSubmitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-form-submit',
  templateUrl: 'form-submit.html',
})
export class FormSubmitPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormSubmitPage');
  }

  login() {
    this.navCtrl.push(CapturePage);
  }

}
