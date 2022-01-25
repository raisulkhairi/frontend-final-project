import { Component, OnInit } from '@angular/core';
import { kelas } from '../../models/kelas';
import { Student } from '../../models/student';
import { KelasServices } from '../../services/kelas.service';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'headmaster-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css'],
})
export class ClassComponent implements OnInit {
  // public displayedColumns = ['nama','bInggris','bIndonesia']

  // public dataSource = new MatTableDataSource<Student>()

  // @ViewChild(MatPaginator) paginator: MatPaginator

  constructor(
    private kelasService: KelasServices,
    private studentService: StudentService
  ) {}
  kelas?: kelas[];
  student: Student[] = [];

  ngOnInit(): void {
    // this.getAllStudentRelatedToTheClass()

    this.kelasService.getAllClass().subscribe((result) => {
      this.kelas = result;
      console.log('diskelas', this.kelas);
    });

    // this.studentService.getAllStudentRelatedToTheClass('61dd65db591ae97754b4065c').subscribe(result => {
    //   this.student= result
    //   console.log('abc:', this.student)
    // })
  }

  // public getAllStudentRelatedToTheClass = () => {
  //   this.studentService.getAllStudentRelatedToTheClass().subscribe(resultByClass => {
  //     this.dataSource.data = resultByClass
  //     console.log('Sini om',resultByClass)
  //   })
  // }

  // ngAfterViweInit(): void {
  //   this.dataSource.paginator =this.paginator
  // }
}
