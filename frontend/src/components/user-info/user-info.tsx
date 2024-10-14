import { users } from '../../mocks/users';
import cn from 'classnames';

type UserInfoProps = {
  userId: string;
};
function UserInfo({ userId }: UserInfoProps): JSX.Element {
  const user = users[Number(userId) - 1];
  const isDisabled = true;
  const isRoleCoach = false;
  const isFriend = false;
  const isCoach = false;
  const { trainingTypes, images, name, location, isReady, description, level } = user;
  const hashtags = [...trainingTypes, level];

  return (
    <div className="user-card__wrapper">
      <div className="user-card__content">
        <div className="user-card__head">
          <h2 className="user-card__title">{name}</h2>
        </div>
        <div className="user-card__label">
          <button
            className="btn-flat user-card__location"
            type="button"
            disabled={isDisabled}
          >
            <svg
              className="user-card__icon-location"
              width={12}
              height={14}
              aria-hidden="true"
            >
              <use xlinkHref="#icon-location" />
            </svg>
            <span>{location}</span>
          </button>
        </div>
        <div className="user-card__status-container">
          {isRoleCoach ? (
            <div className="user-card__role">
              <svg
                className="user-card__role-icon"
                width={12}
                height={13}
                aria-hidden="true"
              >
                <use xlinkHref="#icon-cup" />
              </svg>
              <span>Тренер</span>
            </div>
          ) : undefined}
          <div
            className={cn('user-card__status', {
              'user-card__status--active': isReady,
            })}
          >
            <span>
              {`${isReady ? 'Готов' : 'Не готов'} ${
                isRoleCoach ? 'тренировать' : 'к тренировке'
              }`}
            </span>
          </div>
        </div>
        <div className="user-card__text">
          <p>{description}</p>
        </div>
        {isRoleCoach ? (
          <button
            className="btn-flat user-card__sertificate"
            type="button"
            disabled={isDisabled}
          >
            <svg width={12} height={13} aria-hidden="true">
              <use xlinkHref="#icon-teacher" />
            </svg>
            <span>Посмотреть сертификаты</span>
          </button>
        ) : undefined}
        <ul className="user-card__hashtag-list">
          {hashtags.map((hashtag) => (
            <li className="user-card__hashtag-item" key={`hashtag-${hashtag}`}>
              <div className="hashtag">
                <span>#{hashtag}</span>
              </div>
            </li>
          ))}
        </ul>
        <button
          className={cn('btn user-card__btn', { 'btn--outlined': isFriend })}
          type="button"
          disabled={isCoach && !isFriend}
        >
          {isFriend ? 'Удалить из друзей' : 'Добавить в друзья'}
        </button>
      </div>
      {images && (
        <div className="user-card__gallary">
          <ul className="user-card__gallery-list">
            {images.map((image) => (
              <li className="user-card__gallery-item" key={image}>
                <img
                  src={image}
                  width={334}
                  height={573}
                  alt='Фото пользователя'
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default UserInfo;
