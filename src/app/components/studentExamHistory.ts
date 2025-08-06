// models/exam-history.dto.ts
export interface ExamHistoryDto {
  id: number;
  studentId: string;
  score: number;
  startTime: Date;
  questions: any[];
  subjectName: string;
}

export interface PaginatedResultDto<T> {
  items: T[];
  pageNumber: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

export interface TokenPayload {
  studentId: string;
  // ممكن تضيف role أو username لو بتحب
}

