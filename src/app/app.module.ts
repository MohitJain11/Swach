import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { MediaCapture/*, MediaFile, CaptureError, CaptureImageOptions*/ } from '@ionic-native/media-capture';
// https://ionicacademy.com/capture-audio-video-local/
import { Media } from '@ionic-native/media';
import { File } from '@ionic-native/file';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { OtpPage } from '../pages/otp/otp';
import { CapturePage } from '../pages/capture/capture';
import { FormSubmitPage } from '../pages/form-submit/form-submit';
import { HeaderComponent } from '../components/header/header';

import { AdminProvider } from '../providers/admin/admin';
import { ShareService } from '../app/share.service';

import { HTTP } from '@ionic-native/http';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    OtpPage,
    CapturePage,
    FormSubmitPage,
    HeaderComponent
  ],
  imports: [
    BrowserModule,HttpModule,
    IonicModule.forRoot(MyApp, {
      // scrollPadding: false,
      // scrollAssist: true,
      // autoFocusAssist: false
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    OtpPage,
    LoginPage,
    CapturePage,
    FormSubmitPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    MediaCapture,
    Media,
    HTTP,
    File,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AdminProvider,
    ShareService
  ]
})
export class AppModule { }
