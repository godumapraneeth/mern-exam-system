const QuestionCard = ({ question, selected, setSelected }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4">
      <h2 className="text-lg font-semibold mb-4">{question.questionText}</h2>
      <div className="grid grid-cols-1 gap-3">
        {question.options.map((opt, idx) => (
          <button
            key={idx}
            onClick={() => setSelected(opt)}
            className={`w-full text-left px-4 py-2 rounded border 
              ${selected === opt ? "bg-blue-500 text-white border-blue-500" : "bg-gray-100 hover:bg-gray-200"}`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
