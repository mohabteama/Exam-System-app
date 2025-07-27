import { Component, inject, OnInit } from '@angular/core';
import { StudentDto } from '../../components/student';
import { Student } from '../../services/student/student';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './student.html',
  styleUrl: './student.css'
})

export class GetStudent implements OnInit {
  students: StudentDto[] = [];
getStudentData: any;
searchStudents() {
throw new Error('Method not implemented.');
}
viewStudent(arg0: any) {
throw new Error('Method not implemented.');
}
editStudent(arg0: any) {
throw new Error('Method not implemented.');
}
deleteStudent(arg0: any) {
throw new Error('Method not implemented.');
}
closeDetail() {
throw new Error('Method not implemented.');
}
  studentData: StudentDto | null = null;
  isLoading: boolean = true;
  error: string | null = null;

  private studentService = inject(Student)
searchTerm: any;
StudentDto: StudentDto | undefined;
selectedStudent: any;

  ngOnInit(): void {
    this.loadStudentData();
  }

  loadStudentData(): any {

    this.studentService.getStudentData().subscribe({
      next: (data) => {
        this.students = Array.isArray(data) ? data : [data];
        this.isLoading = false;
      },
      error: (err: any) => {
        this.error = 'Failed to load students data';
        this.isLoading = false;
        console.error(err);
      }
    });
  }
}


