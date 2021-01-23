
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

export interface IMainButton {
  url: string;
  text: string;
  category: string;
}

export interface ICategories {
  category: string;
}

export interface ICategoryTile {
  icon: string;
  title: string;
  size: string;
  url: string;
  category: string;
}

export interface ICategoryChosen {
  icon: string;
  title: string;
  size: string;
}

export interface IHeader {
  backButton: boolean;
}

export interface IHeading {
  text: string;
  category: string;
}

