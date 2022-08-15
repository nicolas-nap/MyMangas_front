import { Component, HostListener, NgZone } from '@angular/core';
import dayjs from '@shared/helpers/dayjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  public year = dayjs().format('YYYY');
  @HostListener('window:scroll', []) public onScroll() {
    this.showBackToTopButton = window.pageYOffset > 300;
  }
  constructor(private zone: NgZone) {}

  public showBackToTopButton: boolean = false;

  public backToTop(event: MouseEvent) {
    event.stopPropagation();
    this.zone.run(() => {
      //$('html, body').animate({ scrollTop: 0 }, 600);
    });
  }
}
