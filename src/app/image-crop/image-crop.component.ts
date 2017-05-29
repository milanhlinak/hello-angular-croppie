import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { CroppieOptions } from 'croppie';
import Croppie from 'croppie';

@Component({
  selector: 'app-image-crop',
  templateUrl: './image-crop.component.html',
  styleUrls: ['./image-crop.component.css']
})
export class ImageCropComponent implements OnInit {

  private croppie: Croppie;

  @ViewChild('image') image: ElementRef;
  @Input() imageUrl: string;
  @Input() croppieOptions: CroppieOptions;
  @Output() result: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    this.croppie = new Croppie(this.image.nativeElement, this.croppieOptions);
    this.croppie.bind({
      url: this.imageUrl
    });
  }

  onUpdate() {
    this.croppie.result({ type: 'base64', size: 'viewport' }).then((res) => {
      this.result.emit(res);
    });
  }

  get() {
    return this.croppie.get();
  }

}
