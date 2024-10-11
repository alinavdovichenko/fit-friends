import { TextAreaInputType } from '../text-area-input/text-area-input.const';
import { TextAreaInput } from '../index';
import { RatingValue } from '../../consts';

const Ratings = Array.from({
  length: RatingValue.Max - RatingValue.Min + 1,
}).map((_, index) => index + RatingValue.Min);

function FeedbackForm(): JSX.Element {

  return (
    <div className="popup__content popup__content--feedback">
      <h3 className="popup__feedback-title">Оцените тренировку</h3>
      <ul className="popup__rate-list">
        {Ratings.map((value) => (
          <li className="popup__rate-item" key={`rating-${value}`}>
            <div className="popup__rate-item-wrap">
              <label>
                <input
                  type="radio"
                  name="оценка тренировки"
                  aria-label={`оценка ${value}`}
                  value={value}
                />
                <span className="popup__rate-number">{value}</span>
              </label>
            </div>
          </li>
        ))}
      </ul>
      <div className="popup__feedback">
        <h3 className="popup__feedback-title popup__feedback-title--text">
          Поделитесь своими впечатлениями о тренировке
        </h3>
        <div className="popup__feedback-textarea">
          <TextAreaInput type={TextAreaInputType.FeedbackText} />
        </div>
      </div>
      <div className="popup__button">
        <button
          className="btn"
          type="button"
        >
          Продолжить
        </button>
      </div>
    </div>
  );
}

export default FeedbackForm;
