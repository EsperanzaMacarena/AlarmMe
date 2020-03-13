import { success, notFound, authorOrAdmin } from '../../services/response/'
import { Alarm } from '.'

export const create = ({ user, bodymen: { body } }, res, next) =>
  Alarm.create({ ...body, createdBy: user })
    .then((alarm) => alarm.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Alarm.count(query)
    .then(count => Alarm.find(query, select, cursor)
      .populate('createdBy')
      .populate('type')
      .then((alarms) => ({
        count,
        rows: alarms.map((alarm) => alarm.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Alarm.findById(params.id)
    .populate('createdBy')
    .populate('type')
    .then(notFound(res))
    .then((alarm) => alarm ? alarm.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ user, bodymen: { body }, params }, res, next) =>
  Alarm.findById(params.id)
    .populate('createdBy')
    .populate('type')
    .then(notFound(res))
    .then(authorOrAdmin(res, user, 'createdBy'))
    .then((alarm) => alarm ? Object.assign(alarm, body).save() : null)
    .then((alarm) => alarm ? alarm.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ user, params }, res, next) =>
  Alarm.findById(params.id)
    .then(notFound(res))
    .then(authorOrAdmin(res, user, 'createdBy'))
    .then((alarm) => alarm ? alarm.remove() : null)
    .then(success(res, 204))
    .catch(next)
