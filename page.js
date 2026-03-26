'use client'
import { useEffect } from 'react'
import { supabase } from '../supabaseClient'

export default function Home() {
  useEffect(() => {
    insertData()
  }, [])

  async function insertData() {
    console.log('🔥 INSERT START')

    const { data, error } = await supabase
      .from('users')
      .insert([{ name: 'test123' }])

    console.log('DATA:', data)
    console.log('ERROR:', error)
  }

  return <h1>Hello test</h1>
}