export default function QuizzesDao(db) {
	function findAllQuizzes() {
 	  const { quizzes } = db;
	  return quizzes;
	}

	async function findQuizzesForCourse(courseId) {
		const { quizzes } = db;
		return quizzes.filter((quiz) => quiz.course === courseId);
	}

	async function updateQuiz(courseId, quizId, quizUpdates) {
		const { quizzes } = db;
		const quiz = quizzes.find((quiz) => quiz._id === quizId);
		Object.assign(quiz, quizUpdates);
		return quiz;
	}

return { findAllQuizzes, findQuizzesForCourse, updateQuiz };
}
