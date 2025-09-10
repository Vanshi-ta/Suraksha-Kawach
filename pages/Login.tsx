import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { UserRole } from '../types';
import Button from '../components/ui/Button';
import { Shield, UserCircle, Users } from '../components/Icons';

const LoginPage: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState<UserRole | null>(null);

  const handleLogin = (role: UserRole) => {
    login(role);
    if (role === UserRole.STUDENT) navigate('/student/dashboard');
    if (role === UserRole.TEACHER) navigate('/teacher/dashboard');
    if (role === UserRole.ADMIN) navigate('/admin/dashboard');
  };
  
  const handleFormSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (selectedRole) {
          handleLogin(selectedRole);
      }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-blue-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            {!selectedRole ? (
                <div className="text-center">
                    <div className="inline-block p-4 bg-primary rounded-full mb-4">
                        <Shield className="h-12 w-12 text-white" />
                    </div>
                  <h1 className="text-4xl font-bold text-primary mb-2">Suraksha Kawach</h1>
                  <p className="text-gray-600 mb-8">Your Digital Shield for Disaster Preparedness.</p>
                  
                  <div className="space-y-4">
                    <h2 className="text-lg font-semibold text-gray-700">Select Your Role to Continue</h2>
                    <RoleButton
                      role={UserRole.STUDENT}
                      onClick={() => setSelectedRole(UserRole.STUDENT)}
                      icon={<UserCircle className="h-8 w-8" />}
                    />
                    <RoleButton
                      role={UserRole.TEACHER}
                      onClick={() => setSelectedRole(UserRole.TEACHER)}
                      icon={<Users className="h-8 w-8" />}
                    />
                    <RoleButton
                      role={UserRole.ADMIN}
                      onClick={() => setSelectedRole(UserRole.ADMIN)}
                      icon={<Shield className="h-8 w-8" />}
                    />
                  </div>
                  <p className="text-xs text-gray-400 mt-8">Authenticate via School ID or registered mobile number with OTP.</p>
                </div>
            ) : (
                <div>
                    <button onClick={() => setSelectedRole(null)} className="text-sm text-gray-500 hover:text-primary flex items-center mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                        Back to role selection
                    </button>
                    <div className="text-center">
                        <div className="inline-block p-4 bg-primary rounded-full mb-4">
                            {selectedRole === UserRole.STUDENT && <UserCircle className="h-12 w-12 text-white" />}
                            {selectedRole === UserRole.TEACHER && <Users className="h-12 w-12 text-white" />}
                            {selectedRole === UserRole.ADMIN && <Shield className="h-12 w-12 text-white" />}
                        </div>
                        <h1 className="text-3xl font-bold text-primary mb-2">{selectedRole} Login</h1>
                        <p className="text-gray-600 mb-8">Enter your credentials to access your dashboard.</p>
                    </div>
                    
                    <form onSubmit={handleFormSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="schoolId" className="block text-sm font-medium text-gray-700">School ID / Username</label>
                            <input
                                type="text"
                                id="schoolId"
                                required
                                autoFocus
                                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                                placeholder="e.g., SK-12345"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password / OTP</label>
                            <input
                                type="password"
                                id="password"
                                required
                                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                                placeholder="********"
                            />
                        </div>
                        <Button type="submit" className="w-full" size="lg">
                            Login
                        </Button>
                    </form>
                </div>
            )}
        </div>
      </div>
    </div>
  );
};

interface RoleButtonProps {
    role: UserRole;
    onClick: () => void;
    icon: React.ReactNode;
}

const RoleButton: React.FC<RoleButtonProps> = ({ role, onClick, icon }) => (
    <button
        onClick={onClick}
        className="w-full flex items-center text-left p-4 bg-gray-50 rounded-xl border-2 border-transparent hover:border-primary hover:bg-blue-50 transition-all duration-300 group"
    >
        <div className="text-primary mr-4 transition-transform duration-300 group-hover:scale-110">{icon}</div>
        <div>
            <h3 className="text-xl font-bold text-gray-800">{role}</h3>
            <p className="text-gray-500">Access your dedicated dashboard</p>
        </div>
    </button>
);


export default LoginPage;