import {Helmet} from 'react-helmet-async';
import { LoginForm } from '../../components';

function LoginPage(): JSX.Element {
  return (
    <div className="popup-form popup-form--sign-in">
      <Helmet>
        <title>Вход</title>
      </Helmet>
      <div className="popup-form__wrapper">
        <div className="popup-form__content">
          <div className="popup-form__title-wrapper">
            <h1 className="popup-form__title">Вход</h1>
          </div>
          <div className="popup-form__form">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
