import { User } from '../../types/user';
import { AppRoute, } from '../../consts';
import { Link } from 'react-router-dom';

type UserCardProps = {
  user: User;
};

function UserCard({
  user,
}: UserCardProps): JSX.Element {
  const { id, trainingTypes, avatar, name, location } = user;

  const userLink = `${AppRoute.Users}/${id}`;

  return (
    <li className="look-for-company__item">
      <div className="thumbnail-user thumbnail-user--role-user thumbnail-user--dark">
        <div className="thumbnail-user__image">
          <picture>
            <img
              src={avatar}
              width={82}
              height={82}
              alt=""
            />
          </picture>
        </div>
        {/* <div class="thumbnail-user__top-status thumbnail-user__top-status--role-user">
            <svg width="12" height="12" aria-hidden="true">
              <use xlink:href="#icon-crown"></use>
            </svg>
          </div> */}
        <div className="thumbnail-user__header">
          <h3 className="thumbnail-user__name">{name}</h3>
          <div className="thumbnail-user__location">
            <svg width={14} height={16} aria-hidden="true">
              <use xlinkHref="#icon-location" />
            </svg>
            <address className="thumbnail-user__location-address">
              {location}
            </address>
          </div>
        </div>
        <ul className="thumbnail-user__hashtags-list">
          <li className="thumbnail-user__hashtags-item">
            <div className="hashtag thumbnail-user__hashtag">
              <span>#{trainingTypes}</span>
            </div>
          </li>
        </ul>
        <Link to={userLink}
          className="btn btn--outlined btn--dark-bg btn--medium thumbnail-user__button"
        >
          Подробнее
        </Link>
      </div>
    </li>
  );
}

export default UserCard;
