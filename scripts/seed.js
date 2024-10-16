import { createClient } from '@supabase/supabase-js'
import { db } from 'api/src/lib/db'

// Initialize Supabase client
const supabaseUrl = process.env.SUPABASE_URL
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY
const supabase = createClient(supabaseUrl, supabaseAnonKey)

export default async () => {
  try {
    const users = [
      {
        email: 'digitalcreations.gracie@gmail.com',
        password: 'S3cureNailsN!B3auty',
        role: 'admin',
      },
      {
        email: 'bluerosenailsandbeauty@gmail.com',
        password: 'S3cureNailsN!B3auty!',
        role: 'business_owner',
      },
    ]

    for (const user of users) {
      // Sign up user with Supabase
      const { user: supabaseUser, error } = await supabase.auth.signUp({
        email: user.email,
        password: user.password,
      })

      if (error) {
        console.error('Error creating user:', error)
        continue
      }

      // Assign role in the database
      await db.role.create({
        data: {
          userId: supabaseUser.id,
          role: user.role,
        },
      })

      console.log(`Created user ${user.email} with role ${user.role}`)
    }
  } catch (error) {
    console.error('Error seeding data:', error)
  }
}
