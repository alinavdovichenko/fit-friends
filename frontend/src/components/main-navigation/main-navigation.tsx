import { Link } from 'react-router-dom';
import { UserLinks } from './main-navigation.const';
import { NotificationsList } from '../index';
import cn from 'classnames';

function MainNavigation(): JSX.Element {

  const getMainLinks = () => {
    const list = UserLinks;
    return list.map((link) => (
      <li
        className="main-nav__item"
        key={`link-${link.Icon}`}
      >
        <Link
          to={link.Route}
          className={cn('main-nav__link', {
            'is-active': link.Icon === '#icon-friends',
          })}
          aria-label={link.Label}
        >
          <svg
            width={link.IconSize.Width}
            height={link.IconSize.Height}
            aria-hidden="true"
          >
            <use xlinkHref={link.Icon} />
          </svg>
        </Link>
      </li>
    ));
  };

  return (
    <nav className="main-nav">
      <ul className="main-nav__list">
        {getMainLinks()}
        <NotificationsList />
      </ul>
    </nav>
  );
}

export default MainNavigation;
