import React, {useState, useEffect, useCallback} from 'react';
import Timer from '../Timer/Timer';
import ViolationWarning from '../ViolationWarning/ViolationWarning';
import useFullScreen from '../../hooks/useFullScreen';
import styles from './ExamWindow.module.css';

function ExamWindow({ onExamEnd }) 
{
  const [violationCount, setViolationCount] = useState(0);
  const [showWarning, setShowWarning] = useState(false);
  const { isFullScreen, enterFullScreen, exitFullScreen } = useFullScreen();
  const [examStarted, setExamStarted] = useState(false);

  const handleViolation = useCallback(() => 
  {
    if (violationCount < 1) 
    {
      setShowWarning(true);
      setViolationCount(prevCount => prevCount + 1);
    } 
    else 
    {
      onExamEnd('terminated');
    }
  }, [violationCount, onExamEnd]);

  useEffect(() => {
    const startExam = async () => 
    {
      await enterFullScreen();
      setExamStarted(true);
    };
    startExam();

    const handleFullScreenChange = () => 
    {
      if (examStarted && !document.fullscreenElement) 
      {
        handleViolation();
      }
    };

    document.addEventListener('fullscreenchange', handleFullScreenChange);
    

    return () => {
      document.removeEventListener('fullscreenchange', handleFullScreenChange);
    };
  }, [enterFullScreen, handleViolation, examStarted]);



  const handleWarningClose = () => 
  {
    setShowWarning(false);
    enterFullScreen();
  };

  const handleSubmit = () => {
    exitFullScreen();
    onExamEnd('completed');
  };

  return (
    <div className={styles.examWindow}>
      <h1>Exam in Progress</h1>
      <Timer duration={3600} onTimeUp={() => onExamEnd('time_up')} />
      <button onClick={handleSubmit} className={styles.submitButton}>
        Submit Exam
      </button>
      {showWarning && (
        <ViolationWarning onClose={handleWarningClose} />
      )}
    </div>
  );
}

export default ExamWindow;