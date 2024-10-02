import React from 'react';
import { Button, Box, Typography } from '@mui/material';

const Question = ({ question, currentAnswer, handleAnswerChange }) => {
  const handleOptionClick = (optionIndex) => {
    handleAnswerChange(question.id - 1, optionIndex);
  };

  return (
    <Box sx={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', mb: 2 }}>
      <Typography variant="h5" gutterBottom>{question.subject}</Typography>
      <Typography variant="h6" gutterBottom>{question.question}</Typography>
      <Box>
        {question.options.map((option, index) => (
          <Button
            key={index}
            variant={currentAnswer === index ? 'contained' : 'outlined'}
            color={currentAnswer === index ? 'primary' : 'default'}
            sx={{ mb: 1, width: '100%' }}
            onClick={() => handleOptionClick(index)}
          >
            {option}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default Question;
