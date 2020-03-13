import { success, notFound } from '../../services/response/'
import { Type } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Type.create(body)
    .then((type) => type.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Type.count(query)
    .then(count => Type.find(query, select, cursor)
      .then((types) => ({
        count,
        rows: types.map((type) => type.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Type.findById(params.id)
    .then(notFound(res))
    .then((type) => type ? type.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Type.findById(params.id)
    .then(notFound(res))
    .then((type) => type ? Object.assign(type, body).save() : null)
    .then((type) => type ? type.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Type.findById(params.id)
    .then(notFound(res))
    .then((type) => type ? type.remove() : null)
    .then(success(res, 204))
    .catch(next)
