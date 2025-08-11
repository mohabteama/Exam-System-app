import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-navbar',
  imports: [],
  templateUrl: './admin-navbar.html',
  styleUrl: './admin-navbar.css'
})
export class AdminNavbarComponent  {
  constructor(private router: Router) {}

  goToDashboard() {
    this.router.navigate(['/dashBoard']);
  }

  goToStudents() {
    this.router.navigate(['/student']);
  }

  goToAddingQuestionAnswer() {
    this.router.navigate(['/add-questions-answers']);
  }
}
