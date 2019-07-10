import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { ShareService } from '../../app/share.service';

/*
  Generated class for the AdminProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AdminProvider {
  data: any;
  apiUrl: any;
  constructor(public http: Http, public share: ShareService) {
    console.log('Hello AdminProvider Provider');
    this.apiUrl = this.share.adminServiceUrl;
  }

  getRequestHeader() {
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    return new RequestOptions({ headers: headers });
  }

  execute(uri, data) {
    let options = this.getRequestHeader();
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/' + uri, JSON.stringify(data), options)
        .map(res => res.json())

        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        }, (err) => {
          reject(err);
        });
    });
  }
  
  // Values/ForTest

  UserLogin(data) {
    return this.execute('Values/ForTest', data);
  }

  CheckOTP(data) {
    return this.execute('CheckOTP', data);
  }

  OptGeneerate(data) {
    return this.execute('OptGeneerate', data);
  }
  
  // GetUserLoginApp(data) {
  //   return this.execute('GetUserLoginApp', data);
  // }


}
