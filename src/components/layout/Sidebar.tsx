import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { UserRole } from '../../types';
import { BookOpen, Gamepad2, Siren, UserCircle, Settings, LogOut, Shield, Home, Users, BarChart3, X } from '../Icons';

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    const studentLinks = [
        { to: '/student/dashboard', icon: <Home />, label: 'Home' },
        { to: '/gyan-kendra', icon: <BookOpen />, label: 'Gyan Kendra' },
        { to: '/abhyas-arena', icon: <Gamepad2 />, label: 'Abhyas Arena' },
        { to: '/satark-hub', icon: <Siren />, label: 'Satark Hub' },
        { to: '/profile', icon: <UserCircle />, label: 'Profile' },
        { to: '/settings', icon: <Settings />, label: 'Settings' },
    ];

    const teacherLinks = [
        ...studentLinks.filter(l => l.label !== 'Home'),
        { to: '/teacher/dashboard', icon: <Home />, label: 'Home' },
        { to: '/teacher/reports', icon: <Users />, label: 'Student Reports' },
    ];
    
    const adminLinks = [
        { to: '/admin/dashboard', icon: <Home />, label: 'Dashboard' },
        { to: '/satark-hub', icon: <Siren />, label: 'Send Alerts' },
        { to: '/admin/progress', icon: <BarChart3 />, label: 'School Progress' },
        { to: '/settings', icon: <Settings />, label: 'Settings' },
    ];

    const navLinks =
        user?.role === UserRole.STUDENT
            ? studentLinks
            : user?.role === UserRole.TEACHER
            ? teacherLinks
            : adminLinks;

    const NavItem: React.FC<{ to: string, icon: React.ReactNode, label: string }> = ({ to, icon, label }) => (
        <NavLink
            to={to}
            onClick={onClose}
            className={({ isActive }) =>
                `flex items-center px-4 py-3 rounded-lg transition-colors duration-200 ${
                isActive
                    ? 'bg-primary text-white shadow-md'
                    : 'text-gray-200 hover:bg-white/10'
                }`
            }
        >
            <span className="w-6 h-6 mr-3">{icon}</span>
            <span className="font-medium">{label}</span>
        </NavLink>
    );

    return (
        <>
            <aside className={`fixed inset-y-0 left-0 bg-primary-dark w-64 p-4 text-white z-50 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 transition-transform duration-300 ease-in-out flex flex-col`}>
                <div className="flex items-center justify-between p-2 mb-6">
                    <div className="flex items-center space-x-3">
                        <Shield className="h-8 w-8 text-action-DEFAULT" />
                        <h1 className="text-2xl font-bold">Suraksha Kawach</h1>
                    </div>
                    <button onClick={onClose} className="md:hidden text-white">
                        <X className="h-6 w-6" />
                    </button>
                </div>
                
                <nav className="flex-grow space-y-2">
                    {navLinks.map((link) => (
                        <NavItem key={link.to} {...link} />
                    ))}
                </nav>

                <div className="mt-auto">
                    <button
                        onClick={handleLogout}
                        className="flex items-center w-full px-4 py-3 rounded-lg text-gray-200 hover:bg-white/10"
                    >
                        <LogOut className="w-6 h-6 mr-3" />
                        <span className="font-medium">Log Out</span>
                    </button>
                </div>
            </aside>
            {isOpen && <div onClick={onClose} className="fixed inset-0 bg-black/50 z-40 md:hidden"></div>}
        </>
    );
};

export default Sidebar;
