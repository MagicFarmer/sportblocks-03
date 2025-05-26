
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const { userId, walletAddress } = await req.json()

    if (!userId || !walletAddress) {
      throw new Error('Missing required parameters: userId and walletAddress')
    }

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    const supabase = createClient(supabaseUrl, supabaseKey)

    console.log(`Creating contract for user ${userId} with wallet ${walletAddress}`)

    // Simulate contract deployment (in real implementation, this would interact with StarkNet)
    const mockContractAddress = `0x${Math.random().toString(16).substr(2, 40)}`
    
    // Insert contract record
    const { data: contractData, error: contractError } = await supabase
      .from('user_contracts')
      .insert({
        user_id: userId,
        contract_address: mockContractAddress,
        contract_type: 'personal',
        deployment_status: 'deployed'
      })
      .select()
      .single()

    if (contractError) {
      console.error('Error creating contract record:', contractError)
      throw contractError
    }

    console.log('Contract created successfully:', contractData)

    return new Response(
      JSON.stringify({ 
        success: true, 
        contract: contractData,
        message: 'Smart contract created successfully'
      }),
      { 
        headers: { 
          ...corsHeaders,
          'Content-Type': 'application/json'
        },
        status: 200
      }
    )

  } catch (error) {
    console.error('Function error:', error)
    
    return new Response(
      JSON.stringify({ 
        error: error.message,
        success: false
      }),
      { 
        headers: { 
          ...corsHeaders,
          'Content-Type': 'application/json'
        },
        status: 400
      }
    )
  }
})
