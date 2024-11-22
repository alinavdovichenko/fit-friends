import { Link } from 'react-router-dom';
import { users } from '../../mocks/users';
import { AppRoute } from '../../consts';

function Coach(): JSX.Element {
  const coach = users[1];

  return (
    <div className="training-info__coach">
      <div className="training-info__photo">
        <picture>
          <img
            src={coach.avatar}
            width={64}
            height={64}
            alt="Изображение тренера"
          />
        </picture>
      </div>
      <div className="training-info__coach-info">
        <span className="training-info__label">Тренер</span>
        <Link to={`${AppRoute.Users}/${coach ? coach.id : ''}`}>
          <span className="training-info__name">{coach ? coach.name : ''}</span>
        </Link>
      </div>
    </div>
  );
}

export default Coach;
