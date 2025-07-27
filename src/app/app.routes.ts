import { Routes } from '@angular/router';
import { Login } from './htmlComponents/login/login';
import { Register } from './htmlComponents/register/register';
import { DashBoard } from './htmlComponents/dash-board/dash-board';
import { GetStudent } from './htmlComponents/student/student';



export const routes: Routes = [
    { path: "",redirectTo:"login" , pathMatch: 'full' },
  { path: "login", component: Login },
  { path: "register", component: Register },
  { path: "dashBoard", component: DashBoard },
  { path: "student", component: GetStudent },
];
