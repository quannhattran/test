import supabase from './supabaseClient'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    testConnection()
  }, [])

  async function testConnection() {
    console.log('🚀 START TEST')

    const { data, error } = await supabase.auth.getSession()

    console.log('✅ DATA:', data)
    console.log('❌ ERROR:', error)
  }

  return <div>Hello</div>
}

export default App