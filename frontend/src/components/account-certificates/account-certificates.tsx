import { useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { uploadCertificateAction } from '../../store/api-actions';
import { getUserDataCertificates } from '../../store';
import { CertificateCard, SliderButtons } from '../index';
import { SliderConfig, SlidesAmount } from '../../types/slider';
import Slider from 'react-slick';

function AccountCertificates(): JSX.Element {
  const dispatch = useAppDispatch();
  const certificates = useAppSelector(getUserDataCertificates);
  const settings = {
    ...SliderConfig,
    className: 'personal-account-coach__list',
    slidesToShow: SlidesAmount.AccountCertificates,
  };
  const sliderRef = useRef<Slider>(null);

  const fileInput = useRef<HTMLInputElement>(null);
  const [editedCertificate, setEdited] = useState<null | string>(null);

  function handleFileUpload(evt: React.ChangeEvent<HTMLInputElement>) {
    evt.preventDefault();
    if (!evt.target.files) {
      return;
    }
    dispatch(uploadCertificateAction(evt.target.files[0]));
  }

  return (
    <>
      <div className="personal-account-coach__label-wrapper">
        <h2 className="personal-account-coach__label">Дипломы и сертификаты</h2>
        <input
          className="visually-hidden"
          type="file"
          accept="application/pdf"
          ref={fileInput}
          onChange={handleFileUpload}
        />
        <button
          className="btn-flat btn-flat--underlined personal-account-coach__button"
          type="button"
          onClick={() => fileInput.current?.click()}
        >
          <svg width={14} height={14} aria-hidden="true">
            <use xlinkHref="#icon-import" />
          </svg>
          <span>Загрузить</span>
        </button>
        <div className="personal-account-coach__controls">
          <SliderButtons
            sliderRef={sliderRef}
            slidesAmount={certificates.length}
            slidesToShow={SlidesAmount.AccountCertificates}
            styleClass="personal-account-coach__control"
          />
        </div>
      </div>
      <Slider ref={sliderRef} {...settings}>
        {certificates.map((certificate) => (
          <div
            className="personal-account-coach__item"
            key={`pdf-${certificate.hashName}`}
          >
            <CertificateCard
              certificate={certificate}
              isActive={editedCertificate === certificate.id}
              setActive={setEdited}
            />
          </div>
        ))}
      </Slider>
    </>
  );
}

export default AccountCertificates;

