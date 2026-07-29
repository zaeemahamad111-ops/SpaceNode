import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://fwywmxujykytxwqlwfjj.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'sb_publishable_HWrnZ7gSeLL4D94xpL5AxA_QiBzsTIQ';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
