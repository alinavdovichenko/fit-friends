import { useState } from 'react';
import { SelectInputType, SelectInputTypeDiffs } from './select-input.const';
import cn from 'classnames';

type SelectInputProps = {
  type: SelectInputType;
  styleClass?: string;
  label?: string;
  isActive?: boolean;
};

function SelectInput({
  type,
  label,
  styleClass,
  isActive = true,
}: SelectInputProps): JSX.Element {
  const {
    optionsArray,
    labelText,
    labelFunction,
  } = SelectInputTypeDiffs[type];

  const [value, setValue] = useState('');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const getPlaceholder = () => {
    const text = value;
    return text ? (
      <div className="custom-select__placeholder">{labelFunction(text)}</div>
    ) : undefined;
  };

  return (
    <div
      className={cn('custom-select', {
        [`${styleClass ?? ''}__input`]: styleClass,
        'custom-select--not-selected': isActive && !value,
        'custom-select--readonly': !isActive,
        'is-open': isOpen,
      })}
    >
      <span className="custom-select__label">{label ?? labelText}</span>
      {getPlaceholder()}
      <button
        className="custom-select__button"
        type="button"
        aria-label="Выберите одну из опций"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="custom-select__text" />
        <span className="custom-select__icon">
          <svg width={15} height={6} aria-hidden="true">
            <use xlinkHref="#arrow-down" />
          </svg>
        </span>
      </button>
      <ul className="custom-select__list">
        {optionsArray.map((option) => (
          <li
            key={`option-${option}`}
            onClick={() => {
              setIsOpen(false);
              setValue(option);
            }}
            className="custom-select__item"
          >
            {labelFunction(option)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SelectInput;
