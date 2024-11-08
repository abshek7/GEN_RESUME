import React from 'react';
import { auth } from '../../config/firebase';

import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function SignInPage() {
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate('/dashboard'); 
    } catch (error) {
      console.error("Error signing in:", error.message);
    }
  };

  return (
    <div className='flex justify-center my-20 items-center'>
      <button 
        onClick={handleGoogleSignIn} 
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Sign in with Google
      </button>
    </div>
  );
}

export default SignInPage;
