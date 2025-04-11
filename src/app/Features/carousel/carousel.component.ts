import { NgFor } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbCarousel, NgbCarouselModule, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-carousel',
  imports: [NgbCarouselModule, FormsModule, NgFor],
    templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  images = [62, 83, 466, 965, 982, 1043, 738].map((n) => `https://picsum.photos/id/${n}/900/500`);
  imgs = [
    {
      url:'https://wp.inspiring-workplaces.com/wp-content/uploads/2023/12/Skills-scaled.jpeg',
      title:'მხოლოდ მაღალი ხარისხის სერვისები'
    },
    {
      url:'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg',
      title:'სწრაფად და ეფექტურად'
    },
    {
      url:'https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg',
      title:'ნაკლები ხარჯით'
    },
    {
      url:'https://images.pexels.com/photos/1921326/pexels-photo-1921326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title:'თქვენს ბიზნესზე მორგებული'
    }
  ]
	paused = false;
	unpauseOnArrow = false;
	pauseOnIndicator = false;
	pauseOnHover = true;
	pauseOnFocus = true;

	@ViewChild('carousel', { static: true }) carousel: NgbCarousel | undefined;

	togglePaused() {
		if (this.paused) {
			this.carousel?.cycle();
		} else {
			this.carousel?.pause();
		}
		this.paused = !this.paused;
	}

	onSlide(slideEvent: NgbSlideEvent) {
		if (
			this.unpauseOnArrow &&
			slideEvent.paused &&
			(slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)
		) {
			this.togglePaused();
		}
		if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
			this.togglePaused();
		}
	}
}
