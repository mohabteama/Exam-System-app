import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ExamDto } from '../../components/exam';
import { Exam } from '../../services/exam/exam';

@Component({
  selector: 'app-exam',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './exam.html',
  styleUrl: './exam.css',
})
export class getExam implements OnInit {


  page = 1;
  pageSize = 10;
  Math = Math;
 exams = signal<ExamDto[]>([]);
  pagedExams = signal<ExamDto[]>([]);




  getStudentData: any;

  examData: ExamDto | null = null;
  isLoading: boolean = true;
  error: string | null = null;

  private examService = inject(Exam);
  searchTerm: any;
  ExamDto: ExamDto | undefined;
  selectedExam: any;

  ngOnInit(): void {
    
    this.page = 1;
  this.pageSize = 10; 
  this.loadExamData();
  }

  loadExamData(): any {
    this.examService.getExamData(this.page, this.pageSize).subscribe({
      next: (data) => {
        this.exams.set(data.items);
        this.updatePagedExams(); // <== استخدم البيانات المقسمة
        this.isLoading = false;
      },
      error: (err: any) => {
        this.error = 'Failed to load students data';
        this.isLoading = false;
        console.error(err);
      },
    });
  }
updatePagedExams() {
    const startIndex = (this.page - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.pagedExams.set(this.exams().slice(startIndex, endIndex));
  }

nextPage() {
    const totalPages = Math.ceil(this.exams().length / this.pageSize);
    if (this.page < totalPages) {
      this.page++;
      this.updatePagedExams();
    }
  }

 prevPage() {
    if (this.page > 1) {
      this.page--;
      this.updatePagedExams();
    }
  }
  
}
