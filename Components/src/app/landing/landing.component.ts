import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { USERS } from '../users/mock-users';
import { UserService } from '../users/user.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  users = USERS;
  constructor(public router: Router,userService: UserService) {
    this.users = userService.getUsers();
   }

  ngOnInit() {
  }
  navigateWithState(location: string) {
    this.router.navigateByUrl('/form', { state: { formstate: location } });
  }
}
