import { Link } from 'react-router-dom';
import { Training, OrdersInfo } from '../../types';
import { AppRoute, STATIC_URL } from '../../consts';
import { TrainingOrders } from '../index';

type PopularTrainingsCardProps = {
  training: Training;
  styleClass: string;
  withButtons?: boolean;
  ordersInfo?: OrdersInfo;
};

function PopularTrainingsCard({
  training,
  styleClass,
  withButtons = false,
  ordersInfo,
}: PopularTrainingsCardProps): JSX.Element {
  const {
    id,
    title,
    backgroundImage,
    type: trainingType,
    price,
    calories,
    description,
    rating,
  } = training;

  const link = `${AppRoute.Trainings}/${id}`;

  return (
    <li className={styleClass}>
      <div className="thumbnail-training">
        <div className="thumbnail-training__inner">
          <div className="thumbnail-training__image">
            <picture>
              <img
                src={`${STATIC_URL}/${backgroundImage}`}
                width={330}
                height={190}
                alt="Фотография тренировки"
              />
            </picture>
          </div>
          <p className="thumbnail-training__price">
            {price !== 0 ? (
              <>
                <span className="thumbnail-training__price-value">{price}</span>
                <span>₽</span>
              </>
            ) : (
              'Бесплатно'
            )}
          </p>
          <h3 className="thumbnail-training__title">{title}</h3>
          <div className="thumbnail-training__info">
            <ul className="thumbnail-training__hashtags-list">
              <li className="thumbnail-training__hashtags-item">
                <div className="hashtag thumbnail-training__hashtag">
                  <span>#{trainingType}</span>
                </div>
              </li>
              <li className="thumbnail-training__hashtags-item">
                <div className="hashtag thumbnail-training__hashtag">
                  <span>#{calories}ккал</span>
                </div>
              </li>
            </ul>
            <div className="thumbnail-training__rate">
              <svg width={16} height={16} aria-hidden="true">
                <use xlinkHref="#icon-star" />
              </svg>
              <span className="thumbnail-training__rate-value">{rating}</span>
            </div>
          </div>
          <div className="thumbnail-training__text-wrapper">
            <p className="thumbnail-training__text">{description}</p>
          </div>
          {withButtons ? (
            <div className="thumbnail-training__button-wrapper">
              <Link
                to={link}
                className="btn btn--small thumbnail-training__button-catalog"
              >
                Подробнее
              </Link>
              <Link
                to={link}
                className="btn btn--small btn--outlined thumbnail-training__button-catalog"
              >
                Отзывы
              </Link>
            </div>
          ) : (
            <Link
              to={link}
              className="btn-flat btn-flat--underlined thumbnail-training__button-orders"
            >
              <svg width="18" height="18" aria-hidden="true">
                <use xlinkHref="#icon-info"></use>
              </svg>
              <span>Подробнее</span>
            </Link>
          )}
        </div>
        {ordersInfo ? (
          <TrainingOrders count={ordersInfo.count} sum={ordersInfo.sum} />
        ) : undefined}
      </div>
    </li>
  );
}

export default PopularTrainingsCard;
