import { CatalogButtons, TrainingCatalogCard } from '../index';
import { trainingCards } from '../../mocks/training-card';
import { TrainingsListType, TrainingsListTypeDiffs } from './training-catalog-list.const';

type TrainingCatalogListProps = {
  type: TrainingsListType;
};

function TrainingCatalogList({ type }: TrainingCatalogListProps): JSX.Element {
  const { styleClass, cardStyleClass } = TrainingsListTypeDiffs[type];

  if (!trainingCards.length) {
    return (
      <p className="empty-list-text">
        Тренировок с выбранными характеристиками не найдено
      </p>
    );
  }

  return (
    <>
      <ul className={`${styleClass}__list`}>
        {trainingCards.map((training) => (
          <TrainingCatalogCard
            styleClass={cardStyleClass}
            training={training}
            key={`training-${training.id}`}
          />
        ))}
      </ul>
      <CatalogButtons styleClass={`${styleClass}__show-more`} />
    </>
  );
}

export default TrainingCatalogList;
