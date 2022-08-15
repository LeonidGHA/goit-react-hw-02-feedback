function FeedbackStatistics({
  good,
  neutral,
  bad,
  totalValue,
  positivePersentage,
}) {
  // if (totalValue === 0) {
  //   Notiflix.Report.failure(
  //     'There is no feedback',
  //     'please leave vote',
  //     'confirm'
  //   );
  //   return <p>There is no feedback</p>;
  // }

  return (
    <ul>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {totalValue}</li>
      <li>Positive feedback: {positivePersentage} %</li>
    </ul>
  );
}

export default FeedbackStatistics;
