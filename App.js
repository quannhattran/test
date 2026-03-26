import supabase from './supabaseClient'

async function testConnection() {
  const { data, error } = await supabase.auth.getSession()

  console.log('DATA:', data)
  console.log('ERROR:', error)
}

testConnection()