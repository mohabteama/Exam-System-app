
export interface SubmitExamDto {
  examId: number;
  selectedOptionIds: number[];
}


export interface SubmitResultDto {
  
  examId: number;
  subjectName: string;
  examDate: string;
  score: number;
}