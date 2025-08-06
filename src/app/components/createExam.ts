export interface OptionDto {
  id: number;
  option: string;
  isCorrect: boolean;
}

export interface QuestionDto {
  id: number;
  question: string;
  options: OptionDto[];
}

export interface CreateExamDto {
  id: number;
  studentId: string;
  subjectId: number;
  subjectName: string;
  startTime: string;
  questions: QuestionDto[];
}
