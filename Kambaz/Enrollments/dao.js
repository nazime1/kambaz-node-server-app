import { v4 as uuidv4 } from "uuid";
export default function EnrollmentsDao(db) {
  function enrollUserInCourse(userId, courseId) {
    const { enrollments } = db;
    enrollments.push({ _id: uuidv4(), user: userId, course: courseId });
  }
  function getEnrollments() {
    return db.enrollments;
  }
  function unenrollUserInCourse(enrollmentId) {
    const { enrollments } = db;
    db.enrollments = enrollments.filter((enrollment) => enrollment._id != enrollmentId);
  }
  return { 
  enrollUserInCourse,
  getEnrollments,
  unenrollUserInCourse,
  };
}
