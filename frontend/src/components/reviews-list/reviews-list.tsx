import { ReviewCard } from '../index';
import { reviews } from '../../mocks/reviews';

function ReviewsList(): JSX.Element {

  return (
    <div className="reviews-side-bar__container">
      {reviews.length ? (
        <ul className="reviews-side-bar__list">
          {reviews.map((review) => (
            <ReviewCard review={review} key={`review-${review.id}`} />
          ))}
        </ul>
      ) : (
        <p>Отзывов пока нет. Желаете быть первым?</p>
      )}
    </div>
  );
}

export default ReviewsList;
