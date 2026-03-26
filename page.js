'use client'
import { useEffect } from 'react'
import { supabase } from '../lib/supabaseClient'

export default function Home() {
  useEffect(() => {
    insertData()
  }, [])

  async function insertData() {
    const { data, error } = await supabase
      .from('users')
      .insert([{ name: 'test' }])

    console.log('DATA:', data)
    console.log('ERROR:', error)
  }

  return <h1>Hello test</h1>
}