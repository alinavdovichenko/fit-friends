import { useState, ChangeEvent } from 'react';
import { CustomInputType, CustomInputTypeDiffs } from './cuctom-input.const';

type CustomInputProps = {
  type: CustomInputType;
};

function CustomInput({
  type,
}: CustomInputProps): JSX.Element {
  const {labelText, fieldName, fieldType, validationFunction} = CustomInputTypeDiffs[type];

  const [value, setValue] = useState('');
  const handleTextChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setValue(evt.target.value);
  };

  return (
    <div className="custom-input">
      <label>
        <span className="custom-input__label">{labelText}</span>
        <span className="custom-input__wrapper">
          <input
            onChange={handleTextChange}
            value={value}
            type={fieldType}
            name={fieldName}
          />
          <p className={!validationFunction(value) ? 'sign-in__error' : 'sign-in__success'}>
            {!validationFunction(value) ? 'Заполните поле' : 'Поле заполненно правильно!'}
          </p>
        </span>
      </label>
    </div>
  );
}

export default CustomInput;
