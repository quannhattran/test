import supabase from './supabaseClient'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    const { data, error } = await supabase
      .from('users')
      .select('*')

    console.log(data)
  }

  return <div>Hello</div>
}

export default App