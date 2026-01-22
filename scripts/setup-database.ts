/**
 * Database Setup Script
 * Run this script to set up the Supabase database tables
 * Usage: npx tsx scripts/setup-database.ts
 */

import { createClient } from '@supabase/supabase-js'
import * as fs from 'fs'
import * as path from 'path'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Missing Supabase credentials. Please check your .env.local file.')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)

async function setupDatabase() {
  console.log('🚀 Setting up Supabase database...\n')

  try {
    // Read the SQL schema file
    const schemaPath = path.join(__dirname, '..', 'supabase', 'schema.sql')
    const schema = fs.readFileSync(schemaPath, 'utf-8')

    // Note: Supabase doesn't support running raw SQL through the client API
    // You need to run this SQL manually in the Supabase SQL Editor
    console.log('📋 SQL Schema ready to execute:')
    console.log('━'.repeat(80))
    console.log('\n✅ Copy the content from supabase/schema.sql')
    console.log('✅ Go to your Supabase project SQL Editor')
    console.log(`✅ Navigate to: ${supabaseUrl.replace('.supabase.co', '')}.supabase.co/project/_/sql`)
    console.log('✅ Paste and run the SQL script\n')
    console.log('━'.repeat(80))

    console.log('\n✨ Once you run the SQL in Supabase, your database will be ready!')
    console.log('💡 You can also use the Supabase CLI: npx supabase db push\n')

  } catch (error) {
    console.error('❌ Error:', error)
    process.exit(1)
  }
}

setupDatabase()
