import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions, CaptureVideoOptions } from '@ionic-native/media-capture';
import { Media, MediaObject } from '@ionic-native/media';

/**
 * Generated class for the CapturePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

const MEDIA_FILES_KEY = 'mediaFiles';

@IonicPage()
@Component({
  selector: 'page-capture',
  templateUrl: 'capture.html',
})
export class CapturePage {
  mediaFiles = [];
  images = [];
  constructor(public navCtrl: NavController,
    private mediaCapture: MediaCapture,
    // private file: File,
    // private media: Media
    ) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad CapturePage');
    // this.storage.get(MEDIA_FILES_KEY).then(res => {
    //   this.mediaFiles = JSON.parse(res) || [];
    // })
  }

  capturePhoto() {
    let options: CaptureImageOptions = { limit: 1 };
    this.mediaCapture.captureImage(options)
      .then((data: MediaFile[]) => {
        this.images = data;
      },
        (err: CaptureError) => console.error(err)
      );
  }

  captureVideo() {
    let options: CaptureVideoOptions = {
      limit: 1,
      duration: 30
    }
    this.mediaCapture.captureVideo(options).then((res: MediaFile[]) => {
      let capturedFile = res[0];
      let fileName = capturedFile.name;
      let dir = capturedFile['localURL'].split('/');
      dir.pop();
      let fromDirectory = dir.join('/');
      // var toDirectory = this.file.dataDirectory;
      // this.file.copyFile(fromDirectory, fileName, toDirectory, fileName).then((res) => {
      //   this.storeMediaFiles([{ name: fileName, size: capturedFile.size }]);
      // }, err => {
      //   console.log('err: ', err);
      // });
    },
      (err: CaptureError) => console.error(err));
  }

  play(myFile) {
    // if (myFile.name.indexOf('.wav') > -1) {
    //   const audioFile: MediaObject = this.media.create(myFile.localURL);
    //   audioFile.play();
    // } else {
    //   let path = this.file.dataDirectory + myFile.name;
    //   let url = path.replace(/^file:\/\//, '');
    //   let video = this.myVideo.nativeElement;
    //   video.src = url;
    //   video.play();
    // }
  }

  // storeMediaFiles(files) {
  //   this.storage.get(MEDIA_FILES_KEY).then(res => {
  //     if (res) {
  //       let arr = JSON.parse(res);
  //       arr = arr.concat(files);
  //       this.storage.set(MEDIA_FILES_KEY, JSON.stringify(arr));
  //     } else {
  //       this.storage.set(MEDIA_FILES_KEY, JSON.stringify(files))
  //     }
  //     this.mediaFiles = this.mediaFiles.concat(files);
  //   })
  // }



}
