import { createBrowserClient, createServerClient } from '@supabase/ssr';
import { cookies, headers } from 'next/headers';

export const createSupabaseClient = () => {
  if (typeof window === 'undefined') {
    // Server-side
    return createServerClient({
      supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
      supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      getRequestHeader: (key) => headers().get(key),
      getCookie: (name) => cookies().get(name)?.value,
    });
  } else {
    // Client-side
    return createBrowserClient({
      supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
      supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    });
  }
};
