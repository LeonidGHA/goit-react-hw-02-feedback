import Notiflix from 'notiflix';
function Notification({ title }) {
  Notiflix.Report.failure(
    'There is no feedback',
    'please leave vote',
    'confirm'
  );
  return <p>{title}</p>;
}

export default Notification;
