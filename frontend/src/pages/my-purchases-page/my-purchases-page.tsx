import { useNavigate } from 'react-router-dom';
import {Helmet} from 'react-helmet-async';
import { MyPurchasesList, MyPurchasesSorting } from '../../components';
import { AppRoute } from '../../consts';
function MyPurchasesPage(): JSX.Element {
  const navigate = useNavigate();

  return (
    <section className="my-purchases">
      <Helmet>
        <title>Мои покупки</title>
      </Helmet>
      <div className="container">
        <div className="my-purchases__wrapper">
          <button
            className="btn-flat my-purchases__back"
            type="button"
            onClick={() => navigate(AppRoute.Account)}
          >
            <svg width={14} height={10} aria-hidden="true">
              <use xlinkHref="#arrow-left" />
            </svg>
            <span>Назад</span>
          </button>
          <div className="my-purchases__title-wrapper">
            <h1 className="my-purchases__title">Мои покупки</h1>
            <MyPurchasesSorting />
          </div>
          <MyPurchasesList />
        </div>
      </div>
    </section>
  );
}

export default MyPurchasesPage;
