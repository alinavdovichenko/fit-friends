import { useRef } from 'react';
import { SliderButtons, UserCard } from '../index';
import { SliderConfig, SlidesAmount } from '../../types/slider';
import Slider from 'react-slick';
import { users } from '../../mocks/users';
function LookForCompany(): JSX.Element {
  const sliderRef = useRef<Slider>(null);
  const settings = {
    ...SliderConfig,
    className: 'look-for-company__list',
    slidesToShow: SlidesAmount.LookForCompany,
  };
  const isDisabled = true;
  return (
    <section className="look-for-company">
      <div className="container">
        <div className="look-for-company__wrapper">
          <div className="look-for-company__title-wrapper">
            <h2 className="look-for-company__title">
              Ищут компанию для тренировки
            </h2>
            <button
              className="btn-flat btn-flat--light look-for-company__button"
              type="button"
              disabled={isDisabled}
            >
              <span>Смотреть все</span>
              <svg width={14} height={10} aria-hidden="true">
                <use xlinkHref="#arrow-right" />
              </svg>
            </button>
            <div className="look-for-company__controls">
              <SliderButtons
                sliderRef={sliderRef}
                slidesAmount={users.length}
                slidesToShow={SlidesAmount.LookForCompany}
                styleClass="look-for-company__control btn-icon--outlined"
              />
            </div>
          </div>
          <Slider ref={sliderRef} {...settings}>
            {users.map((user) => (
              <UserCard
                user={user}
                key={`user-${user.id}`}
              />
            ))}
          </Slider>
        </div>
      </div>
    </section>

  );
}

export default LookForCompany;
