import React, { useEffect, useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { IQuizComponent } from '../../types';
import CustomInput from './CustomInput';
import { ScoreCtx } from "../../context"
// import goodAnswearIcon from "../../images/icons/poprawna_odpowiedź_.svg"

import NextButton from '../buttons/NextButton';
import EndButton from '../buttons/EndButton';
import { Link } from 'gatsby';

const QuizComponent = ({
  questions,
  category,
}: IQuizComponent) => {
  const [ activeQuestion, changeActiveQuestion ] = useState(0);
  const [ goodAnswers, setGoodAnswers ] = useState<string[]>([]);
  const [ answers, setAnswers ] = useState<string[] | []>([]);

  const { score, setScore } = useContext(ScoreCtx)

  const { register, handleSubmit } = useForm();

  const handleScore = () => {
    let score = 0;
    for (let i = 0; i < questions.length; i++) {
      if (answers[ i ] === goodAnswers[ i ]) score += 1;
    }
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
    <div className="quiz__questions">
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
              <CustomInput
                {...{ value: 'A', activeQuestion, questions, register, index: 0, category }}
              />
              <CustomInput
                {...{ value: 'B', activeQuestion, questions, register, index: 1, category }}
              />
              <CustomInput
                {...{ value: 'C', activeQuestion, questions, register, index: 2, category }}
              />
              <CustomInput
                {...{ value: 'D', activeQuestion, questions, register, index: 3, category }}
              />
              <CustomInput
                {...{ value: 'E', activeQuestion, questions, register, index: 4, category }}
              />
            </div>

            <div style={{ marginTop: "50px" }}></div>

            <form onSubmit={handleSubmit(onSubmit)}>
              {(activeQuestion === questions.length - 1)
                ?
                <Link to={`/${category}/quiz/result`}>
                  <input className={`start__button start__button__${category} end__button`} type="submit" value="ZAKOŃCZ" />
                </Link>
                :
                <input className={`start__button start__button__${category} next__button`} type="submit" value="Następne pytanie" />
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

