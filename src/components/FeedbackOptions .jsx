import React from 'react';
import css from './Counter.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ul className={css.FeedbackOptions_buttonList}>
    {options.map(option => {
      return (
        <li className={css.FeedbackOptions_button_li}>
          <button
            className={css.FeedbackOptions_button}
            key={option}
            type="button"
            name={option}
            onClick={onLeaveFeedback}
          >
            {option}
          </button>
        </li>
      );
    })}
  </ul>
);

export default FeedbackOptions;


