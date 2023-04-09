const request =  require('supertest')
const app = require('../app')
require('../models')

let courseId;
test('POST/ courses should create course', async () => {
    const newCourse = {
        name: "Anatomy",
        credits: 2
    }
    const res = await request(app)
        .post('/courses')
        .send(newCourse)
    courseId = res.body.id
    expect(res.statusCode).toBe(201)
    expect(res.body.name).toBe(newCourse.name)
})

test('GET/ courses should get all courses', async () =>{
    const res = await request(app).get('/courses')
    expect(res.statusCode).toBe(200);
    console.log(res.body)
    expect(res.body).toHaveLength(1)
    expect(res.body[0].students).toBeDefined()
})

test('PUT/ courses update', async () => {
    const body = {
        name: 'Fisiq'
    }
    const res = await request(app).put(`/courses/${courseId}`).send(body)
    expect(res.statusCode).toBe(200)
    expect(res.body.name).toBe(body.name)
})

test('DELETE/courses delete', async () => {
    const res = await request(app).delete(`/courses/${courseId}`)
    expect(res.statusCode).toBe(204)
})