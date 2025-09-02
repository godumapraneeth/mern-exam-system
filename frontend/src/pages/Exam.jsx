import { useEffect, useState, useContext } from "react";
import { startExam, submitExam } from "../api/examApi";
import { AuthContext } from "../context/AuthContext";
import QuestionCard from "../components/QuestionCard";
import Timer from "../components/Timer";
import { useNavigate } from "react-router-dom";

const Exam = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) navigate("/login");
    else fetchQuestions();
  }, [user]);

  const fetchQuestions = async () => {
    try {
      const { data } = await startExam(user.token);
      setQuestions(data);
      setLoading(false);
    } catch (err) {
      alert("Failed to fetch questions");
    }
  };

  const handleNext = () => {
    if (current < questions.length - 1) setCurrent(current + 1);
  };

  const handlePrev = () => {
    if (current > 0) setCurrent(current - 1);
  };

  const handleSelect = (option) => {
    setAnswers({ ...answers, [questions[current]._id]: option });
  };

  const handleSubmit = async () => {
    const payload = {
      answers: questions.map((q) => ({
        questionId: q._id,
        selectedOption: answers[q._id] || "",
      })),
    };
    try {
      const { data } = await submitExam(payload, user.token);
      navigate("/result", { state: data });
    } catch (err) {
      alert("Failed to submit exam");
    }
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );

  return (
    <div className="bg-gradient-to-br from-emerald-400 to-green-600 min-h-screen p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Exam</h1>
          <Timer minutes={30} onTimeUp={handleSubmit} />
        </div>

        {/* Progress bar */}
        <div className="w-full bg-gray-200 rounded-full h-3 mb-6">
          <div
            className="bg-green-500 h-3 rounded-full transition-all"
            style={{
              width: `${((current + 1) / questions.length) * 100}%`,
            }}
          />
        </div>

        {/* Question */}
        <QuestionCard
          question={questions[current]}
          selected={answers[questions[current]._id]}
          onSelect={handleSelect}
        />

        {/* Navigation */}
        <div className="flex justify-between mt-6">
          <button
            onClick={handlePrev}
            disabled={current === 0}
            className="px-4 py-2 bg-gray-300 rounded-lg disabled:opacity-50"
          >
            Previous
          </button>
          {current === questions.length - 1 ? (
            <button
              onClick={handleSubmit}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Submit
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Exam;
