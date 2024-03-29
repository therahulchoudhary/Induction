import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
  navigateWithState(location: string) {
    this.router.navigateByUrl('/form', { state: { formstate: location } });
  }
}
