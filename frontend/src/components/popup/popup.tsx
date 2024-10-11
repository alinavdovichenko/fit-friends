import { useCallback, useEffect } from 'react';
import { PopupKey } from '../../consts';
import FocusLock from 'react-focus-lock';
import cn from 'classnames';

type PopupProps = {
  type: PopupKey;
  title: string;
  children: JSX.Element;
  extraLabel?: string;
  activePopup: PopupKey;
};

function Popup({ type, title, children, extraLabel, activePopup }: PopupProps): JSX.Element {
  const isActive = activePopup === type;
  // const activePopup = useAppSelector(getActivePopup);
  const handleKeydownEvent = useCallback(
    (evt: KeyboardEvent) => {
      if (evt.key === 'Escape') {
        activePopup = PopupKey.DefaultPopup;
      }
    },
    [activePopup],
  );

  useEffect(() => {
    if (isActive) {
      window.scrollTo({ top: 0 });
      document.body.classList.add('with-popup');
      document.addEventListener('keydown', handleKeydownEvent);
      return;
    }
    document.body.classList.remove('with-popup');
    document.removeEventListener('keydown', handleKeydownEvent);
  }, [handleKeydownEvent, isActive]);

  return (
    <FocusLock disabled={!isActive}>
      <div
        className={cn('popup-form', {
          'popup-form--active': isActive,
          'visually-hidden': !isActive,
        })}
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
