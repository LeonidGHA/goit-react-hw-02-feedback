import css from './Feedback.module.css';
import PropTypes from 'prop-types';

function FeedbackSection({ title, children }) {
  return (
    <section>
      <h1 className={css.title}>{title}</h1>
      {children}
    </section>
  );
}

FeedbackSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};

export default FeedbackSection;