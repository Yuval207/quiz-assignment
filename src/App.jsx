import { useEffect, useState } from "react";
import axios from "axios";
import { useSpring, animated } from "@react-spring/web";
import StartScreen from "./components/StartScreen";
import Quiz from "./components/Quiz";
import ResultScreen from "./components/ResultScreen";
import Confetti from "./components/Confetti";
import "./App.css";

function App() {
  const [quizData, setQuizData] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  const proxyUrl = "https://thingproxy.freeboard.io/fetch/";
  const targetUrl = "https://api.jsonserve.com/Uw5CrX";

  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        const response = await axios.get(`${proxyUrl}${targetUrl}`);

        if (!response.data?.questions) throw new Error("Invalid data format");

        setQuizData(response.data.questions);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchQuizData();
  }, []);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore((prev) => prev + 4); // Add 4 points for correct answers
    } else {
      setScore((prev) => Math.max(prev - 1, 0)); // Deduct 1 point for wrong answers (ensure score doesn't go below 0)
    }
    setCurrentQuestion((prev) => prev + 1);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setHasStarted(false);
  };

  return (
    <animated.div style={fadeIn} className="app-container">
      {!hasStarted ? (
        <StartScreen onStart={() => setHasStarted(true)} />
      ) : (
        <>
          {loading ? (
            <div className="loading-screen">
              <div className="spinner"></div>
              <p>Loading your quiz adventure...</p>
            </div>
          ) : error ? (
            <div className="error-screen">
              <div className="error-icon">⚠️</div>
              <h2>Oops! Something went wrong</h2>
              <p>{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="retry-btn"
              >
                Try Again
              </button>
            </div>
          ) : currentQuestion < quizData.length ? (
            <Quiz
              data={quizData[currentQuestion]}
              questionNumber={currentQuestion + 1}
              totalQuestions={quizData.length}
              onAnswer={handleAnswer}
              score={score}
            />
          ) : (
            <>
              <Confetti />
              <ResultScreen
                score={score}
                total={quizData.length * 4} // Total score is number of questions * 4
                onRestart={restartQuiz}
              />
            </>
          )}
        </>
      )}
    </animated.div>
  );
}

export default App;
