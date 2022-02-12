import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { supabase } from '../utils/supabase';

export default function Logout() {
  const router = useRouter();

  useEffect(() => {
    async function logout() {
      await supabase.auth.signOut();
      router.push('/');
    }

    logout();
  }, []);

  return <div>Logout</div>;
}
