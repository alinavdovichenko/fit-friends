import {
  AvatarInput,
  CustomInput,
  BirthDayInput,
  SelectInput
} from '../../components';
import { FormEvent, useState } from 'react';
import { CustomInputType } from '../custom-input/cuctom-input.const';
import { SelectInputType } from '../select-input/select-input.const';
function RegisterForm(): JSX.Element {
  const [isAgree, setAgreement] = useState(true);
  const [file, setFile] = useState<Blob | null>(null);

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();
    console.log(file);
  };

  return (
    <form method="post" onSubmit={handleFormSubmit}>
      <div className="sign-up">
        <div className="sign-up__load-photo">
          <AvatarInput setFile={setFile}/>
          <div className="sign-up__description">
            <h2 className="sign-up__legend">Загрузите фото профиля</h2>
            <span className="sign-up__text">
              JPG, PNG, оптимальный размер 100×100&nbsp;px
            </span>
          </div>
        </div>
        <div className="sign-up__data">
          <CustomInput type={CustomInputType.Name} />
          <CustomInput type={CustomInputType.Email} />
          <BirthDayInput />
          <div className="custom-select custom-select--not-selected">
            <span className="custom-select__label">Ваша локация</span>
            <button
              className="custom-select__button"
              type="button"
              aria-label="Выберите одну из опций"
            >
              <span className="custom-select__text" />
              <span className="custom-select__icon">
                <svg width={15} height={6} aria-hidden="true">
                  <use xlinkHref="#arrow-down" />
                </svg>
              </span>
            </button>
            <ul className="custom-select__list" role="listbox"></ul>
          </div>
          <CustomInput type={CustomInputType.Password} />
          <div className="sign-up__radio">
            <span className="sign-up__label">Пол</span>
            <div className="custom-toggle-radio custom-toggle-radio--big">
              <div className="custom-toggle-radio__block">
                <label>
                  <input type="radio" name="sex" />
                  <span className="custom-toggle-radio__icon" />
                  <span className="custom-toggle-radio__label">Мужской</span>
                </label>
              </div>
              <div className="custom-toggle-radio__block">
                <label>
                  <input type="radio" name="sex" />
                  <span className="custom-toggle-radio__icon" />
                  <span className="custom-toggle-radio__label">Женский</span>
                </label>
              </div>
              <div className="custom-toggle-radio__block">
                <label>
                  <input type="radio" name="sex" />
                  <span className="custom-toggle-radio__icon" />
                  <span className="custom-toggle-radio__label">Неважно</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="sign-up__role">
          <h2 className="sign-up__legend">Выберите роль</h2>
          <div className="role-selector sign-up__role-selector">
            <div className="role-btn">
              <label>
                <input
                  className="visually-hidden"
                  type="radio"
                  name="role"
                  defaultValue="coach"
                />
                <span className="role-btn__icon">
                  <svg width={12} height={13} aria-hidden="true">
                    <use xlinkHref="#icon-cup" />
                  </svg>
                </span>
                <span className="role-btn__btn">Я хочу тренировать</span>
              </label>
            </div>
            <div className="role-btn">
              <label>
                <input
                  className="visually-hidden"
                  type="radio"
                  name="role"
                  defaultValue="sportsman"
                />
                <span className="role-btn__icon">
                  <svg width={12} height={13} aria-hidden="true">
                    <use xlinkHref="#icon-weight" />
                  </svg>
                </span>
                <span className="role-btn__btn">Я хочу тренироваться</span>
              </label>
            </div>
          </div>
        </div>
        <div className="sign-up__checkbox">
          <label>
            <input
              type="checkbox"
              defaultValue="user-agreement"
              name="user-agreement"
              checked={isAgree}
              onChange={() => {
                setAgreement(!isAgree);
              }}
            />
            <span className="sign-up__checkbox-icon">
              <svg width={9} height={6} aria-hidden="true">
                <use xlinkHref="#arrow-check" />
              </svg>
            </span>
            <span className="sign-up__checkbox-label">
              Я соглашаюсь с <span>политикой конфиденциальности</span> компании
            </span>
          </label>
        </div>
        <button className="btn sign-up__button" type="submit" disabled={!isAgree}>
          Продолжить
        </button>
      </div>
    </form>
  );
}

export default RegisterForm;
