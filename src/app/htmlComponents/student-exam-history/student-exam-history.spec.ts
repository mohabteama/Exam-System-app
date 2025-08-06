import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentExamHistoryComponent } from './student-exam-history';

describe('StudentExamHistory', () => {
  let component: StudentExamHistoryComponent;
  let fixture: ComponentFixture<StudentExamHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentExamHistoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentExamHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
