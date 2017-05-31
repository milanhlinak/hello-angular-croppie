import { Component, ViewChild } from '@angular/core';
import { CroppieOptions } from 'croppie';
import { ImageCropComponent } from './image-crop/image-crop.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('imageCrop') imageCrop: ImageCropComponent;

  title = 'Hello Angular Croppie!';
  inputImage = '/assets/image.jpg';
  outputImage = null;
  cropBoxData = '';
  croppieOptions: CroppieOptions = {
    boundary: { width: 500, height: 500 },
    viewport: { width: 300, height: 300, type: 'square' },
    showZoomer: false,
    enforceBoundary: false
  };

  onResult(result: any) {
    this.outputImage = result;
  }

  onGetCropBoxDataClick() {
    const object = this.imageCrop.get();
    // const zoom = object.zoom;
    // const topLeftX = object.points[0];
    // const topLeftY = object.points[1];
    // const bottomRightX = object.points[2];
    // const bottomRightY = object.points[3];
    this.cropBoxData = JSON.stringify(object);
    console.log(JSON.stringify(object));
  }

  resizeViewport(width: number, height: number) {
    this.imageCrop.resizeViewport(width, height);
  }

}
