// auth module - completely refactored to use Supabase
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
)

export async function signIn(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  })
  if (error) throw error
  return data.session
}

export async function signOut() {
  await supabase.auth.signOut()
}

export async function getUser(accessToken: string) {
  const { data } = await supabase.auth.getUser(accessToken)
  return data.user
}
