// submitExam.ts
export interface SubmitExamDto {
  examId: number;
  selectedOptionIds: number[];
}

// لو هتستقبل النتيجة
export interface SubmitResultDto {
  examId: number;
  subjectName: string;
  examDate: string;
  score: number;
}