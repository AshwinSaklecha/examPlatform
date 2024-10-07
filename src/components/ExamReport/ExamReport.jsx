import React from 'react';
import styles from './ExamReport.module.css';

function ExamReport({ status }) 
{
  return (
    <div className={styles.examReport}>
      <h2>Exam Report</h2>
      <p>Exam Status: {status === 'completed' ? 'Completed' : 'Terminated'}</p>
      {status === 'terminated' && (
        <p>Reason: Multiple attempts to exit full-screen mode</p>
      )}
      {status === 'time_up' && (
        <p>Reason: Time limit reached</p>
      )}
    </div>
  );
}

export default ExamReport;