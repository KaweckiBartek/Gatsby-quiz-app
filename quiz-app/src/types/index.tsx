
export interface ILessonQuestion {
  choices: string[];
  correct: string;
  question: string;
}

export interface ICustomInput {
  value: string;
  activeQuestion: number;
  questions: ILessonQuestion[];
  register: any;
  index: number;
  category: string
}

export interface IQuizComponent {
  questions: ILessonQuestion[];
  category: string;
}