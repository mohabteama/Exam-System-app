import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Authentication } from '../../services/authentication/authentication';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone:true,
  imports: [FormsModule, ReactiveFormsModule, RouterModule, CommonModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  private authService= inject(Authentication);
  registerForm:FormGroup=new FormGroup(
    {
      name:new FormControl("", Validators.required),
      email:new FormControl("",[Validators.email,Validators.required]),
      password:new FormControl("",[Validators.required])
    })

    register(){
    console.log(this.registerForm.value);
      
    if(!this.registerForm.invalid)
    this.authService.register(this.registerForm.value).subscribe((jwtDto) => {
      localStorage.setItem('jwtToken', jwtDto.token );
    });
  }
}