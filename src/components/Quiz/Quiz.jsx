import React, { useState } from 'react';

function Quiz({ questions }) {
  const [index, setIndex] = useState(0);
  const [feedback, setfeedback] = useState('');
  const [answer, setAnswer] = useState(false);

  const randomizeQuestion = () => {
    const randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
  };
  const currentQuestion = randomizeQuestion(); 

  const handleAnswerClick = (answer) => {
    if (answer === currentQuestion.correctAnswer) {
        setfeedback('Правильно! молодец');
    } else {
        setfeedback('не прошел проверку!☹');
    }
    setAnswer(true);
  };

  const handleNextQuestion = () => {
    setAnswer(false);
    setfeedback('');
    setIndex((index) => (index + 1) % questions.length); 
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: '1px solid #ccc',
        padding: '20px',
        width: '300px',
        margin: '50px auto',
        borderRadius: '8px',
        background: '#f9f9f9',
      }}
    >
      <h2>{currentQuestion.question}</h2>
      <div style={{ marginBottom: '10px' }}>
        {currentQuestion.options.map((option, index) => (
          <button key={index} onClick={() => handleAnswerClick(option)}
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '10px',
              borderRadius: '4px',
              backgroundColor: '#fff',
              border: '1px solid #ccc',
              cursor: 'pointer',
              fontSize: '16px',
            }}
            disabled={answer}
          >
            {option}
          </button>
        ))}
      </div>
      {feedback && <div style={{ color: answer ? 'green' : 'red', fontWeight: 'bold' }}>{feedback}</div>}
      {answer && (
        <button
          onClick={handleNextQuestion}
          style={{
            padding: '10px',
            marginTop: '20px',
            background: '#007BFF',
            color: 'white',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Следующий вопрос
        </button>
      )}
    </div>
  );
}

export default Quiz;
