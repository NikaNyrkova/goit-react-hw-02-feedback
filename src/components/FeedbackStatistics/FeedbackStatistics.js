import React from 'react';
import st from './FeedbackStatistics.module.css'

const FeedbackStatistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <div>
            <p className={st.statistics_item}>Good: {good}</p>
            <p className={st.statistics_item}>Neutral: {neutral}</p>
            <p className={st.statistics_item}>Bad: {bad}</p>
            <p className={st.statistics_item}>Total: {total}</p>
            <p className={st.statistics_item}>Positive feedback: {positivePercentage}%</p>
        </div>
    )
};

export default FeedbackStatistics;

