import React from 'react';
import { Button, Grid } from '@mui/material';

const QuestionNav = ({ questions, currentQuestionIndex, setCurrentQuestionIndex, handleSubmitTest }) => {
  const getStatusColor = (index) => {
    if (questions[index].answered) return 'primary';
    return 'default';
  };

  return (
    <Grid container spacing={2}>
      {questions.map((_, index) => (
        <Grid item xs={2} key={index}>
          <Button
            variant="outlined"
            color={getStatusColor(index)}
            onClick={() => setCurrentQuestionIndex(index)}
          >
            {index + 1}
          </Button>
        </Grid>
      ))}
      <Grid item xs={12}>
        <Button variant="contained" color="error" onClick={handleSubmitTest}>
          Submit Test
        </Button>
      </Grid>
    </Grid>
  );
};

export default QuestionNav;
