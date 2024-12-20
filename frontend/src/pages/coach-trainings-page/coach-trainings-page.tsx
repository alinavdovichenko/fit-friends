import { useNavigate } from 'react-router-dom';
import {
  TrainingsFilter,
  TrainingsFilterType,
  TrainingCatalogList,
  TrainingsListType,
} from '../../components';
import { AppRoute, ListItemsPortion } from '../../consts';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import {
  isUserCoach,
  resetCatalogData,
  resetTrainingsFilters,
  setActiveRoute,
} from '../../store';

function CoachTrainingsPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isCoach = useAppSelector(isUserCoach);

  useEffect(() => {
    if (!isCoach) {
      navigate(AppRoute.Main);
      return;
    }
    dispatch(resetCatalogData(ListItemsPortion.CoachTrainings));
    dispatch(resetTrainingsFilters());
    dispatch(setActiveRoute(AppRoute.Balance));
  }, [navigate, dispatch, isCoach]);

  return (
    <section className="inner-page">
      <div className="container">
        <div className="inner-page__wrapper">
          <h1 className="visually-hidden">Мои тренировки</h1>
          <div className="my-training-form">
            <h2 className="visually-hidden">Мои тренировки Фильтр</h2>
            <div className="my-training-form__wrapper">
              <button
                className="btn-flat btn-flat--underlined my-training-form__btnback"
                type="button"
                onClick={() => navigate(AppRoute.Account)}
              >
                <svg width={14} height={10} aria-hidden="true">
                  <use xlinkHref="#arrow-left" />
                </svg>
                <span>Назад</span>
              </button>
              <h3 className="my-training-form__title">фильтры</h3>
              <TrainingsFilter type={TrainingsFilterType.CoachTrainings} />
            </div>
          </div>
          <div className="inner-page__content">
            <div className="my-trainings">
              <TrainingCatalogList type={TrainingsListType.CoachTrainings} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CoachTrainingsPage;
