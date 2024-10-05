import { RadioInputType, RadioInputTypeDiffs } from './radio-input.const';
import { useState } from 'react';
import lodash from 'lodash';
import cn from 'classnames';

type RadioInputProps = {
  type: RadioInputType;
  styleClass?: string;
};

function RadioInput({ type, styleClass }: RadioInputProps): JSX.Element {
  const {
    optionsArray,
    fieldName,
    styleMode,
  } = RadioInputTypeDiffs[type];

  const [value, setValue] = useState('');

  return (
    <div
      className={cn('custom-toggle-radio', {
        [`${styleClass ?? ''}__radio`]: styleClass,
        styleMode,
      })}
    >
      {Object.values(optionsArray).map((option) => (
        <div className="custom-toggle-radio__block" key={`option-${option}`}>
          <label>
            <input
              type="radio"
              name={fieldName}
              value={value}
              checked={value === option}
              onChange={() => {
                setValue(option);
              }}
            />
            <span className="custom-toggle-radio__icon" />
            <span className="custom-toggle-radio__label">
              {lodash.capitalize(option)}
            </span>
          </label>
        </div>
      ))}
    </div>
  );
}

export default RadioInput;
