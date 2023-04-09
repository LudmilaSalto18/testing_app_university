const { getAll, create, getOne, remove, update, setStudentsCourses } = require('../controllers/student.controller');
const express = require('express');

const studentRouter = express.Router();

studentRouter.route('/')
    .get(getAll)
    .post(create);


studentRouter.route('/:id/courses')
    .post(setStudentsCourses)
studentRouter.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = studentRouter;