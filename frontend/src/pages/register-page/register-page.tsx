import {Helmet} from 'react-helmet-async';
import { RegisterForm } from '../../components';

function RegisterPage(): JSX.Element {

  return (
    <div className="popup-form popup-form--sign-up">
      <Helmet>
        <title>Регистрация</title>
      </Helmet>
      <div className="popup-form__wrapper">
        <div className="popup-form__content">
          <div className="popup-form__title-wrapper">
            <h1 className="popup-form__title">Регистрация</h1>
          </div>
          <div className="popup-form__form">
            <RegisterForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
