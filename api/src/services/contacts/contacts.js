import { supabase } from 'src/lib/supabase'

export const createContact = async ({ input }) => {
  const { data, error } = await supabase.from('contacts').insert(input).single()

  if (error) {
    throw error
  }

  return data
}

export const updateContact = async ({ id, input, context }) => {
  // Authorization is handled by @requireAuth
  return db.contact.update({
    where: { id },
    data: input,
  })
}

export const deleteContact = async ({ id, context }) => {
  // Authorization is handled by @requireAuth
  return db.contact.delete({
    where: { id },
  })
}
