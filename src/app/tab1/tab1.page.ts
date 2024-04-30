import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import {
  Camera,
  CameraSource,
  CameraResultType,
} from '@capacitor/camera';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
  standalone : true ,
  imports : [IonicModule,CommonModule]
})
export class Tab1Page {
  constructor(private domSanitizer: DomSanitizer) {}

  photoTaken: string | undefined = '';
  imageSource: SafeResourceUrl | null = null;

  async openGallery() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera,
    });
    this.photoTaken = image?.dataUrl;
  }

  async takePhoto() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      source: CameraSource.Prompt,
    });
    this.imageSource = this.domSanitizer.bypassSecurityTrustResourceUrl(
      image.webPath ? image.webPath : ''
    );
    console.log(this.imageSource);
  }

  getPhoto() {
    return this.imageSource;
  }
}
