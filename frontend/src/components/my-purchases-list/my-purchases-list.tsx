
import { CatalogButtons, TrainingCatalogCard } from '../index';
import { myPurchases } from '../../mocks/my-purchases';

function MyPurchasesList(): JSX.Element {
  const onlyActive = true;

  if (!myPurchases.length) {
    return (
      <p className="empty-list-text">
        {onlyActive
          ? 'У вас нет активных купленных тренировок'
          : 'У вас нет купленных тренировок'}
      </p>
    );
  }

  return (
    <>
      <ul className="my-purchases__list">
        {myPurchases.map((myPurchase) => (
          <TrainingCatalogCard
            training={myPurchase.training}
            styleClass="my-purchases__item"
            key={`training-${myPurchase.training.id}`}
          />
        ))}
      </ul>
      <CatalogButtons styleClass="my-purchases__show-more" />
    </>
  );
}

export default MyPurchasesList;
