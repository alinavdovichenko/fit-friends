import { useNavigate } from 'react-router-dom';
import {Helmet} from 'react-helmet-async';
import { AppRoute, PopupKey } from '../../consts';
import {
  FeedbackForm,
  ReviewsList,
  BuyForm,
  Popup,
  TrainingCard,
} from '../../components';

function TrainingPage(): JSX.Element {
  const navigate = useNavigate();
  //const { trainingId } = useParams();
  let activePopup = PopupKey.DefaultPopup;

  const handleAddReviewButtonClick = () => {
    activePopup = PopupKey.Feedback;
    //dispatch(setReviewForm(trainingId as string));
    //dispatch(setActivePopup(PopupKey.Feedback));
  };

  return (
    <section className="inner-page">
      <Helmet>
        <title>Карточка тренировки</title>
      </Helmet>
      <div className="container">
        <div className="inner-page__wrapper">
          <h1 className="visually-hidden">Карточка тренировки</h1>
          <aside className="reviews-side-bar">
            <button
              className="btn-flat btn-flat--underlined reviews-side-bar__back"
              type="button"
              onClick={() => navigate(AppRoute.TrainingCatalog)}
            >
              <svg width={14} height={10} aria-hidden="true">
                <use xlinkHref="#arrow-left" />
              </svg>
              <span>Назад</span>
            </button>
            <h2 className="reviews-side-bar__title">Отзывы</h2>
            <ReviewsList />
            <button
              className="btn btn--medium reviews-side-bar__button"
              type="button"
              onClick={handleAddReviewButtonClick}
            >
              Оставить отзыв
            </button>
          </aside>
          <TrainingCard />
        </div>
      </div>
      <Popup type={PopupKey.Feedback} title="Оставить отзыв" activePopup={activePopup}>
        <FeedbackForm />
      </Popup>
      <Popup type={PopupKey.Buy} title="Купить тренировку" activePopup={activePopup}>
        <BuyForm />
      </Popup>
    </section>
  );
}

export default TrainingPage;
