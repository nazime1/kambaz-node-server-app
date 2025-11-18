import express from 'express';
import Hello from "./Hello.js"
import cors from "cors";
import Lab5 from "./Lab5/index.js";
import db from "./Kambaz/Database/index.js";
import session from "express-session";
import UserRoutes from "./Kambaz/Users/routes.js";
import CourseRoutes from "./Kambaz/Courses/routes.js";
import ModulesRoutes from "./Kambaz/Modules/routes.js";
import AssignmentsRoutes from "./Kambaz/Assignments/routes.js";
import EnrollmentRoutes from "./Kambaz/Enrollments/routes.js";
import "dotenv/config";
const app = express();
app.use(cors({
   credentials: true,
   origin: process.env.CLIENT_URL || "http://localhost:3000"
        || "https://cs-5610-kambaz-git-main-nazime1s-projects.vercel.app",
 }));
const sess = {
  secret: process.env.SESSION_SECRET || "kambaz" || "https://cs-5610-kambaz-git-main-nazime1s-projects.vercel.app",
if (app.get('env') === 'production') {
  app.set('trust proxy', 1) // trust first proxy
  sess.cookie.secure = true // serve secure cookies
}
app.use(session(sess));
app.use(express.json());
Lab5(app);
Hello(app);
app.listen(process.env.PORT || 4000)
UserRoutes(app, db);
CourseRoutes(app, db);
ModulesRoutes(app, db);
AssignmentsRoutes(app, db);
EnrollmentRoutes(app, db);
