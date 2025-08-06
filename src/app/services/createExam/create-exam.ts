import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExamDto } from '../../components/exam';
import { SubmitExamDto, SubmitResultDto } from '../../components/submitExam';

export interface CreateExamDto {
  subjectId: string;
}

@Injectable({
  providedIn: 'root',
})
export class CreateExamService {
  private createExamUrl = 'https://localhost:7153/api/Exam/create';
  private submitExamUrl = 'https://localhost:7153/api/Exam/submit';

  constructor(private http: HttpClient) {}

  public createExam(subjectId: number): Observable<ExamDto> {
  return this.http.post<ExamDto>(`${this.createExamUrl}?subjectId=${subjectId}`, null);
}



  submitExam(data: SubmitExamDto): Observable<SubmitResultDto> {
    return this.http.post<SubmitResultDto>(this.submitExamUrl, data);
  }

}
