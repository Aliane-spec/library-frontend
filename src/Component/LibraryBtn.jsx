function LibraryBtn({ buttonLabel, onClickButton }) {
  return (
    <div>
      <button type="button" onClick={onClickButton}>
        {buttonLabel}
      </button>
    </div>
  );
}

export default LibraryBtn;