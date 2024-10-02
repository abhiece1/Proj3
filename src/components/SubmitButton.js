// src/components/SubmitButton.js

import React, { useContext, useState } from 'react';
import { TestContext } from '../context/TestContext';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

const SubmitButton = () => {
  const { questions, answers, submitTest } = useContext(TestContext);
  const [openDialog, setOpenDialog] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Check if all questions have been answered
  const isAllAnswered = () => {
    return questions.length === answers.filter(answer => answer !== null).length;
  };

  const handleSubmit = () => {
    if (isAllAnswered()) {
      setIsSubmitted(true);
      submitTest();
      handleCloseDialog();
    } else {
      alert('Please answer all questions before submitting the test.');
    }
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={handleOpenDialog}
        disabled={isSubmitted}
      >
        {isSubmitted ? "Test Submitted" : "Submit Test"}
      </Button>

      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Confirm Submission"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to submit your answers? Once submitted, you cannot change your answers.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary" autoFocus>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default SubmitButton;
