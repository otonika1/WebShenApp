import { isPlatformBrowser, NgClass } from '@angular/common';
import { AfterViewInit, Component, HostListener, inject, OnInit, PLATFORM_ID, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  imports: [NgClass],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent implements OnInit {
  platformId = inject(PLATFORM_ID);
  isBrowser = isPlatformBrowser(this.platformId);
  isScrolled = false;
  ngOnInit() {
    if (this.isBrowser) {
      setTimeout(() => {
        this.isScrolled = window.scrollY > 50
      }, 300)
    }
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (this.isBrowser) {
      this.isScrolled = window.scrollY > 50
    }
  }

}
