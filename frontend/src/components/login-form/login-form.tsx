import { User } from '../../types/user';
import { useState, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoute} from '../../consts';
import { validateEmail, validatePassword } from '../../utils/validation';

const validate = (formData: User): boolean => {
  if (!validateEmail(formData.email)) {
    return false;
  }

  if (!validatePassword(formData.password)) {
    return false;
  }

  return true;
};
function LoginForm(): JSX.Element {
  const navigate = useNavigate();
  const [isSubmitButtonOk, setIsSubmitButtonOk] = useState(false);
  const [formData, setFormData] = useState<User>({
    email: '',
    password: '',
  });

  const handleTextChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
    if (validate({ ...formData, [name]: value })) {
      setIsSubmitButtonOk(true);
    } else {
      setIsSubmitButtonOk(false);
    }
  };

  return (
    <form method="post" action="/">
      <div className="sign-in">
        <div className="custom-input sign-in__input">
          <label>
            <span className="custom-input__label">E-mail</span>
            <span className="custom-input__wrapper">
              <input
                onChange={handleTextChange}
                value={formData.email}
                type="email"
                name="email"
                required
              />
              <p className={!validateEmail(formData.email) ? 'sign-in__error' : 'sign-in__success'}>
                {!validateEmail(formData.email) ? 'Заполните поле' : 'Поле заполненно правильно!'}
              </p>
            </span>
          </label>
        </div>
        <div className="custom-input sign-in__input">
          <label>
            <span className="custom-input__label">Пароль</span>
            <span className="custom-input__wrapper">
              <input
                onChange={handleTextChange}
                value={formData.password}
                type="password"
                name="password"
                required
              />
              <p className={!validatePassword(formData.password) ? 'sign-in__error' : 'sign-in__success'}>
                {!validatePassword(formData.password) ? 'Заполните поле' : 'Поле заполненно правильно!'}
              </p>
            </span>
          </label>
        </div>
        <button
          className="btn sign-in__button"
          type="submit"
          disabled={!isSubmitButtonOk}
          onClick={() => navigate(AppRoute.Main)}
        >
          Продолжить
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
