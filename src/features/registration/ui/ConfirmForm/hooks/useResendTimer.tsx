import { useEffect, useRef, useState } from "react";

const OneSecond = 1000;
const TimerDuration = 30;

export const useResendTimer = () => {
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [resendTimer, setResendTimer] = useState(TimerDuration);

  const intervalRef = useRef<number | null>(null);

  const startTimer = () => {
    if (buttonDisabled) return;
    setButtonDisabled(true);
    setResendTimer(TimerDuration);
  };

  useEffect(() => {
    if (!buttonDisabled) return;

    intervalRef.current = setInterval(() => {
      setResendTimer((prevNumber) => {
        if (prevNumber <= 1) {
          clearInterval(intervalRef.current!);
          intervalRef.current = null;
          setButtonDisabled(false);
          return TimerDuration;
        }
        return prevNumber - 1;
      });
    }, OneSecond);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [buttonDisabled]);

  return {
    startTimer,
    resendTimer,
    buttonDisabled,
  };
};
