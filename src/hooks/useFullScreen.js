import {useState, useEffect, useCallback} from 'react';

function useFullScreen() 
{
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    const handleFullScreenChange = () => 
    {
      setIsFullScreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullScreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullScreenChange);
  }, []);

  const enterFullScreen = useCallback(() => 
  {
    if (document.documentElement.requestFullscreen) 
    {
      document.documentElement.requestFullscreen();
    }
  }, []);



  const exitFullScreen = useCallback(() => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }, []);



  return {isFullScreen, enterFullScreen, exitFullScreen};
}

export default useFullScreen;