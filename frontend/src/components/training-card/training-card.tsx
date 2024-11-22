
import { PopupKey } from '../../consts';
import {
  BuyForm,
  Popup,
  TrainingInput
} from '../../components';
import { TrainingInputType } from '../training-input/training-input.const';
import Coach from './coach';
import Rating from './rating';
import Hashtags from './hashtags';
import SpecialStatus from './special-status';
import cn from 'classnames';
function TrainingCard(): JSX.Element {
  const isEdited = true;
  const isCoach = true;
  const isBalanceActive = true;
  let activePopup = PopupKey.DefaultPopup;

  const handleBuyButtonClick = (): void => {
    activePopup = PopupKey.Buy;
    //dispatch(setBuyForm({ trainingId: trainingId, price: Number(price) }));
    //dispatch(setActivePopup(PopupKey.Buy));
    <Popup type={PopupKey.Buy} title="Купить тренировку" activePopup={activePopup}>
      <BuyForm />
    </Popup>;
  };
  const handleEditButtonClick = (
    evt: React.MouseEvent<HTMLButtonElement>,
  ): void => {
    evt.preventDefault();
    if (!isEdited) {
      return;
    }

  };

  return (
    <div
      className={cn('training-card', {
        'training-card--edit': isEdited,
      })}
    >
      <div className="training-info">
        <h2 className="visually-hidden">Информация о тренировке</h2>
        <div className="training-info__header">
          <Coach />
          {isCoach ? (
            <button
              className={cn(
                'btn-flat btn-flat--light training-info__edit training-info__edit--edit',
                { 'btn-flat--underlined': isEdited },
              )}
              type="button"
              aria-label={isEdited ? 'Сохранить' : 'Редактировать'}
              onClick={handleEditButtonClick}
            >
              <svg width="12" height="12" aria-hidden="true">
                <use xlinkHref="#icon-edit"></use>
              </svg>
              <span>{isEdited ? 'Сохранить' : 'Редактировать'}</span>
            </button>
          ) : undefined}
        </div>
        <div className="training-info__main-content">
          <form method="post">
            <div className="training-info__form-wrapper">
              <div className="training-info__info-wrapper">
                <TrainingInput
                  type={TrainingInputType.Title}
                  isActive={isEdited}
                />
                <TrainingInput
                  type={TrainingInputType.Description}
                  isActive={isEdited}
                />
              </div>
              <div className="training-info__rating-wrapper">
                <Rating />
                <Hashtags />
              </div>
              <div className="training-info__price-wrapper">
                <TrainingInput
                  type={TrainingInputType.Price}
                  isActive={isEdited}
                />
                {isEdited ? <SpecialStatus /> : undefined}
                {isCoach ? undefined : (
                  <button
                    className="btn training-info__buy"
                    type="button"
                    disabled={isBalanceActive}
                    onClick={handleBuyButtonClick}
                  >
                    Купить
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="training-video">
        <h2 className="training-video__title">Видео</h2>
        <div className="training-video__video">
          <div className="training-video__thumbnail">
            <picture>
              <source
                type="image/webp"
                srcSet="img/content/training-video/video-thumbnail.webp, img/content/training-video/video-thumbnail@2x.webp 2x"
              />
              <img
                src="img/content/training-video/video-thumbnail.png"
                srcSet="img/content/training-video/video-thumbnail@2x.png 2x"
                width={922}
                height={566}
                alt="Обложка видео"
              />
            </picture>
          </div>
          <button className="training-video__play-button btn-reset">
            <svg width={18} height={30} aria-hidden="true">
              <use xlinkHref="#icon-arrow" />
            </svg>
          </button>
        </div>
        <div className="training-video__buttons-wrapper">
          <button
            className="btn training-video__button training-video__button--start"
            type="button"
            disabled={isBalanceActive}
          >
            Приступить
          </button>
          <button
            className="btn training-video__button training-video__button--stop"
            type="button"
          >
            Закончить
          </button>
        </div>
      </div>
    </div>
  );
}

export default TrainingCard;
