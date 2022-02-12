import { useEffect } from 'react';
import { supabase } from '../utils/supabase';

export default function Login() {
  useEffect(() => {
    supabase.auth.signIn({
      provider: 'github',
    });
  }, []);

  return <div>Login</div>;
}
