function FeedbackOptions({ options, onLeaveFeedback }) {
  const [good, neutral, bad] = options;
  return (
    <ul>
      <li>
        <button
          className="btn"
          type="button"
          onClick={() => onLeaveFeedback(good)}
        >
          Good
        </button>
      </li>
      <li>
        <button
          className="btn"
          type="button"
          onClick={() => onLeaveFeedback(neutral)}
        >
          Neutral
        </button>
      </li>
      <li>
        <button
          className="btn"
          type="button"
          onClick={() => onLeaveFeedback(bad)}
        >
          Bad
        </button>
      </li>
    </ul>
  );
}

export default FeedbackOptions;
