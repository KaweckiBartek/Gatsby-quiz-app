import React from 'react';
import { ICustomInput } from '../../types';
import goodAnswearIcon from '../../images/icons/poprawna_odpowiedź_.svg'

const CustomInput = ({
  value,
  activeQuestion,
  questions,
  register,
  index,
  category,
  answerChecked,
  showGoodAnswer,
  isDisabled,
  handleAnswerChange,
}: ICustomInput) => {

  const correctAnswer = questions[ activeQuestion ].correct.slice(0, 1) 
  
  return (
    <label className={`question__answer ${isDisabled ? "custom__checkbox__disabled" : ""}`}>
      <input
        type="radio"
        name={`${activeQuestion}`}
        value={value}
        checked={answerChecked === `${value}`}
        ref={register({ required: true })}
        disabled={isDisabled}
        onChange={handleAnswerChange}
      />
      <div
        className={`custom__checkbox main-button__${category} ${isDisabled ? "custom__checkbox__disabled" : ""}`}
      >
      {questions[activeQuestion] && questions[activeQuestion].choices[index]}
       
        {(showGoodAnswer && correctAnswer === value) && <img
          className="good-answer-icon"
          src={goodAnswearIcon}
          alt="good-answear-icon" />}
      </div>
    </label>
  );
};

export default CustomInput;