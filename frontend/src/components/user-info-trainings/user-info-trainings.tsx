import { useEffect, useRef } from 'react';
import { SliderConfig, SlidesAmount } from '../../types/slider';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  getSubscriptionStatus,
  getUserId,
  getUserReadyStatus,
  getUserTrainings,
  isCoachInfoReady,
  isCoachTrainingsLoading,
  isUserAFriend,
  isUserCoach,
} from '../../store';
import {
  createTrainingRequestAction,
  getCoachDataAction,
  subscribeToCoachAction,
  unsubscribeFromCoachAction,
} from '../../store/api-actions';
import {
  TrainingCatalogCard,
  SliderButtons,
  ButtonsIconType,
  Preloader,
} from '../index';
import Slider from 'react-slick';

function UserInfoTrainings(): JSX.Element {
  const dispatch = useAppDispatch();
  const isCoach = useAppSelector(isUserCoach);
  const userId = useAppSelector(getUserId);
  const trainings = useAppSelector(getUserTrainings);
  const isReady = useAppSelector(getUserReadyStatus);
  const isFriend = useAppSelector(isUserAFriend);
  const subscriptionStatus = useAppSelector(getSubscriptionStatus);
  const isDataActual = useAppSelector(isCoachInfoReady);
  const isDataLoading = useAppSelector(isCoachTrainingsLoading);
  const sliderRef = useRef<Slider>(null);
  const settings = {
    ...SliderConfig,
    className: 'user-card__training-list',
    slidesToShow: SlidesAmount.CoachTrainings,
  };

  useEffect(() => {
    if (!isDataActual) {
      dispatch(getCoachDataAction());
    }
  }, [dispatch, isDataActual]);

  if (isDataLoading) {
    return <Preloader />;
  }

  const handleRequestButtonClick = () => {
    dispatch(createTrainingRequestAction(userId));
  };

  const handleSubscribeButtonClick = () => {
    if (subscriptionStatus) {
      dispatch(unsubscribeFromCoachAction(userId));
      return;
    }
    dispatch(subscribeToCoachAction(userId));
  };

  return (
    <div className="user-card__training">
      <div className="user-card__training-head">
        <h2 className="user-card__training-title">Тренировки</h2>
        <div className="user-card__training-bts">
          <SliderButtons
            sliderRef={sliderRef}
            slidesAmount={trainings.length}
            slidesToShow={SlidesAmount.CoachTrainings}
            styleClass="user-card__training-btn"
            iconType={ButtonsIconType.Small}
          />
        </div>
      </div>
      <Slider ref={sliderRef} {...settings}>
        {trainings.map((training) => (
          <TrainingCatalogCard
            training={training}
            styleClass="user-card__training-item"
            key={`training-${training.id}`}
          />
        ))}
      </Slider>
      <form className="user-card__training-form">
        {isReady && !isCoach && isFriend ? (
          <button
            className="btn user-card__btn-training"
            type="button"
            onClick={handleRequestButtonClick}
            data-testid="requestButton"
          >
            Хочу персональную тренировку
          </button>
        ) : undefined}
        {!isCoach ? (
          <div className="user-card__training-check">
            <div className="custom-toggle custom-toggle--checkbox">
              <label>
                <input
                  type="checkbox"
                  name="subscription"
                  checked={subscriptionStatus}
                  onChange={handleSubscribeButtonClick}
                />
                <span className="custom-toggle__icon">
                  <svg width={9} height={6} aria-hidden="true">
                    <use xlinkHref="#arrow-check" />
                  </svg>
                </span>
                <span className="custom-toggle__label">
                  Получать уведомление на почту о новой тренировке
                </span>
              </label>
            </div>
          </div>
        ) : undefined}
      </form>
    </div>
  );
}

export default UserInfoTrainings;
