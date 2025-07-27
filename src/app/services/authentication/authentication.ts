import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RegisterDto } from '../../components/register';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { JwtAuth } from '../../components/jwtAuth';
import { LoginDto } from '../../components/login';

@Injectable({
  providedIn: 'root'
})
export class Authentication {
  registerUrl = "Authentication/Register"
  loginUrl = "Authentication/Login"
  // studentUrl = "Student"

  constructor(private http:HttpClient ){}

  public register(user : RegisterDto, headers?: HttpHeaders):Observable<JwtAuth>{
        const options = headers ? { headers } : undefined;

    return this.http.post<JwtAuth>(`${environment.apiUrl}/${this.registerUrl}`,user,
      {
  
      }
    );
  }

  public login(user : LoginDto, headers?: HttpHeaders):Observable<JwtAuth>{
    const options = headers ? { headers } : undefined;
    return this.http.post<JwtAuth>(`${environment.apiUrl}/${this.loginUrl}`,user);
  }

  // public getStudent():Observable<any>{
  //   return this.http.get<any>(`${environment.apiUrl}/${this.studentUrl}`);
  // }
}
