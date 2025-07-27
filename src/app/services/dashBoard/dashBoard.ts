import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashBoardd {
  private dashBoardUrl = "https://localhost:7153/api/DashBoard"
  token:string=""
  constructor(private http:HttpClient ){

    this.token=localStorage.getItem("jwtToken")!;
    console.log(this.token);
    
  }

  public getDashboardData(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
    return this.http.get(this.dashBoardUrl,{
      headers:headers,
    });
}
}
