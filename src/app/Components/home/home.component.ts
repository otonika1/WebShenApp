import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { CarouselComponent } from "../../Features/carousel/carousel.component";
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  objectives:string[] = ['კომპანიაზე', 'საიტზე']
  index:number = 0;
  introObjective: string = '';
  
  platformId = inject(PLATFORM_ID);
  isBrowser = isPlatformBrowser(this.platformId);

  animationFrameId:number | null = null;
  ngOnInit(): void {
    this.startAnimation();

  }
  startAnimation = () => {
      this.animateText();
  }
  animateText = () => {
    if (this.isBrowser) {
      const element = document.querySelector('.objective') as HTMLElement;
      this.index = (this.index + 1) % this.objectives.length;
      this.introObjective = this.objectives[this.index];
      setTimeout(() => {
        
        this.animateText()
      }, 3000);
    } 
    
  }
  ngOnDestroy(): void {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }
}
