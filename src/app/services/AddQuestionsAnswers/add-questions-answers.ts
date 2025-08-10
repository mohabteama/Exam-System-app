import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddQuestionsAnswersService {
  private baseUrl = 'https://localhost:7153/api';
  private createQuestionUrl = `${this.baseUrl}/Question`;
  private createOptionUrl = `${this.baseUrl}/Option`;

  constructor(private http: HttpClient) {}

  createQuestion(subjectId: number, question: { question: string }) {
    return this.http.post(`${this.createQuestionUrl}?SubjectID=${subjectId}`, question)
      .pipe(
        map((response: any) => {
          console.log('Service received response:', response);
          return response;
        })
      );
  }

  createAnswer(questionId: number, answer: { text: string, isCorrect: boolean }) {
    const optionDto = {
      option: answer.text,
    };
    
    console.log(`Sending request to: ${this.createOptionUrl}?questionId=${questionId}`);
    console.log('With data:', optionDto);
    
    return this.http.post(`${this.createOptionUrl}?questionId=${questionId}`, optionDto);
  }
}