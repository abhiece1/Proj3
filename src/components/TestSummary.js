import React from 'react';
import { Box, Typography } from '@mui/material';

const TestSummary = ({ answers, questions }) => {
  const calculateScore = () => {
    let score = 0;
    answers.forEach((answer, index) => {
      if (answer === questions[index].correctAnswer) {
        score += 1;
      }
    });
    return score;
  };

  const timeSpentPerQuestion = [30, 45, 60]; // This is just mock data; it can be dynamically calculated
  const performanceBySubject = {
    Physics: 1,
    Chemistry: 1,
    Mathematics: 1,
  };

  return (
    <Box sx={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <Typography variant="h4" gutterBottom>
        Test Completed
      </Typography>
      <Typography variant="h6">
        Your Score: {calculateScore()} / {questions.length}
      </Typography>
      <Typography variant="h6" gutterBottom>
        Time Spent Per Question: {timeSpentPerQuestion.join(', ')} seconds
      </Typography>
      <Typography variant="h6" gutterBottom>
        Performance by Subject:
      </Typography>
      <ul>
        {Object.keys(performanceBySubject).map((subject) => (
          <li key={subject}>
            {subject}: {performanceBySubject[subject]} correct
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default TestSummary;
