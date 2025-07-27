  import { Component, inject } from '@angular/core';
  import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
  import { Authentication } from '../../services/authentication/authentication';
  import { RouterModule } from '@angular/router';
  import { CommonModule } from '@angular/common';

  @Component({
    selector: 'app-login',
    standalone : true,
    imports: [FormsModule, ReactiveFormsModule, RouterModule, CommonModule],
    templateUrl: './login.html',
    styleUrl: './login.css'
  })
  export class Login {
    private authService= inject(Authentication);
    loginForm:FormGroup=new FormGroup(
      {
        name:new FormControl("", Validators.required),
        email:new FormControl("",[Validators.email,Validators.required]),
        password:new FormControl("",[Validators.required])
      })
    
    login(){
      console.log(this.loginForm.value);
      
      if(!this.loginForm.invalid)
      this.authService.login(this.loginForm.value).subscribe((jwtDto) => {
        localStorage.setItem('jwtToken', jwtDto.token );
      });
    }
  }
