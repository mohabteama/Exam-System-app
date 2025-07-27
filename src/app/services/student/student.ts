import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentDto } from '../../components/student';

@Injectable({
  providedIn: 'root'
})
export class Student {
  getAllStudents(): Observable<StudentDto[]> {
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${this.token}`
  });
  return this.http.get<StudentDto[]>(this.studentUrl, {
    headers: headers,
  });
}
  searchStudents(searchTerm: string) {
    throw new Error('Method not implemented.');
  }
  getStudentById(id: number) {
    throw new Error('Method not implemented.');
  }
  deleteStudent(id: number) {
    throw new Error('Method not implemented.');
  }
  private studentUrl = "https://localhost:7153/api/Student"
  token:string=""
  
  constructor(private http:HttpClient ){

    this.token=localStorage.getItem("jwtToken")!;
    console.log(this.token);
  }
  public getStudentData(): Observable<StudentDto> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
    return this.http.get<StudentDto>(this.studentUrl,{
      headers:headers,
    });
  } 
}
