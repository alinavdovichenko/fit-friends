import { UserRole, UserStatus } from '../../consts';
import cn from 'classnames';

type ActivityBarProp = {
  userId: string;
  userRole: UserRole;
  isReady: boolean;
};

function ActivityBar({
  userId,
  userRole,
  isReady,
}: ActivityBarProp): JSX.Element {
  const isCoach = true;

  return (
    <div className="thumbnail-friend__activity-bar">
      <div
        className={cn('thumbnail-friend__ready-status', {
          'thumbnail-friend__ready-status--is-ready': isReady,
          'thumbnail-friend__ready-status--is-not-ready': !isReady,
        })}
      >
        <span>{isReady ? UserStatus.Ready : UserStatus.NotReady}</span>
      </div>
      {!isCoach && isReady ? (
        <button
          className={cn('thumbnail-friend__invite-button', {
            'thumbnail-friend__invite-button--coach':
              userRole === UserRole.Coach,
          })}
          type="button"
          onClick={() => {
            console.log(userId);
          }}
        >
          <svg width="43" height="46" aria-hidden="true" focusable="false">
            <use xlinkHref="#icon-invite"></use>
          </svg>
          <span className="visually-hidden">
            Пригласить друга на совместную тренировку
          </span>
        </button>
      ) : undefined}
    </div>
  );
}

export default ActivityBar;
