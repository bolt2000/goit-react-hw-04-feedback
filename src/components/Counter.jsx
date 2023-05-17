// import React, { Component } from 'react';
import { useState} from 'react';
import FeedbackOptions from './FeedbackOptions ';
import Statistics from './Statistics';

// class oldCounter extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };


export default function Counter() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  console.log(good, neutral, bad);


  const onLeaveFeedback = e => {
    const name = e.currentTarget.name;

    switch (name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      
      default:
        return;
    }
  }



  const countTotalFeedback = () => {
    return good + bad + neutral;
    console.log(countTotalFeedback);
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.ceil((good * 100) / countTotalFeedback());
  };


  const buttonOptions = Object.keys({ good, neutral, bad });

return (
  <div>
    <FeedbackOptions
      options={buttonOptions}
      onLeaveFeedback={onLeaveFeedback}
    />
    <h2>Statistics</h2>

    {countTotalFeedback() > 0 ? (
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={countTotalFeedback()}
        percentage={countPositiveFeedbackPercentage()}
      />
    ) : (
      <p>There is no feedback</p>
    )}
  </div>
);
    };


  // onLeaveFeedback = e => {
  //   const { name } = e.target;
  //   this.setState(prevState => {
  //     return {
  //       [name]: prevState[name] + 1,
  //     };
  //   });
  // };

  // countTotalFeedback = () =>
  //   this.state.good + this.state.bad + this.state.neutral;

  // countPositiveFeedbackPercentage = () => {
  //   return Math.ceil((this.state.good * 100) / this.countTotalFeedback());
  // };

//   render() {
//     return (
//       <div>
//         <FeedbackOptions
//           options={Object.keys(this.state)}
//           onLeaveFeedback={this.onLeaveFeedback}
//         />
//         <h2>Statistics</h2>

//         {this.countTotalFeedback() > 0 ? (
//           <Statistics
//             good={this.state.good}
//             neutral={this.state.neutral}
//             bad={this.state.bad}
//             total={this.countTotalFeedback()}
//             percentage={this.countPositiveFeedbackPercentage()}
//           />
//         ) : (
//           <p>There is no feedback</p>
//         )}
//       </div>
//     );
//   }
// }

// export default oldCounter;
