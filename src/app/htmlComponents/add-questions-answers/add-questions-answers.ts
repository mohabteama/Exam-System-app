import { Component, OnInit } from '@angular/core';
import { AddQuestionsAnswersService } from '../../services/AddQuestionsAnswers/add-questions-answers';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http'; // Add this import

@Component({
  selector: 'app-add-questions-answers',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-questions-answers.html',
  styleUrls: ['./add-questions-answers.css']
})
export class AddQuestionsAnswers implements OnInit {
  // If you need baseUrl in your component:
  private baseUrl = 'https://localhost:7153/api';
  
  subjectId: number = 0;
  questionText: string = '';
  lastQuestionId: number | null = null;

  answerText: string = '';
  isCorrect: boolean = false;
  options: { text: string; isCorrect: boolean }[] = [];

  constructor(
    private addQuestionsAnswersService: AddQuestionsAnswersService,
    private http: HttpClient // Add HttpClient to your constructor
  ) {}

  ngOnInit(): void {
    // Check if we have a saved question ID in localStorage
    const savedId = localStorage.getItem('lastQuestionId');
    if (savedId) {
      this.lastQuestionId = parseInt(savedId, 10);
    }
  }

  get canAddAnswer(): boolean {
    return this.lastQuestionId !== null;
  }

  create() {
    if (!this.questionText.trim()) {
      alert("Please enter a question");
      return;
    }

    this.addQuestionsAnswersService.createQuestion(this.subjectId, { question: this.questionText })
      .subscribe({
        next: (res: any) => {
          console.log('Full API Response:', res);
          
          // Try to find the ID
          let foundId = null;
          if (res && res.QuestionId !== undefined) {
            // Based on your backend, it should be QuestionId
            foundId = res.QuestionId;
          } else if (res && res.id !== undefined) {
            foundId = res.id;
          }
          
          if (foundId !== null) {
            alert("Question created successfully");
            this.questionText = ''; 
            this.lastQuestionId = foundId;
            localStorage.setItem('lastQuestionId', foundId.toString());
          } else {
            alert("API did not return a question ID in the expected format");
            console.error("Cannot find ID in response:", res);
          }
        },
        error: (err) => {
          console.error("API Error:", err);
          alert("Error creating question");
        }
      });
  }

  addAnswer() {
    if (this.lastQuestionId == null) {
      alert("Please create a question first");
      return;
    }
    
    if (!this.answerText.trim()) {
      alert("Please enter answer text");
      return;
    }

    // Use the corrected service method
    this.addQuestionsAnswersService.createAnswer(this.lastQuestionId, {
      text: this.answerText,
      isCorrect: this.isCorrect
    }).subscribe({
      next: (response) => {
        console.log('Answer added successfully:', response);
        this.options.push({ text: this.answerText, isCorrect: this.isCorrect });
        this.answerText = '';
        this.isCorrect = false;
      },
      error: (err) => {
        console.error('Error adding answer:', err);
        alert(`Error creating answer: ${err.message || 'Unknown error'}`);
      }
    });
  }
}