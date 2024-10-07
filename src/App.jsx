import React, { useState } from 'react';
import ExamWindow from './components/ExamWindow/ExamWindow';
import ExamReport from './components/ExamReport/ExamReport';
import styles from './App.module.css';

function App() {
  const [examStarted, setExamStarted] = useState(false);
  const [examCompleted, setExamCompleted] = useState(false);
  const [examStatus, setExamStatus] = useState('');

  const startExam = () => {
    setExamStarted(true);
  };

  const endExam = (status) => {
    setExamStarted(false);
    setExamCompleted(true);
    setExamStatus(status);
  };

  return (
    <div className={styles.app}>
      {!examStarted && !examCompleted && (
        <button onClick={startExam} className={styles.startButton}>
          Start Exam
        </button>
      )}
      {examStarted && (
        <ExamWindow onExamEnd={endExam} />
      )}
      {examCompleted && (
        <ExamReport status={examStatus} />
      )}
    </div>
  );
}

export default App;