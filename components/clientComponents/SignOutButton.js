// app/components/SignOutButton.js
'use client';
import { signOut } from "next-auth/react"
export default function SignOutButton() {
  const handleSignOut = () => {
    signOut({ callbackUrl: '/' });
  };

  return (
    <button onClick={handleSignOut} className='flex items-center gap-2 font-medium py-2 hover:bg-white hover:text-black border-black px-3 sm:px-6 border border-solid rounded-md bg-black text-white cursor-pointer transition-colors duration-400 '>Sign Out</button>
    
  );
}
