export const FeedBackButtons = ({
  onGoodBtnClick,
  onBadBtnClick,
  onNeutralBtnClick,
}) => {
  return (
    <div>
      <ul>
        <li>
          <button value="good" onClick={onGoodBtnClick}>
            Good
          </button>
        </li>
        <li>
          <button onClick={onNeutralBtnClick} value="neutral">
            Neutral
          </button>
        </li>
        <li>
          <button onClick={onBadBtnClick} value="bad">
            Bad
          </button>
        </li>
      </ul>
    </div>
  );
};
