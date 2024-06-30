import {
  giftCardRequests,
  giftCardRequest,
  createGiftCardRequest,
  updateGiftCardRequest,
  deleteGiftCardRequest,
} from './giftCardRequests'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('giftCardRequests', () => {
  scenario('returns all giftCardRequests', async (scenario) => {
    const result = await giftCardRequests()

    expect(result.length).toEqual(Object.keys(scenario.giftCardRequest).length)
  })

  scenario('returns a single giftCardRequest', async (scenario) => {
    const result = await giftCardRequest({
      id: scenario.giftCardRequest.one.id,
    })

    expect(result).toEqual(scenario.giftCardRequest.one)
  })

  scenario('creates a giftCardRequest', async () => {
    const result = await createGiftCardRequest({
      input: {
        recipientName: 'String',
        giftType: 'String',
        deliveryMethod: 'String',
        message: 'String',
        gifterName: 'String',
        gifterEmail: 'String',
      },
    })

    expect(result.recipientName).toEqual('String')
    expect(result.giftType).toEqual('String')
    expect(result.deliveryMethod).toEqual('String')
    expect(result.message).toEqual('String')
    expect(result.gifterName).toEqual('String')
    expect(result.gifterEmail).toEqual('String')
  })

  scenario('updates a giftCardRequest', async (scenario) => {
    const original = await giftCardRequest({
      id: scenario.giftCardRequest.one.id,
    })
    const result = await updateGiftCardRequest({
      id: original.id,
      input: { recipientName: 'String2' },
    })

    expect(result.recipientName).toEqual('String2')
  })

  scenario('deletes a giftCardRequest', async (scenario) => {
    const original = await deleteGiftCardRequest({
      id: scenario.giftCardRequest.one.id,
    })
    const result = await giftCardRequest({ id: original.id })

    expect(result).toEqual(null)
  })
})
