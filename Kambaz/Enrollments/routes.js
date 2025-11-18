import EnrollmentsDao from "./dao.js";
export default function EnrollmentRoutes(app, db) {
   const dao = EnrollmentsDao(db);
   const findAllEnrollments = (req, res) => {
	const enrollments = dao.getEnrollments();
	res.send(enrollments);
   }
  const addEnrollment = (req, res) => {
	const { courseId, currentUser } = req.params;
	const newEnrollment = dao.enrollUserInCourse(courseId, currentUser);
	res.json(newEnrollment);
  }
  const unenrollUser = (req, res) => {
	const { enrollmentId } = req.params;
	const status = dao.unenrollUserInCourse(enrollmentId);
	res.send(status);
  }
  app.get("/api/enrollments", findAllEnrollments);
  app.post("/api/enrollments", addEnrollment);
  app.delete("/api/enrollments/:enrollId", unenrollUser);
}
