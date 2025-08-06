import { TestBed } from '@angular/core/testing';
import { StudentExamHistoryComponent } from '../../htmlComponents/student-exam-history/student-exam-history';


describe('StudentExamHistory', () => {
  let service: StudentExamHistoryComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentExamHistoryComponent);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
