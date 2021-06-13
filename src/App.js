import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Section from './components/Section/Section';
import FeedbackOptions from './components/FeedbackOptions';
import FeedbackStatistics from './components/FeedbackStatistics';
import Notification from './components/Notification';


class App extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  static propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  };
  
  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad
  };

  onLiveFeedback = (name) => {
    this.setState((prev) => ({
      [name]: prev[name] + 1
    }));
  };

  getTotal = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  getPositivePercentage = () => {
    const { good } = this.state;
    return good
      ? Math.ceil((good / this.getTotal()) * 100)
      : '0';
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.getTotal();
    const options = Object.keys(this.state);

    return (
      <div className="App">
        <Section title="Please leave feedback">
          <FeedbackOptions
            onLiveFeedback={this.onLiveFeedback}
            options={options}
          />
        </Section>
        {total
          ? <Section title="Statistics">
              <FeedbackStatistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positivePercentage={this.getPositivePercentage()}
              />
            </Section>
          : <Section title="">
              <Notification message="No feedback given"/>
            </Section>  
        }               
      </div>
    );
  }  
}

export default App;
