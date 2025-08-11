import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { SubmitExamDto, SubmitResultDto } from '../../components/submitExam';
import { CreateExamService } from '../../services/createExam/create-exam';
import { NotificationService } from '../../services/notification/notification';


@Component({
  selector: 'app-create-exam',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterModule, CommonModule],
  templateUrl: './create-exam.html',
  styleUrl: './create-exam.css'
})
export class CreateExam {
showNotification = false;
exam: any | null = null;
isExamStarted : boolean | undefined;
  submitResult?: SubmitResultDto;
  timer: number = 60;
intervalId: any;
  selectedOptionIds: number[] = [];
  selectedSubject: string | null = null;
  showSuccessMessage = false;
  private router = inject(Router);

constructor(private createExamService: CreateExamService,private notificationService: NotificationService,examService: CreateExamService) {}
 ngOnInit() {
    this.notificationService.startConnection();
    this.notificationService.onScoreReceived((data) => {
      console.log('📡 SignalR - Score Received:', data);
      this.submitResult = {
        examId: data.id,
        score: data.score,
        examDate: data.examDate,
        subjectName: data.subjectName,
      };
      
      this.showNotification = true;
      
      setTimeout(() => {
        this.showNotification = false;
      }, 5000);
    });
  }


  createExam() {
    if (!this.selectedSubject) {
      alert('Please select a subject first!');
      return;
    }
    this.isExamStarted = true;
    const subjectMapping: {[key: string]: string} = {
      'science': '1002',
      'mathematics': '1003',
      'history': '1004',
      'english': '1005',
      'geography': '1006',
      'physics': '1007'
    };
    const subjectId = +subjectMapping[this.selectedSubject];
    const token = localStorage.getItem('jwtToken');
    const examData = {
      subjectId: subjectId
    };

    this.createExamService.createExam(subjectId).subscribe({
    next: (response) => {
      console.log('✅ FULL EXAM RESPONSE:', response);
      this.exam = response;
      this.startTimer();
    },
    error: () => {
      this.isExamStarted = false; 
    }
  });
  }
   selectSubject(subject: string) {
    this.selectedSubject = subject;
  }

  selectOption(optionId: number) {
    if (!this.selectedOptionIds.includes(optionId)) {
     
      this.selectedOptionIds = this.selectedOptionIds.filter(
        (id) => !this.isSameQuestion(id, optionId)
      );
      this.selectedOptionIds.push(optionId);
    }
  }

  isSameQuestion(existingOptionId: number, newOptionId: number): boolean {
   
    return false; 
  }

  submitExam() {
    const data: SubmitExamDto = {
      examId: this.exam.id,
      selectedOptionIds: this.selectedOptionIds,
    };

    this.createExamService.submitExam(data).subscribe({
      next: (result) => {
        this.submitResult = result;
        console.log('Exam submitted successfully', result);
        clearInterval(this.intervalId);
        

      },
      error: (err) => {
        console.error('Error submitting exam', err);
      },
    });
  }
  startTimer() {
  this.timer = 60; 
  this.intervalId = setInterval(() => {
    this.timer--;
    if (this.timer <= 0) {
      clearInterval(this.intervalId);
      this.submitExam(); 
    }
  }, 1000); 
}
navigateToHistory() {
    this.router.navigate(['/student-exam-history']);
  }
}

