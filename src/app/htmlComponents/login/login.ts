  import { Component, inject } from '@angular/core';
  import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
  import { Authentication } from '../../services/authentication/authentication';
  import { Router, RouterModule } from '@angular/router';
  import { CommonModule } from '@angular/common';
import { jwtDecode } from 'jwt-decode';

  @Component({
    selector: 'app-login',
    standalone : true,
    imports: [FormsModule, ReactiveFormsModule, RouterModule, CommonModule],
    templateUrl: './login.html',
    styleUrl: './login.css'
  })
  export class Login {
    private router = inject(Router);
    private authService= inject(Authentication);
    loginForm:FormGroup=new FormGroup(
      {
        name:new FormControl("", Validators.required),
        email:new FormControl("",[Validators.email,Validators.required]),
        password:new FormControl("",[Validators.required])
      })
    
    login() {
  if (!this.loginForm.invalid) {
    this.authService.login(this.loginForm.value).subscribe((jwtDto) => {
      const token = jwtDto.token;
      localStorage.setItem('jwtToken', token);

      const decodedToken: any = jwtDecode(token);
      const role = decodedToken.role;


      if (role === 'Admin') {
  this.router.navigate(['/admin-navbar']);
} else if (role === 'Student') {
        this.router.navigate(['/nav']);
      } else {
        this.router.navigate(['/unauthorized']);
      }
    });
  }
}
  }
