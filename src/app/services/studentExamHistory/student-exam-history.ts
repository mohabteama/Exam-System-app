// services/exam-history.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaginatedResultDto, ExamHistoryDto } from '../../components/studentExamHistory';

@Injectable({ providedIn: 'root' })

export class ExamHistoryService {
  studentExamHistiry: any;
  getExamHistory(pageNumber: number = 1, pageSize: number = 10) {
  const url = `https://localhost:7153/api/Exam/student/history?pageNumber=${pageNumber}&pageSize=${pageSize}`;
  return this.http.get<PaginatedResultDto<ExamHistoryDto>>(url);
}

  constructor(private http: HttpClient) {}

  getHistory(page: number, size: number): Observable<PaginatedResultDto<ExamHistoryDto>> {
    return this.http.get<PaginatedResultDto<ExamHistoryDto>>(
      `${this.studentExamHistiry}/student/history?pageNumber=${page}&pageSize=${size}`
    );
  }
}
