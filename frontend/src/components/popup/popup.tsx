
import { PopupKey } from '../../consts';
import FocusLock from 'react-focus-lock';
import cn from 'classnames';

type PopupProps = {
  type: PopupKey;
  title: string;
  children: JSX.Element;
  extraLabel?: string;
};

function Popup({ type, title, children, extraLabel }: PopupProps): JSX.Element {
  const isActive = type;

  return (
    <FocusLock disabled={!isActive}>
      <div
        className={cn('popup-form', {
          'popup-form--active': isActive,
          'visually-hidden': !isActive,
        })}
        data-testid="popup"
      >
        <section className="popup">
          <div className="popup__wrapper">
            <div className="popup-head">
              <h2 className="popup-head__header">{title}</h2>
              {extraLabel ? (
                <p className="popup-head__extra-label">
                  <svg
                    className="popup-head__icon-location"
                    width="12"
                    height="14"
                    aria-hidden="true"
                  >
                    <use xlinkHref="#icon-location"></use>
                  </svg>
                  <span>{extraLabel}</span>
                </p>
              ) : undefined}
              <button
                className="btn-icon btn-icon--outlined btn-icon--big"
                type="button"
                aria-label="close"
                data-testid="closeButton"
              >
                <svg width="20" height="20" aria-hidden="true">
                  <use xlinkHref="#icon-cross"></use>
                </svg>
              </button>
            </div>
            {children}
          </div>
        </section>
      </div>
    </FocusLock>
  );
}

export default Popup;
