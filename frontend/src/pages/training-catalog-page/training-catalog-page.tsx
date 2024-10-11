import { useNavigate } from 'react-router-dom';
import { AppRoute} from '../../consts';
import { TrainingsFilter, TrainingCatalogList } from '../../components';
import { TrainingsListType } from '../../components/training-catalog-list/training-catalog-list.const';

function TrainingCatalogPage(): JSX.Element {
  const navigate = useNavigate();
  return (
    <section className="inner-page">
      <div className="container">
        <div className="inner-page__wrapper">
          <h1 className="visually-hidden">Каталог тренировок</h1>
          <div className="gym-catalog-form">
            <h2 className="visually-hidden">Мои тренировки Фильтр</h2>
            <div className="gym-catalog-form__wrapper">
              <button
                className="btn-flat btn-flat--underlined gym-catalog-form__btnback"
                type="button"
                onClick={() => navigate(AppRoute.Main)}
              >
                <svg width={14} height={10} aria-hidden="true">
                  <use xlinkHref="#arrow-left" />
                </svg>
                <span>Назад</span>
              </button>
              <h3 className="gym-catalog-form__title">Фильтры</h3>
              < TrainingsFilter />
            </div>
          </div>
          <div className="training-catalog">
            <TrainingCatalogList type={TrainingsListType.TrainingsCatalog} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrainingCatalogPage;
