import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { PhotosService } from '../../photos.service';
import { Photo } from '../../photo.model';

@Component({
  selector: 'app-groomsmen-wedding',
  templateUrl: './groomsmen-wedding.component.html',
  styleUrls: ['./groomsmen-wedding.component.css'],
  providers: []
})
export class GroomsmenWeddingComponent implements OnInit {

  photos: Photo[];

  constructor(public photosService: PhotosService) { }

  ngOnInit(): void {
    this.photos = this.photosService.photosPadrinhos;
  }

  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;

  @ViewChild('carousel', {static : true}) carousel: NgbCarousel;

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }

}
