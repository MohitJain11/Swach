import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, ToastController, LoadingController } from 'ionic-angular';
import { HeaderComponent } from '../../components/header/header';
import { OtpPage } from '../otp/otp';
import { AdminProvider } from '../../providers/admin/admin';
import { ShareService } from '../../app/share.service';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var cordova: any;

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  @ViewChild("header") headerComponent: HeaderComponent;
  private serviceResponse: any = "";
  loading: Loading;
  userName = "";
  password = "";

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public adminProvider: AdminProvider,
    public toastCtrl: ToastController,
    public loadingControl: LoadingController,
    private share: ShareService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
    // this.navCtrl.push(OtpPage);
    this.UserLogin();
  }

  UserLogin() {
    this.showLoading();
    let param = {
      "UserName": "peeyush",
      "Password": "123456",
    };
    console.log(param);
    this.adminProvider.UserLogin(param).then((result) => {
      this.serviceResponse = result;
      this.loading.dismiss();
      if (this.serviceResponse.status) {

      }
      else {
        this.presentToast(this.serviceResponse.ErrorMessage);
        console.log(this.serviceResponse.ErrorMessage);
      }
    }, (err) => {

      this.loading.dismiss();
      this.presentToast("Internal server error. Please try again");
    });
  }

  loginTest() {
    let url = 'http://103.74.54.55:7902/api/Admin/UserLogin';
    let params = {
      "UserName": "peeyush",
      "Password": "123456",
    };
    let headers = {};
    cordova.plugin.http.get(url,
      params, headers, (response) => {
        console.log(response.status);
      }, function (response) {
        console.error(response.error);
      });
  }

  showLoading() {
    this.loading = this.loadingControl.create({
      content: 'Please wait...',
      // dismissOnPageChange: true,
      duration: this.share.loadingDuration
    });
    this.loading.present();
  }

  presentToast(msg) {
    msg = (msg.indexOf(":") > 0) ? msg.split(":")[1].trim() : msg;
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
    // this.gettotal();
  }

}
