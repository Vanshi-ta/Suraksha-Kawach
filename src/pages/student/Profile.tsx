import React from 'react';
import { useAuth } from '../../context/AuthContext';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { UserCircle } from '../../components/Icons';

const Profile: React.FC = () => {
    const { user } = useAuth();

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-6">My Profile</h1>
            <Card className="p-8 max-w-2xl mx-auto">
                <div className="flex flex-col sm:flex-row items-center sm:space-x-8">
                    <div className="h-32 w-32 rounded-full ring-4 ring-primary ring-offset-2 bg-gray-100 flex items-center justify-center text-primary flex-shrink-0">
                        <UserCircle className="h-24 w-24" />
                    </div>
                    <div className="mt-6 sm:mt-0 text-center sm:text-left flex-1">
                        <h2 className="text-2xl font-bold text-gray-800">{user?.name}</h2>
                        <p className="text-gray-500">{user?.role}</p>
                        <p className="text-gray-500">School ID: {user?.schoolId}</p>
                    </div>
                </div>

                <div className="mt-8 border-t pt-8">
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                            <input type="text" id="name" defaultValue={user?.name} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                            <input type="email" id="email" placeholder="student@example.com" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" />
                        </div>
                         <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                            <input type="tel" id="phone" placeholder="+91 12345 67890" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" />
                        </div>
                        <div className="text-right">
                            <Button type="submit">Save Changes</Button>
                        </div>
                    </form>
                </div>
            </Card>
        </div>
    );
};

export default Profile;
