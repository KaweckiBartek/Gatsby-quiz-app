import React from 'react';
import { ICustomInput } from '../../types';
import goodAnswearIcon from '../../images/icons/poprawna_odpowiedź_.svg'

const CustomInput = ({
  value,
  activeQuestion,
  questions,
  register,
  index,
  category
}: ICustomInput) => {
  return (
    <label className="question__answer">
      <input
        type="radio"
        name={`${activeQuestion}`}
        value={value}
        ref={register({ required: true })}
      />
      <div className={`custom__checkbox start__button__${category} `} >
      {questions[activeQuestion] && questions[activeQuestion].choices[index]}
      </div>
    </label>
  );
};

export default CustomInput;