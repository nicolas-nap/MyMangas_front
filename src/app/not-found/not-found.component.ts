import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'not-found',
  templateUrl: 'not-found.component.html',
})
export class NotFoundComponent implements OnInit {
  public isAuthenticated: boolean = false;

  constructor(

  ) {}

  public async ngOnInit(): Promise<void> {
    this.isAuthenticated = false;
  }
}
