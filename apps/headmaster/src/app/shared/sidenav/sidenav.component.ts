/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../services/authorization.service';

@Component({
  selector: 'headmaster-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent implements OnInit {
  opened = false;

  showTeacher = false;
  showStudent = false;
  showParent = false;
  showClass = false;
  count1 = 0;
  count2 = 0;
  count3 = 0;

  constructor(private authorizationService: AuthorizationService) {}

  ngOnInit(): void {}
  logoutUser() {
    this.authorizationService.logout();
  }
  openTeacher() {
    this.count1++;
    if (this.count1 % 2 == 1) {
      this.showTeacher = true;
      this.showStudent = false;
      this.showParent = false;
    } else {
      this.showTeacher = false;
      this.showStudent = false;
      this.showParent = false;
    }
    this.count1 %= 2;

    this.count2 = 0;
    this.count3 = 0;
  }
  openStudent() {
    this.count2++;
    if (this.count2 % 2 == 1) {
      this.showTeacher = false;
      this.showStudent = true;
      this.showParent = false;
    } else {
      this.showTeacher = false;
      this.showStudent = false;
      this.showParent = false;
    }
    this.count2 %= 2;
    this.count1 = 0;
    this.count3 = 0;
  }
  openParent() {
    this.count3++;
    if (this.count3 % 2 == 1) {
      this.showTeacher = false;
      this.showStudent = false;
      this.showParent = true;
    } else {
      this.showTeacher = false;
      this.showStudent = false;
      this.showParent = false;
    }

    this.count3 %= 2;
    this.count1 = 0;
    this.count2 = 0;
  }
}
