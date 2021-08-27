import { Component, OnInit } from '@angular/core';
import { PhotosService } from 'src/app/photos.service';

@Component({
  selector: 'app-the-bridesmaid',
  templateUrl: './the-bridesmaid.component.html',
  styleUrls: ['./the-bridesmaid.component.css']
})
export class TheBridesmaidComponent implements OnInit {

  photos = [];
  constructor(public photosService: PhotosService) { }

  ngOnInit(): void {
    this.photos = this.photosService.photosMelisa;    
  }

}
