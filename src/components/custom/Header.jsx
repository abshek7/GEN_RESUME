import React from 'react';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import { auth } from '../../config/firebase'; // Import Firebase auth
import { signOut } from 'firebase/auth'; // Import signOut function from Firebase

function Header() {
    const user = auth.currentUser; // Get the current authenticated user

    const handleSignOut = () => {
        signOut(auth); // Sign out the user from Firebase
    };

    return (
        <div className="p-3 px-5 flex justify-between items-center shadow-md">
            {/* Logo Section */}
            <Link to={'/dashboard'}>
                <img src='/icon.svg' alt="Logo" width={100} height={100} />
            </Link>

            {/* User Actions Section */}
            {user ? (
                <div className="flex items-center gap-4">
                    {/* Dashboard Link */}
                    <Link to={'/dashboard'}>
                        <Button variant="outline">Dashboard</Button>
                    </Link>

                    {/* User Profile and Sign Out */}
                    <div className="flex items-center gap-2">
                        {/* Profile Picture */}
                        <img 
                            src={user.photoURL || '/default-avatar.png'} 
                            alt={user.displayName || 'User'} 
                            className="w-8 h-8 rounded-full border border-gray-300" 
                        />
                        {/* Display Name or Email */}
                        <span className="text-sm">{user.displayName || user.email}</span>
                    </div>

                    {/* Sign Out Button */}
                    <Button variant="outline" onClick={handleSignOut}>Sign Out</Button>
                </div>
            ) : (
                <Link to={'/auth/sign-in'}>
                    <Button>Get Started</Button>
                </Link>
            )}
        </div>
    );
}

export default Header;
