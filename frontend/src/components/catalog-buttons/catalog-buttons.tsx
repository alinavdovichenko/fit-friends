import cn from 'classnames';

export interface CatalogButtonsProps {
  styleClass: string;
}

function CatalogButtons({ styleClass }: CatalogButtonsProps) {
  const isAll = true;
  const isDisabled = true;

  return (
    <div className={cn('show-more', styleClass)}>
      <button
        className={cn('btn show-more__button show-more__button--more', {
          'show-more__button--not-active': isAll,
        })}
        type="button"
        disabled={isDisabled}
      >
        Показать еще
      </button>
      <button
        className={cn('btn show-more__button show-more__button--to-top', {
          'show-more__button--not-active': !isAll,
        })}
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        Вернуться в начало
      </button>
    </div>
  );
}

export default CatalogButtons;
