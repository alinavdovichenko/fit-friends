import {Helmet} from 'react-helmet-async';
import { QuestionaryForm } from '../../components';

function QuestionaryUserPage(): JSX.Element {

  return (
    <div className="popup-form popup-form--questionnaire-user">
      <Helmet>
        <title>Опросник</title>
      </Helmet>
      <div className="popup-form__wrapper">
        <div className="popup-form__content">
          <div className="popup-form__form">
            <QuestionaryForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionaryUserPage;
