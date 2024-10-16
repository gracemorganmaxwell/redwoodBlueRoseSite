import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
)

/**
 * Once you are ready to add authentication to your application
 * you'll build out requireAuth() with real functionality. For
 * now we just return `true` so that the calls in services
 * have something to check against, simulating a logged
 * in user that is allowed to access that service.
 *
 * See https://redwoodjs.com/docs/authentication for more info.
 */
export const isAuthenticated = () => {
  return !!supabase.auth.user()
}

export const hasRole = ({ roles }) => {
  const user = supabase.auth.user()
  return user && roles.includes(user.role)
}

// This is used by the redwood directive
// in ./api/src/directives/requireAuth

// Roles are passed in by the requireAuth directive if you have auth setup
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
export const requireAuth = ({ roles }) => {
  if (!isAuthenticated()) {
    throw new Error('You must be logged in to access this')
  }

  if (roles && !hasRole({ roles })) {
    throw new Error("You don't have access to this")
  }
}

export const getCurrentUser = async () => {
  const user = supabase.auth.user()
  return user
}
