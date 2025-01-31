import { useSpring, animated } from "@react-spring/web";

export default function ResultScreen({ score, total, onRestart }) {
  const fadeIn = useSpring({
    from: { opacity: 0, transform: "translateY(-20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 500 },
  });

  const percentage = ((score / total) * 100).toFixed(0);

  return (
    <div className="result-screen">
      <animated.div style={fadeIn} className="result-card">
        <h2 className="result-title">Quiz Completed! 🎉</h2>
        <div className="result-content">
          <div className="score-display">
            <span className="score-label">Your Score:</span>
            <span className="score-value">
              {score} / {total}
            </span>
          </div>
          <div className="percentage-display">
            <span className="percentage-label">Percentage:</span>
            <span className="percentage-value">{percentage}%</span>
          </div>
          <div className="performance-message">
            {percentage >= 90 ? (
              <span>Perfect Score! 🏆 You're a genius!</span>
            ) : percentage >= 70 ? (
              <span>Great Job! 😎 Keep it up!</span>
            ) : (
              <span>Keep Practicing! 💪 You'll get there!</span>
            )}
          </div>
        </div>
        <button onClick={onRestart} className="restart-btn">
          Try Again
        </button>
      </animated.div>
    </div>
  );
}
