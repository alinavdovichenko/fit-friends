import { ChangeEvent, useState } from 'react';
import { TextAreaInputType, TextAreaInputTypeDiffs } from './text-area-input.const';
import cn from 'classnames';

type TextAreaInputProps = {
  type: TextAreaInputType;
  originalValue?: string;
  isActive?: boolean;
};

function TextAreaInput({
  type,
  originalValue,
  isActive = true,
}: TextAreaInputProps): JSX.Element {
  const {
    styleClass,
    validationFunction,
    fieldName,
    labelText,
  } = TextAreaInputTypeDiffs[type];

  const [value, setValue] = useState('');
  const handleTextChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(evt.target.value);
  };

  return (
    <div
      className={cn('custom-textarea', styleClass ?? '', {
        'custom-textarea--readonly': !isActive,
      })}
    >
      <label>
        {labelText ? (
          <span className="custom-textarea__label">{labelText}</span>
        ) : undefined}
        <textarea
          name={fieldName}
          placeholder=" "
          value={isActive ? value : originalValue}
          onChange={handleTextChange}
        />
        <p className={!validationFunction(value) ? 'sign-in__error' : 'sign-in__success'}>
          {!validationFunction(value) ? 'Заполните поле' : 'Поле заполненно правильно!'}
        </p>
      </label>
    </div>
  );
}

export default TextAreaInput;
