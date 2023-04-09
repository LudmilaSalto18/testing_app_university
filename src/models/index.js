const Course = require("./Course");
const Student = require("./Student");

Course.belongsToMany(Student, {through: 'studentCourse'})
Student.belongsToMany(Course, {through: 'studentCourse' })