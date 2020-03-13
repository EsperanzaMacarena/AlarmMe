import { Type } from '.'

let type

beforeEach(async () => {
  type = await Type.create({ description: 'test', typePlaces: 'test', ubication: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = type.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(type.id)
    expect(view.description).toBe(type.description)
    expect(view.typePlaces).toBe(type.typePlaces)
    expect(view.ubication).toBe(type.ubication)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = type.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(type.id)
    expect(view.description).toBe(type.description)
    expect(view.typePlaces).toBe(type.typePlaces)
    expect(view.ubication).toBe(type.ubication)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
