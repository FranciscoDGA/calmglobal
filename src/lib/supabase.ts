import { createClient, type SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

/**
 * Indica se as credenciais do Supabase estão presentes.
 * Quando `false`, a aplicação recorre aos dados de exemplo locais
 * (ver `src/data`), de modo que o site permanece navegável sem backend.
 */
export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseKey);

/**
 * Cliente Supabase. Só é criado quando as variáveis de ambiente existem —
 * evita erros em desenvolvimento antes de o backend estar configurado.
 */
export const supabase: SupabaseClient | null = isSupabaseConfigured
  ? createClient(supabaseUrl as string, supabaseKey as string)
  : null;
