import { useAppSelector } from '../../hooks';
import { isCurrentTrainingActive, isUserCoach } from '../../store';
import cn from 'classnames';

type PlayButtonProps = {
  onClick: () => void;
};

function PlayButton({ onClick }: PlayButtonProps): JSX.Element {
  const isCoach = useAppSelector(isUserCoach);
  const isWorkoutActive = useAppSelector(isCurrentTrainingActive);

  return (
    <button
      className={cn('training-video__play-button btn-reset', {
        'is-disabled': !isWorkoutActive && !isCoach,
      })}
      onClick={onClick}
      disabled={!isWorkoutActive && !isCoach}
    >
      <svg width={18} height={30} aria-hidden="true">
        <use xlinkHref="#icon-arrow" />
      </svg>
    </button>
  );
}

export default PlayButton;
