// src/context/TestContext.js

import React, { createContext, useReducer } from 'react';

const TestContext = createContext();

const initialState = {
  questions: [
    // Example questions - replace with actual data or fetch from an API
    { id: 1, text: 'What is 2 + 2?', options: ['3', '4', '5'], correctAnswer: '4' },
    { id: 2, text: 'What is the capital of France?', options: ['Paris', 'London', 'Berlin'], correctAnswer: 'Paris' },
  ],
  answers: [null, null], // Stores user answers
  userTests: [], // Stores user's past test results
  isTestSubmitted: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_ANSWER':
      const updatedAnswers = [...state.answers];
      updatedAnswers[action.payload.questionIndex] = action.payload.answer;
      return { ...state, answers: updatedAnswers };
    
    case 'SUBMIT_TEST':
      const score = state.answers.filter((answer, index) => answer === state.questions[index].correctAnswer).length;
      const newTest = {
        date: new Date().toLocaleDateString(),
        score: score,
        rank: Math.floor(Math.random() * 100) + 1, // Random rank for demonstration
      };
      return { ...state, userTests: [...state.userTests, newTest], isTestSubmitted: true };

    default:
      return state;
  }
};

const TestProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setAnswer = (questionIndex, answer) => {
    dispatch({ type: 'SET_ANSWER', payload: { questionIndex, answer } });
  };

  const submitTest = () => {
    dispatch({ type: 'SUBMIT_TEST' });
  };

  return (
    <TestContext.Provider
      value={{
        questions: state.questions,
        answers: state.answers,
        userTests: state.userTests,
        isTestSubmitted: state.isTestSubmitted,
        setAnswer,
        submitTest,
      }}
    >
      {children}
    </TestContext.Provider>
  );
};

export { TestContext, TestProvider };
