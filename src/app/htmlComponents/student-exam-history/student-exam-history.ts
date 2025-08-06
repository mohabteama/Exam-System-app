import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { jwtDecode } from 'jwt-decode';

interface ExamHistoryDto {
  id: number;
  studentId: string;
  score: number;
  startTime: string;
  subjectName: string;
}

interface PaginatedResultDto<T> {
  items: T[];
  pageNumber: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

interface TokenPayload {
  nameid: string;
  // other claims if needed
}

@Component({
  selector: 'app-student-exam-history',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './student-exam-history.html',
  styleUrl: './student-exam-history.css',
})
export class StudentExamHistoryComponent implements OnInit {
  studentId: string = '';
  history: ExamHistoryDto[] = [];
  pageNumber: number = 1;
  pageSize: number = 10;
  totalPages: number = 0;
studentExamHistory: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const token = localStorage.getItem('jwtToken');
    if (token) {
      const decoded = jwtDecode<TokenPayload>(token);
      this.studentId = decoded.nameid;
      this.fetchHistory(); // load on init
    }
  }

  fetchHistory() {
    const token = localStorage.getItem('jwtToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    const url = `https://localhost:7153/api/Exam/student/history?pageNumber=${this.pageNumber}&pageSize=${this.pageSize}`;

    this.http.get<PaginatedResultDto<ExamHistoryDto>>(url, { headers }).subscribe({
      next: (res) => {
        this.history = res.items;
        this.totalPages = res.totalPages;
      },
      error: (err) => {
        console.error('Error fetching exam history:', err);
        this.history = [];
      },
    });
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.pageNumber = page;
      this.fetchHistory();
    }
  }
}
