import QuizzesDao from "../Quizzes/dao.js";

export default function QuizzesRoutes(app, db) {
	const dao = QuizzesDao(db);
	const findAllQuizzes = async (req, res) => {
	    const quizzes = await dao.findAllQuizzes();
	    res.send(quizzes);
	}

	const findQuizzesForCourse = async (req, res) => {
		const { courseId } = req.params;
		const quizzes = await dao.findQuizzesForCourse(courseId);
		res.json(quizzes);
	}
	
	const updateQuiz = async (req, res) => {
		const { qid } = req.params;
		const quizUpdates = req.body;
		const status = await dao.updateQuiz(qid, quizUpdates);
		res.send(status);
	}

	app.get("/api/quizzes", findAllQuizzes);
	app.get("/api/courses/:courseId/quizzes", findQuizzesForCourse);
	app.put("/api/courses/:courseId/quizzes", updateQuiz);
}

