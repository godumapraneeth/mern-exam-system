import Question from "../models/Question.js";


export const startExam = async (req, res) => {
  try {
    const total = await Question.countDocuments();
    const size = total < 10 ? total : 10;

    const questions = await Question.aggregate([{ $sample: { size } }]);

    const sanitized = questions.map((q) => ({
      _id: q._id,
      questionText: q.questionText,
      options: shuffleArray(q.options), 
    }));

    res.json(sanitized);
  } catch (error) {
    res.status(500).json({ message: "Error fetching questions" });
  }
};


export const submitExam = async (req, res) => {
  try {
    const { answers } = req.body;

    if (!answers || !Array.isArray(answers)) {
      return res.status(400).json({ message: "Invalid answers format" });
    }

  const ids = answers.map((ans) => ans.questionId);

    const questions = await Question.find({ _id: { $in: ids } });

    let score = 0;
    const review = [];

    for (const ans of answers) {
      const question = questions.find(
        (q) => q._id.toString() === ans.questionId
      );

      if (question) {
        const isCorrect = question.correctAnswer === ans.selectedOption;
        if (isCorrect) score++;

        review.push({
          questionId: question._id,
          questionText: question.questionText,
          selectedOption: ans.selectedOption,
          correctAnswer: question.correctAnswer,
          isCorrect,
        });
      }
    }

    res.json({
      total: answers.length,
      score,
      review,
      message: "Exam submitted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: "Error submitting exam" });
  }
};
function shuffleArray(array) {
  return [...array].sort(() => Math.random() - 0.5);
}
