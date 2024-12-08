import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from '@/lib/supabase';
import { motion } from 'framer-motion';

export function Login() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mx-auto max-w-md px-4 py-16"
    >
      <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-center text-2xl font-bold text-gray-900">
          Welcome Back
        </h2>
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          theme="default"
          providers={['google']}
          redirectTo={`${window.location.origin}/dashboard`}
        />
      </div>
    </motion.div>
  );
}