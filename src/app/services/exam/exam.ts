import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExamDto } from '../../components/exam';
import { PaginatedResponse } from '../../Interfaces/PaginatedResponse';

@Injectable({
  providedIn: 'root'
})
export class Exam {
  getExams(): Observable<ExamDto[]> {
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${this.token}`
  });
   return this.http.get<ExamDto[]>(this.examUrl, {
      headers: headers,
    });
  }
    private examUrl = "https://localhost:7153/api/Exam/student/history"
  token:string=""

  constructor(private http:HttpClient ){
    this.token=localStorage.getItem("jwtToken")!;
    console.log(this.token);
  }
    public getExamData(page: number, pageSize: number) {
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      });
      return this.http.get<PaginatedResponse<ExamDto>>(this.examUrl,{
        headers:headers,
      });
      
    } 
}
