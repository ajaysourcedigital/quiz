import React, { useReducer } from 'react';
import Question from './components/Question';
import Answers from './components/Answers';
import QuizContext from './context/QuizContext';
import quizReducer from './reducers/QuizReducer';
import { questions } from './data/questions';

function App() {
  const initialState = {
    questions,
    currentQuestion: 0,
    currentAnswer: '',
    answers: [],
    showResults: false,
    error: ''
  };

  const [state, dispatch] = useReducer(quizReducer, initialState);

  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      <div className="quiz">
        <Question />
        <Answers />
      </div>
    </QuizContext.Provider>
  );
}

export default App;
