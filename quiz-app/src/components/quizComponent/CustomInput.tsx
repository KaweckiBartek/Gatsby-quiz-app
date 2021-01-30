import React from 'react';
import { ICustomInput } from '../../types';
// import goodAnswearIcon from '../../images/icons/poprawna_odpowiedź_.svg'

const CustomInput = ({
  value,
  activeQuestion,
  questions,
  register,
  index,
  category,
  answerChecked,
  handleAnswerChange,
}: ICustomInput) => {
  return (
    <label className="question__answer">
      <input
        type="radio"
        name={`${activeQuestion}`}
        value={value}
        checked={answerChecked === `${value}`}
        ref={register({ required: true })}
        onChange={handleAnswerChange}
      />
      <div
        className={`custom__checkbox main-button__${category} `}
      >
      {questions[activeQuestion] && questions[activeQuestion].choices[index]}
      </div>
    </label>
  );
};

export default CustomInput;