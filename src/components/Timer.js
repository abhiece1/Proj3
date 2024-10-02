import React, { useState, useEffect } from 'react';
import { LinearProgress, Typography, Box } from '@mui/material';

const Timer = ({ setTimeUp }) => {
  const totalDuration = 1800; // 30 minutes
  const [timeLeft, setTimeLeft] = useState(totalDuration);

  useEffect(() => {
    if (timeLeft === 0) {
      setTimeUp();
    } else {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft, setTimeUp]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <Box sx={{ mb: 3 }}>
      <Typography variant="h6">Time Left: {formatTime(timeLeft)}</Typography>
      <LinearProgress
        variant="determinate"
        value={(timeLeft / totalDuration) * 100}
        color="secondary"
      />
    </Box>
  );
};

export default Timer;
