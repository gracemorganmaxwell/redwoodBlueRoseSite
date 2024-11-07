import prisma from 'src/lib/prisma'

export const contacts = () => {
  return prisma.contact.findMany()
}

// Other CRUD operations using the singleton Prisma client
