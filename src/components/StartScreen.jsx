import { useSpring, animated } from "@react-spring/web";

export default function StartScreen({ onStart }) {
  const fadeIn = useSpring({
    from: { opacity: 0, transform: "translateY(-20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 500 },
  });

  const buttonAnimation = useSpring({
    from: { scale: 0.8, opacity: 0 },
    to: { scale: 1, opacity: 1 },
    delay: 500,
    config: { tension: 300, friction: 10 },
  });

  return (
    <div className="start-screen">
      <animated.div style={fadeIn} className="start-content">
        <h1 className="start-title">Welcome to the Quiz Challenge! 🚀</h1>
        <p className="start-description">
          Test your knowledge and earn points! Answer 10 questions correctly to
          become a quiz master. Are you ready?
        </p>
      </animated.div>
      <animated.div style={buttonAnimation}>
        <button onClick={onStart} className="start-button">
          Start Quiz
        </button>
      </animated.div>
    </div>
  );
}
