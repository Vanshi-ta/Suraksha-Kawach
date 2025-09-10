import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { Menu, UserCircle } from '../Icons';
import { Link } from 'react-router-dom';
import { UserRole } from '../../types';

interface HeaderProps {
    onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
    const { user } = useAuth();
    const canViewProfile = user?.role === UserRole.STUDENT || user?.role === UserRole.TEACHER;

    const userDisplay = (
        <div className="flex items-center space-x-4">
            <div className="text-right">
                <p className="font-semibold text-gray-700">{user?.name}</p>
                <p className="text-sm text-gray-500">{user?.role}</p>
            </div>
            <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                <UserCircle className="h-6 w-6" />
            </div>
        </div>
    );

    return (
        <header className="bg-white shadow-sm p-4 flex items-center justify-between">
            <button onClick={onMenuClick} className="md:hidden text-gray-600">
                <Menu className="h-6 w-6" />
            </button>
            <div className="flex-1">
                 {/* This could be dynamic based on route */}
                 <h1 className="text-xl font-bold text-gray-800 hidden md:block">Welcome, {user?.name}</h1>
            </div>
            
            {canViewProfile ? (
                <Link to="/profile" className="rounded-lg p-1 -m-1 transition-colors hover:bg-gray-100">
                    {userDisplay}
                </Link>
            ) : (
                <div className="p-1 -m-1">{userDisplay}</div>
            )}
        </header>
    );
};

export default Header;
