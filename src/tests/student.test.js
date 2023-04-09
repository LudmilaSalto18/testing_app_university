const request = require('supertest')
const app = require('../app')
const Course = require('../models/Course')
require('../models')
let studentId=

test('POST/ studenst return code 201', async() => {
    const newStudent= {
        firstName: 'Elisa',
        lastName: "Michaels",
        birthday: 2000-12-12,
        program: "Medicine"
    }
    const res = await request(app).post('/students').send(newStudent)
    studentId = res.body.id
    expect(res.statusCode).toBe(201),
    expect(res.body.firstName).toBe(newStudent.firstName)
})

test('GET/ students return all the students', async() => {
    const res = await request(app).get('/students')
    expect(res.status).toBe(200)
    expect(res.body).toHaveLength(1)
    expect(res.body[0].courses).toBeDefined()
})

test('PUT/ should update studen', async () => {
    const body = {
        firstName : "Elisa update"
    }
    const res = await request(app)
    .put(`/students/${studentId}`)
    .send(body)
    expect(res.status).toBe(200)
    expect(res.body.firstName).toBe(body.firstName)
})

test('POST/: students/:id/courses', async () => {
    const newCourse = await Course.create({
        name: "Anatomy",
        credits: 2
    } )

    const res = await request(app)
    .post(`/students/${studentId}/courses`)
    .send([newCourse.id]);
     
    await  newCourse.destroy()
    expect(res.statusCode).toBe(200)
    expect(res.body).toHaveLength(1)

})

test('DELETE/ student delete one student', async() => {
    const res = await request(app).delete(`/students/${studentId}`)
    expect(res.statusCode).toBe(204)
})