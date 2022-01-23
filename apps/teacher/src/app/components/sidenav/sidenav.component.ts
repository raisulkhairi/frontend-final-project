/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../../services/teacher.service';

@Component({
  selector: 'teacher-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  opened=false;
  showProfile = false;
  showInfo = false;
  showProfile2 = false;
  showProfile3 = false;
  constructor(private teacherService: TeacherService) { }
  subject?: any[] = [
    {
      _id: '',
      subject_name: '',
      teacher_id: '',
      duration: '',
    },
  ];
  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
    this._teacherInit();
  }
  private _teacherInit() {
    this.teacherService
      .getTeacherByID('61d6f6a79d85b51c80471723')
      .subscribe((res) => {
        this.subject = res.Subject;
        console.log('HASIL : ', this.subject);
      });
  }
  goToLink(idSubject: any) {
    window.location.href = `/add-score/${idSubject}`;
  }
}
