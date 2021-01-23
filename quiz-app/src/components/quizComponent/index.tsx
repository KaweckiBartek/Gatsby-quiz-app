import React, { useEffect, useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { IQuizComponent } from '../../types';
import CustomInput from './CustomInput';
import { useScore } from "../../context"
import { Link } from 'gatsby';
// import goodAnswearIcon from "../../images/icons/poprawna_odpowiedź_.svg"


const QuizComponent = ({
  questions,
  category,
}: IQuizComponent) => {
  const [ activeQuestion, changeActiveQuestion ] = useState<number>(0);
  const [ goodAnswers, setGoodAnswers ] = useState<string[]>([]);
  const [ answers, setAnswers ] = useState<string[] | []>([]);
  const { register, handleSubmit } = useForm();
  const { score, setScore } = useScore()
  const answerValue = [ 'A', 'B', 'C', 'D', 'E' ];
  
  const handleScore = () => {
    let score = 0;
    answers.map((answear, i) => (
      (answear === goodAnswers[ i ]) && score++
    ))
    setScore(score);
  };

  console.log(score);
  console.log(answers);
  console.log(goodAnswers);

  useEffect(() => {
    setGoodAnswers(questions.map((question) => question.correct.slice(0, 1)));
  }, [ questions ]);

  useEffect(() => {
    if (activeQuestion === questions.length) {
      handleScore();
    }
  }, [ activeQuestion ]);

  const onSubmit = (data: any) => {
    const answer = data[ activeQuestion ];
    setAnswers([ ...answers, answer ]);
    changeActiveQuestion(activeQuestion + 1)
  };

  return (
    <div className="quiz-component">
      {activeQuestion < questions.length && (
        <div className="wrapper">
          <div className="question">
            <div
              className="question__content"
              dangerouslySetInnerHTML={{
                __html: (activeQuestion + 1) + ". " + questions[ activeQuestion ].question,
              }}
            />

            <div className="custom__input__box">
              {answerValue.map((value, index) => (
                <CustomInput key={value} {...{ value, activeQuestion, questions, register, index, category }} />
              ))}
            </div>

            <form
              className="quiz-component__form"
              onSubmit={handleSubmit(onSubmit)}>
              {(activeQuestion === questions.length - 1)
                ?
                <Link to={`/${category}/quiz/result`}>
                  <input className={`main-button main-button__${category} end__button`} type="submit" value="ZAKOŃCZ" />
                </Link>
                :
                <input className={`main-button main-button__${category} next__button`} type="submit" value="Następne pytanie" />
              }
            </form>
          </div>
        </div>
      )
      }
    </div >
  );
};

export default QuizComponent;

