import { useState, ChangeEvent } from 'react';
import { validateBirthDay } from '../../utils/validation';
import dayjs from 'dayjs';

const DATA_FORMAT = 'YYYY-MM-DD';

function BirthDayInput(): JSX.Element {
  const [value, setValue] = useState('');
  const handleTextChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setValue(evt.target.value);
  };

  return (
    <div className="custom-input">
      <label>
        <span className="custom-input__label">Дата рождения</span>
        <span className="custom-input__wrapper">
          <input
            onChange={handleTextChange}
            type="date"
            name="birthday"
            value={
              value ? String(dayjs(value).format(DATA_FORMAT)) : ''
            }
            max="2099-12-31"
          />
          {!validateBirthDay(value) && (
            <span className="custom-input__error">validateBirthDay(value)</span>
          )}
        </span>
      </label>
    </div>
  );
}

export default BirthDayInput;
