/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';

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

  constructor() {}

  ngOnInit(): void {}
}
