import { Alarm } from '.'
import { User } from '../user'

let user, alarm

beforeEach(async () => {
  user = await User.create({ email: 'a@a.com', password: '123456' })
  alarm = await Alarm.create({ createdBy: user, type: 'test', periocity: 'test', done: 'test', activated: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = alarm.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(alarm.id)
    expect(typeof view.createdBy).toBe('object')
    expect(view.createdBy.id).toBe(user.id)
    expect(view.type).toBe(alarm.type)
    expect(view.periocity).toBe(alarm.periocity)
    expect(view.done).toBe(alarm.done)
    expect(view.activated).toBe(alarm.activated)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = alarm.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(alarm.id)
    expect(typeof view.createdBy).toBe('object')
    expect(view.createdBy.id).toBe(user.id)
    expect(view.type).toBe(alarm.type)
    expect(view.periocity).toBe(alarm.periocity)
    expect(view.done).toBe(alarm.done)
    expect(view.activated).toBe(alarm.activated)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
