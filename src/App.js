import React, { useState } from "react";
import Question from "./components/Question";
import QuestionNav from "./components/QuestionNav";
import Timer from "./components/Timer";
import TestSummary from "./components/TestSummary";
import { questions } from "./data/questions";
import "./styles.css";

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [testComplete, setTestComplete] = useState(false);
  const [timeUp, setTimeUp] = useState(false);

  // Handle answer selection for each question
  const handleAnswerChange = (questionIndex, selectedOption) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = selectedOption;
    setAnswers(newAnswers);
  };

  // Move to the next question
  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  // Move to the previous question
  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  // Submit the test manually
  const handleSubmitTest = () => {
    setTestComplete(true);
  };

  // Automatically submit the test when time is up
  if (timeUp && !testComplete) {
    handleSubmitTest();
  }

  return (
    <div className="app">
      {!testComplete && (
        <>
          <Timer setTimeUp={setTimeUp} />
          <div className="test-container">
            <Question
              question={questions[currentQuestionIndex]}
              currentAnswer={answers[currentQuestionIndex]}
              handleAnswerChange={handleAnswerChange}
            />
            <QuestionNav
              currentQuestionIndex={currentQuestionIndex}
              setCurrentQuestionIndex={setCurrentQuestionIndex}
              handlePrevQuestion={handlePrevQuestion}
              handleNextQuestion={handleNextQuestion}
              handleSubmitTest={handleSubmitTest}
              questions={questions}
            />
          </div>
        </>
      )}
      {testComplete && (
        <TestSummary
          answers={answers}
          questions={questions}
        />
      )}
    </div>
  );
}

export default App;
