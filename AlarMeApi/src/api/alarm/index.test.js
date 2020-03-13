import request from 'supertest'
import { apiRoot } from '../../config'
import { signSync } from '../../services/jwt'
import express from '../../services/express'
import { User } from '../user'
import routes, { Alarm } from '.'

const app = () => express(apiRoot, routes)

let userSession, anotherSession, alarm

beforeEach(async () => {
  const user = await User.create({ email: 'a@a.com', password: '123456' })
  const anotherUser = await User.create({ email: 'b@b.com', password: '123456' })
  userSession = signSync(user.id)
  anotherSession = signSync(anotherUser.id)
  alarm = await Alarm.create({ createdBy: user })
})

test('POST /alarm 201 (user)', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ access_token: userSession, type: 'test', periocity: 'test', done: 'test', activated: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.type).toEqual('test')
  expect(body.periocity).toEqual('test')
  expect(body.done).toEqual('test')
  expect(body.activated).toEqual('test')
  expect(typeof body.createdBy).toEqual('object')
})

test('POST /alarm 401', async () => {
  const { status } = await request(app())
    .post(`${apiRoot}`)
  expect(status).toBe(401)
})

test('GET /alarm 200 (user)', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
    .query({ access_token: userSession })
  expect(status).toBe(200)
  expect(Array.isArray(body.rows)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
  expect(typeof body.rows[0].createdBy).toEqual('object')
})

test('GET /alarm 401', async () => {
  const { status } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(401)
})

test('GET /alarm/:id 200 (user)', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${alarm.id}`)
    .query({ access_token: userSession })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(alarm.id)
  expect(typeof body.createdBy).toEqual('object')
})

test('GET /alarm/:id 401', async () => {
  const { status } = await request(app())
    .get(`${apiRoot}/${alarm.id}`)
  expect(status).toBe(401)
})

test('GET /alarm/:id 404 (user)', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
    .query({ access_token: userSession })
  expect(status).toBe(404)
})

test('PUT /alarm/:id 200 (user)', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${alarm.id}`)
    .send({ access_token: userSession, type: 'test', periocity: 'test', done: 'test', activated: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(alarm.id)
  expect(body.type).toEqual('test')
  expect(body.periocity).toEqual('test')
  expect(body.done).toEqual('test')
  expect(body.activated).toEqual('test')
  expect(typeof body.createdBy).toEqual('object')
})

test('PUT /alarm/:id 401 (user) - another user', async () => {
  const { status } = await request(app())
    .put(`${apiRoot}/${alarm.id}`)
    .send({ access_token: anotherSession, type: 'test', periocity: 'test', done: 'test', activated: 'test' })
  expect(status).toBe(401)
})

test('PUT /alarm/:id 401', async () => {
  const { status } = await request(app())
    .put(`${apiRoot}/${alarm.id}`)
  expect(status).toBe(401)
})

test('PUT /alarm/:id 404 (user)', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ access_token: anotherSession, type: 'test', periocity: 'test', done: 'test', activated: 'test' })
  expect(status).toBe(404)
})

test('DELETE /alarm/:id 204 (user)', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${alarm.id}`)
    .query({ access_token: userSession })
  expect(status).toBe(204)
})

test('DELETE /alarm/:id 401 (user) - another user', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${alarm.id}`)
    .send({ access_token: anotherSession })
  expect(status).toBe(401)
})

test('DELETE /alarm/:id 401', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${alarm.id}`)
  expect(status).toBe(401)
})

test('DELETE /alarm/:id 404 (user)', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
    .query({ access_token: anotherSession })
  expect(status).toBe(404)
})
