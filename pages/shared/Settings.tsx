import React from 'react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import ToggleSwitch from '../../components/ui/ToggleSwitch';

const Settings: React.FC = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Settings</h1>

            <div className="space-y-8 max-w-3xl mx-auto">
                <Card className="p-6">
                    <h2 className="text-xl font-bold border-b pb-3 mb-4">General</h2>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <label htmlFor="language" className="font-medium">Language</label>
                            <select id="language" className="border border-gray-300 rounded-md p-2">
                                <option>English</option>
                                <option>Hindi</option>
                                <option>Bengali</option>
                            </select>
                        </div>
                        <div className="flex justify-between items-center">
                            <label className="font-medium">Theme</label>
                            <div className="flex space-x-2">
                                <button className="px-4 py-1 border rounded-md bg-primary text-white">Light</button>
                                <button className="px-4 py-1 border rounded-md">Dark</button>
                            </div>
                        </div>
                    </div>
                </Card>

                <Card className="p-6">
                    <h2 className="text-xl font-bold border-b pb-3 mb-4">Notifications</h2>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <label className="font-medium">Push Notifications</label>
                            <ToggleSwitch />
                        </div>
                         <div className="flex justify-between items-center">
                            <label className="font-medium">Email Notifications</label>
                            <ToggleSwitch />
                        </div>
                    </div>
                </Card>

                <Card className="p-6">
                    <h2 className="text-xl font-bold border-b pb-3 mb-4">Account</h2>
                    <div className="flex justify-between items-center">
                        <p className="font-medium">Log out of your account</p>
                        <Button variant="danger" onClick={handleLogout}>Log Out</Button>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Settings;
