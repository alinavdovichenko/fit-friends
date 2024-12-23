import { SALE_PERCENT } from '../../consts';

function SpecialStatus(): JSX.Element {
  const status = true;

  return (
    <button
      className="btn-flat btn-flat--light btn-flat--underlined training-info__discount"
      type="button"
      onClick={() => {}}
    >
      <svg width="14" height="14" aria-hidden="true">
        <use xlinkHref="#icon-discount"></use>
      </svg>
      <span>{status ? 'Отменить скидку' : `Сделать скидку ${SALE_PERCENT}%`}</span>
    </button>
  );
}

export default SpecialStatus;
