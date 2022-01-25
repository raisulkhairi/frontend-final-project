/* eslint-disable @angular-eslint/use-lifecycle-interface */
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { kelas } from '../../models/kelas';
import { Student } from '../../models/student';
import { StudentService } from '../../services/student.service';

// TABLE
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

interface IPost {
  id: string;
  nama?: string;
  'Fisika 1'?: string;
  'Fisika 2'?: string;
  'Fisika 3'?: string;
}

@Component({
  selector: 'headmaster-class-by-score',
  templateUrl: './class-by-score.component.html',
  styleUrls: ['./class-by-score.component.css'],
})
export class ClassByScoreComponent implements OnInit {
  @Input() public parentData: any;
  student: any[] = [];
  kelas: kelas[] = [];
  studentData_1 = {};
  tempSubject: any[];

  // Table
  dataSource: MatTableDataSource<IPost>;
  posts: IPost[] = [];
  columns: string[] = [];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    // this.columns = ['id', 'nama', 'Fisika 1', 'Fisika 2', 'Fisika 3'];
    this.posts = [
      {
        id: '1',
        nama: 'Oscar',
        'Fisika 1': '89',
        'Fisika 2': '99',
        'Fisika 3': '',
      },
    ];

    this.studentService
      .getAllStudentRelatedToTheClass('61dd65db591ae97754b4065c')
      .subscribe((result) => {
        this.student = result;
        console.log(this.student[0]);
        this.columns.push('id');
        this.columns.push('nama');
        this.student[0].subject.forEach((element) => {
          this.columns.push(element.subject_name.subject_name);
        });
        this.student.forEach((el) => {
          let testData = {};

          console.log('id : ', el._id);
          console.log('nama : ', el.first_name);

          testData['id'] = el._id;
          testData['nama'] = el.first_name;

          el.subject.forEach((element) => {
            const tempData = {};
            for (const [key, value] of Object.entries(element)) {
              if (key == 'subject_name') {
                tempData['subject_name'] = value['subject_name'];
              } else if (key == 'score_subject') {
                tempData['score_subject'] = value;
              }
            }

            console.log(
              `${tempData['subject_name']}` + ' - ' + tempData['score_subject']
            );

            testData[`${tempData['subject_name']}`] = tempData['score_subject'];
          });
          console.log('TEST DATA : ', testData);
          // this.posts.push(testData);
        });

        console.log('');
      });

    this.dataSource = new MatTableDataSource(this.posts);

    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}
