import { Routes } from '@angular/router';
import { CreateExam } from './htmlComponents/create-exam/create-exam';
import { DashBoard } from './htmlComponents/dash-board/dash-board';
import { getExam } from './htmlComponents/exam/exam';
import { Login } from './htmlComponents/login/login';
import { Register } from './htmlComponents/register/register';
import { GetStudent } from './htmlComponents/student/student';
import { AuthGuard } from './guards/auth-guard';

export const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: 'full' },
  { path: "login", component: Login },
  { path: "register", component: Register },
  { path: "dashBoard", component: DashBoard, canActivate: [AuthGuard] },
  { path: "student", component: GetStudent, canActivate: [AuthGuard] },
  { path: "exam", component: getExam, canActivate: [AuthGuard] },
  { path: "create-exam", component: CreateExam, canActivate: [AuthGuard] },
  {path: "admin-navbar", loadComponent: () => import('./htmlComponents/admin-navbar/admin-navbar').then(m => m.AdminNavbarComponent), canActivate: [AuthGuard]},
  {
    path: "student-exam-history",
    loadComponent: () =>
      import('./htmlComponents/student-exam-history/student-exam-history')
        .then(m => m.StudentExamHistoryComponent),
    canActivate: [AuthGuard]
  },
  {
    path: "nav",
    loadComponent: () =>
      import('./htmlComponents/navigation-page/navigation-page')
        .then(m => m.NavigationPage),
    canActivate: [AuthGuard]
  },
  { path: "dashBoard", component: DashBoard, canActivate: [AuthGuard] },
{ path: "student", component: GetStudent, canActivate: [AuthGuard] },
{ path: "unauthorized", loadComponent: () => import('./htmlComponents/login/login').then(l => l.Login) },
];
