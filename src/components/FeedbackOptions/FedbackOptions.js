import React from 'react';

import st from './FeedbackOptions.module.css';


const FeedbackOptions = ( {onLiveFeedback, options} ) => (
    <div className={st.feedback_options}>
        {options.map((option, index) => (
            <button
                type='button'
                className={st.feedback_button}
                id={index}
                name={option}
                onClick={(e) => onLiveFeedback(e.target.name)}
            >
                {option}
            </button>
        ))}
    </div>
)

export default FeedbackOptions;

