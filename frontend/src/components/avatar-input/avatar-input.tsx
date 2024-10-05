import { useRef } from 'react';
import { AvatarMaxSize } from '../../consts';

type AvatarInputProps = {
  setFile: (file: File | null) => void;
};

function AvatarInput({
  setFile,
}: AvatarInputProps): JSX.Element {

  const isActive = false;
  const fileInput = useRef<HTMLInputElement>(null);

  function handleFileChange(evt: React.ChangeEvent<HTMLInputElement>) {
    if (!evt.target.files) {
      setFile(null);
      return;
    }
    const file = evt.target.files[0];

    if (file.size > AvatarMaxSize.ToCheck) {
      return `Максимально допустимый размер файла ${AvatarMaxSize.ForHuman}`;
    }
    setFile(file);
  }

  function handleDeleteButtonClick() {
    setFile(null);
  }

  return (
    <>
      <div className="input-load-avatar">
        <label>
          <input
            className="visually-hidden"
            type="file"
            accept="image/png, image/jpeg"
            required
            ref={fileInput}
            onChange={handleFileChange}
            data-testid="fileInput"
          />
          <span className="input-load-avatar__btn">
            <svg width={20} height={20} aria-hidden="true">
              <use xlinkHref="#icon-import" />
            </svg>
          </span>
        </label>
      </div>
      {isActive ? (
        <div className="user-info-edit__controls">
          <button
            className="user-info-edit__control-btn"
            aria-label="обновить"
            onClick={() => fileInput.current?.click()}
            data-testid="changeButton"
          >
            <svg width={16} height={16} aria-hidden="true">
              <use xlinkHref="#icon-change" />
            </svg>
          </button>
          <button
            className="user-info-edit__control-btn"
            aria-label="удалить"
            onClick={handleDeleteButtonClick}
            data-testid="deleteButton"
          >
            <svg width={14} height={16} aria-hidden="true">
              <use xlinkHref="#icon-trash" />
            </svg>
          </button>
        </div>
      ) : undefined}
    </>
  );
}

export default AvatarInput;
