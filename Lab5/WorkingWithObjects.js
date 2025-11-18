const assignment = {
  id: 1, title: "NodeJS Assignment",
  description: "Create a NodeJS server with ExpressJS",
  due: "2021-10-10", completed: false, score: 0,
};
const module = {
  id: 1, name: "Module 1",
  description: "How to create a NodeJS server",
  course: "Web Development"
};

export default function WorkingWithObjects(app) {
  const getAssignment = (req, res) => {
    res.json(assignment);
  };
  const getAssignmentTitle = (req, res) => {
    res.json(assignment.title);
  };
    app.get("/lab5/assignment/title", getAssignmentTitle);
    app.get("/lab5/assignment", getAssignment);
   const setAssignmentTitle = (req, res) => {
   	const { newTitle } = req.params;
   	assignment.title = newTitle;
   	res.json(assignment);
   };
   app.get("/lab5/assignment/title/:newTitle", setAssignmentTitle);
   const getModule = (req, res) => {
     res.json(module);
   };
   const getModuleName = (req, res) => {
     res.json(module.name);
   };
   app.get("/lab5/module", getModule);
   app.get("/lab5/module/name", getModuleName);
   const setModuleName = (req, res) => {
	const { newName } = req.params;
	module.name = newName;
	res.json(module);
   };
   app.get("/lab5/module/name/:newName", setModuleName);
   const setAssignmentScore = (req, res) => {
	const { newScore } = req.params;
	assignment.score = newScore;
	res.json(assignment);
   };
   const setAssignmentCompleted = (req, res) => {
	const { isCompleted } = req.params;
	assignment.completed = isCompleted;
	res.json(assignment);
   };
   app.get("/lab5/assignment/score/:newScore", setAssignmentScore);
   app.get("/lab5/assignment/completed/:isCompleted", setAssignmentCompleted);
};

