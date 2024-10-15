import { useNavigate, useParams } from 'react-router-dom';
import {Helmet} from 'react-helmet-async';
import { UserInfo } from '../../components';
import { AppRoute } from '../../consts';
import { NotFoundPage } from '../../pages';

function UserPage(): JSX.Element {
  const navigate = useNavigate();
  const { userId } = useParams();

  if (!userId) {
    return <NotFoundPage />;
  }

  return (
    <div className="inner-page inner-page--no-sidebar">
      <Helmet>
        <title>Карточка пользователя</title>
      </Helmet>
      <div className="container">
        <div className="inner-page__wrapper">
          <button
            className="btn-flat inner-page__back"
            type="button"
            onClick={() => navigate(AppRoute.Main)}
          >
            <svg width={14} height={10} aria-hidden="true">
              <use xlinkHref="#arrow-left" />
            </svg>
            <span>Назад</span>
          </button>
          <div className="inner-page__content">
            <section className="user-card">
              <h1 className="visually-hidden">Карточка пользователя</h1>
              <UserInfo userId={userId} />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserPage;
