import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GetStudent } from './student';


describe('Student', () => {
  let component: GetStudent;
  let fixture: ComponentFixture<GetStudent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetStudent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetStudent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
