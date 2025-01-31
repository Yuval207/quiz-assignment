import { useState } from "react";
import { animated, useSpring } from "@react-spring/web";

export default function Quiz({
  data,
  questionNumber,
  totalQuestions,
  onAnswer,
  score,
}) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isExiting, setIsExiting] = useState(false);

  const questionAnimation = useSpring({
    from: { transform: "translateX(100%)", opacity: 0 },
    to: { transform: "translateX(0%)", opacity: 1 },
    config: { tension: 300, friction: 20 },
  });

  const handleSelect = (isCorrect) => {
    setSelectedAnswer(isCorrect);
    setIsExiting(true);
    setTimeout(() => {
      onAnswer(isCorrect);
      setSelectedAnswer(null);
      setIsExiting(false);
    }, 1200);
  };

  const progressPercentage = (questionNumber / totalQuestions) * 100;

  return (
    <animated.div style={questionAnimation} className="quiz-container">
      <div className="quiz-header">
        <div className="score-board">
          <span>🏆</span>
          <span>{score}</span>
        </div>
        <div className="progress-container">
          <div className="progress-circle">
            <div
              className="progress-fill"
              style={{
                transform: `rotate(${(progressPercentage * 3.6) / 2}deg)`,
              }}
            />
            <div className="progress-text">
              {questionNumber}/{totalQuestions}
            </div>
          </div>
        </div>
      </div>

      <h2 className="question-text animate-charcter">{data.description}</h2>

      <div className="options-grid">
        {data.options.map((option, index) => (
          <button
            key={option.id}
            onClick={() => handleSelect(option.is_correct)}
            className={`option-btn ${
              selectedAnswer !== null
                ? option.is_correct
                  ? "correct"
                  : "wrong"
                : ""
            } ${isExiting ? "exit" : ""}`}
            disabled={selectedAnswer !== null}
          >
            <span className="option-number">{index + 1}.</span>
            {option.description}
            {option.is_correct && <span className="option-emoji"></span>}
          </button>
        ))}
      </div>
    </animated.div>
  );
}
