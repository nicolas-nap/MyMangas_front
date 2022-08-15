import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import {LayoutService} from './layout.service';

@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit, OnDestroy {
  private subscribeNavigation: Subscription | undefined;

  constructor(public layoutService: LayoutService, private router: Router) {}

  public ngOnInit() {
    this.subscribeNavigation = this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }

      window.scrollTo(0, 0);
    });
  }

  public ngOnDestroy(): void {
    if (!this.subscribeNavigation) {
      return;
    }
    this.subscribeNavigation.unsubscribe();
  }

  public closeSidebar(): void {
    this.layoutService.sidebarToggled = false;
  }

  public sideBarIsOpen(): boolean {
    return this.layoutService.sidebarToggled;
  }
}
