// components/StartScreen.jsx
export default function StartScreen({ onStart }) {
  return (
    <div className="start-screen">
      <h1>Welcome to the Quiz Challenge!</h1>
      <p>Test your knowledge and earn points!</p>
      <button onClick={onStart} className="start-button">
        Start Quiz
      </button>
    </div>
  );
}
