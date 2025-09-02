import { useLocation, useNavigate } from "react-router-dom";

const Result = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) return <div className="text-center mt-10">No result data</div>;

  return (
    <div className="bg-gradient-to-br from-indigo-400 to-purple-600 min-h-screen p-6 flex justify-center items-center">
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-xl p-6">
        {/* Score */}
        <h2 className="text-4xl font-extrabold text-center text-indigo-700 mb-6 animate-bounce">
          Your Score: {state.score}/{state.total}
        </h2>

        {/* Review Section */}
        <div className="space-y-4 mb-6">
          {state.review.map((q) => (
            <div
              key={q.questionId}
              className="p-5 border rounded-xl bg-gray-50 shadow hover:shadow-md transition-all"
            >
              <p className="font-semibold text-gray-800">{q.questionText}</p>
              <p>
                Your answer:{" "}
                <span
                  className={q.isCorrect ? "text-green-600" : "text-red-600"}
                >
                  {q.selectedOption || "Not Answered"}
                </span>
              </p>
              {!q.isCorrect && (
                <p>
                  Correct answer:{" "}
                  <span className="text-green-600">{q.correctAnswer}</span>
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <button
            onClick={() => navigate("/")}
            className="px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          >
            Home
          </button>
          <button
            onClick={() => navigate("/exam")}
            className="px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            Retry Exam
          </button>
        </div>
      </div>
    </div>
  );
};

export default Result;
