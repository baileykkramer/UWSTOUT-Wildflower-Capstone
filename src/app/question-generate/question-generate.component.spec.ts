import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionGenerateComponent } from './question-generate.component';

describe('QuestionGenerateComponent', () => {
  let component: QuestionGenerateComponent;
  let fixture: ComponentFixture<QuestionGenerateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionGenerateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionGenerateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
