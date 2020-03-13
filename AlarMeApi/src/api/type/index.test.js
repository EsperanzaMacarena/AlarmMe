import request from 'supertest'
import { apiRoot } from '../../config'
import { signSync } from '../../services/jwt'
import express from '../../services/express'
import { User } from '../user'
import routes, { Type } from '.'

const app = () => express(apiRoot, routes)

let userSession, adminSession, type

beforeEach(async () => {
  const user = await User.create({ email: 'a@a.com', password: '123456' })
  const admin = await User.create({ email: 'c@c.com', password: '123456', role: 'admin' })
  userSession = signSync(user.id)
  adminSession = signSync(admin.id)
  type = await Type.create({})
})

test('POST /type 201 (admin)', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ access_token: adminSession, description: 'test', typePlaces: 'test', ubication: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.description).toEqual('test')
  expect(body.typePlaces).toEqual('test')
  expect(body.ubication).toEqual('test')
})

test('POST /type 401 (user)', async () => {
  const { status } = await request(app())
    .post(`${apiRoot}`)
    .send({ access_token: userSession })
  expect(status).toBe(401)
})

test('POST /type 401', async () => {
  const { status } = await request(app())
    .post(`${apiRoot}`)
  expect(status).toBe(401)
})

test('GET /type 200 (user)', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
    .query({ access_token: userSession })
  expect(status).toBe(200)
  expect(Array.isArray(body.rows)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
})

test('GET /type 401', async () => {
  const { status } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(401)
})

test('GET /type/:id 200 (user)', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${type.id}`)
    .query({ access_token: userSession })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(type.id)
})

test('GET /type/:id 401', async () => {
  const { status } = await request(app())
    .get(`${apiRoot}/${type.id}`)
  expect(status).toBe(401)
})

test('GET /type/:id 404 (user)', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
    .query({ access_token: userSession })
  expect(status).toBe(404)
})

test('PUT /type/:id 200 (admin)', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${type.id}`)
    .send({ access_token: adminSession, description: 'test', typePlaces: 'test', ubication: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(type.id)
  expect(body.description).toEqual('test')
  expect(body.typePlaces).toEqual('test')
  expect(body.ubication).toEqual('test')
})

test('PUT /type/:id 401 (user)', async () => {
  const { status } = await request(app())
    .put(`${apiRoot}/${type.id}`)
    .send({ access_token: userSession })
  expect(status).toBe(401)
})

test('PUT /type/:id 401', async () => {
  const { status } = await request(app())
    .put(`${apiRoot}/${type.id}`)
  expect(status).toBe(401)
})

test('PUT /type/:id 404 (admin)', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ access_token: adminSession, description: 'test', typePlaces: 'test', ubication: 'test' })
  expect(status).toBe(404)
})

test('DELETE /type/:id 204 (admin)', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${type.id}`)
    .query({ access_token: adminSession })
  expect(status).toBe(204)
})

test('DELETE /type/:id 401 (user)', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${type.id}`)
    .query({ access_token: userSession })
  expect(status).toBe(401)
})

test('DELETE /type/:id 401', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${type.id}`)
  expect(status).toBe(401)
})

test('DELETE /type/:id 404 (admin)', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
    .query({ access_token: adminSession })
  expect(status).toBe(404)
})
