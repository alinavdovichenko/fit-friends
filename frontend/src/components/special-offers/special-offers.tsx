import Slider from 'react-slick';
import { useRef } from 'react';
import { SliderConfig, SlidesAmount } from '../../types/slider';
import { SliderDots, SpecialOffersCard } from '../index';
import { specialTrainings } from '../../mocks/training';
function SpecialOffers(): JSX.Element {
  const sliderRef = useRef<Slider>(null);
  const settings = {
    ...SliderConfig,
    className: 'special-offers__list',
    slidesToShow: SlidesAmount.SpecialOffers,
  };
  return (
    <section className="special-offers">
      <div className="container">
        <div className="special-offers__wrapper">
          <h2 className="visually-hidden">Специальные предложения</h2>
          <div className="special-offers__slider">
            <Slider ref={sliderRef} {...settings}>
              {specialTrainings.map((specialTraining) => (
                <SpecialOffersCard
                  training={specialTraining}
                  key={`special-${specialTraining.id}`}
                />
              ))}
            </Slider>
            <SliderDots
              sliderRef={sliderRef}
              slidesAmount={specialTrainings.length}
              styleClass="special-offers"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SpecialOffers;
