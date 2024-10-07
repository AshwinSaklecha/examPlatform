import React from 'react';
import styles from './ViolationWarning.module.css';

function ViolationWarning({ onClose }) 
{
  return (
    <div className={styles.warningOverlay}>
      <div className={styles.warningContent}>
        <h2>Violation Warning</h2>
        <p>You have attempted to exit full-screen mode. This is your first warning.</p>
        <p>The exam will be terminated if you attempt to exit full-screen mode again.</p>
        <button onClick={onClose}>Return to Exam</button>
      </div>
    </div>
  );
}

export default ViolationWarning;