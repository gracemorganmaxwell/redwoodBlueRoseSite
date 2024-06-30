export const schema = gql`
  type GiftCardRequest {
    id: Int!
    recipientName: String!
    giftType: String!
    deliveryMethod: String!
    email: String
    address: String
    message: String!
    gifterName: String!
    gifterEmail: String!
    note: String!
    createdAt: DateTime!
  }

  type Query {
    giftCardRequests: [GiftCardRequest!]! @requireAuth
    giftCardRequest(id: Int!): GiftCardRequest @requireAuth
  }

  input CreateGiftCardRequestInput {
    recipientName: String!
    giftType: String!
    deliveryMethod: String!
    email: String
    address: String
    message: String!
    gifterName: String!
    gifterEmail: String!
    note: String!
  }

  input UpdateGiftCardRequestInput {
    recipientName: String
    giftType: String
    deliveryMethod: String
    email: String
    address: String
    message: String
    gifterName: String
    gifterEmail: String
    note: String
  }

  type Mutation {
    createGiftCardRequest(input: CreateGiftCardRequestInput!): GiftCardRequest!
      @requireAuth
    updateGiftCardRequest(
      id: Int!
      input: UpdateGiftCardRequestInput!
    ): GiftCardRequest! @requireAuth
    deleteGiftCardRequest(id: Int!): GiftCardRequest! @requireAuth
  }
`
