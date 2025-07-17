import { useState, useEffect } from 'react';
import Description from './Description/Description';
import Options from './Options/Options';
import Feedback from './Feedback/Feedback';
import Notification from './Notification/Notification';

import { initialState } from '../constants';
import './App.css';

function App() {
  const [data, setData] = useState(() => {
    const savedObject = window.localStorage.getItem('saved-data');

    if (savedObject !== null) {
      return JSON.parse(savedObject);
    }

    return initialState;
  });

  useEffect(() => {
    window.localStorage.setItem('saved-data', JSON.stringify(data));
  }, [data]);

  const updateFeedback = feedbackType => {
    setData(prev => ({ ...prev, [feedbackType]: prev[feedbackType] + 1 }));
  };

  const resetFeedback = () => {
    setData(initialState);
  };

  const totalFeedback = data.good + data.neutral + data.bad;
  const positive = Math.round((data.good / totalFeedback) * 100);

  return (
    <>
      <Description
        title="Sip Happens Café"
        text="Please leave your feedback about our service by selecting one of the options below."
      />
      <Options
        handleUpdate={updateFeedback}
        handleReset={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {!totalFeedback ? (
        <Notification text="No feedback yet" />
      ) : (
        <Feedback
          data={data}
          totalFeedback={totalFeedback}
          positive={positive}
        />
      )}
    </>
  );
}

export default App;
