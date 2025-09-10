import React from 'react';
import { useAuth } from '../../context/AuthContext';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { BookOpen, Gamepad2, Flame, HeartPulse, Waves, UserCircle } from '../../components/Icons';
import { Link } from 'react-router-dom';

const StudentDashboard: React.FC = () => {
    const { user } = useAuth();

    return (
        <div className="space-y-8">
            {/* Header Section */}
            <div>
                <h1 className="text-3xl font-bold text-gray-800">Hello, {user?.name}!</h1>
                <p className="text-gray-600 mt-1">Ready to become a disaster-ready hero? Let's get started.</p>
            </div>

            {/* Profile & Progress */}
            <Card className="p-6 flex items-center space-x-6">
                <div className="h-20 w-20 rounded-full border-4 border-primary bg-gray-100 flex items-center justify-center text-primary flex-shrink-0">
                    <UserCircle className="h-12 w-12" />
                </div>
                <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                        <span className="font-semibold text-lg text-gray-700">Your Progress</span>
                        <span className="font-bold text-primary">XP 750 / 1000</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-4">
                        <div className="bg-success rounded-full h-4" style={{ width: '75%' }}></div>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">Level 5: Safety Scout</p>
                </div>
            </Card>

            {/* Main Action Grid */}
            <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6 bg-gradient-to-br from-primary to-blue-700 text-white">
                    <BookOpen className="h-10 w-10 text-action-DEFAULT mb-4" />
                    <h2 className="text-2xl font-bold mb-2">Continue Learning</h2>
                    <p className="mb-4">Jump back into the 'Fire Safety' module.</p>
                    <Link to="/gyan-kendra">
                        <Button variant="secondary" size="md">Resume Module</Button>
                    </Link>
                </Card>
                <Card className="p-6 bg-gradient-to-br from-orange-500 to-action text-white">
                    <Gamepad2 className="h-10 w-10 text-primary mb-4" />
                    <h2 className="text-2xl font-bold mb-2">Enter Simulation</h2>
                    <p className="mb-4">Practice your skills in the 3D school arena.</p>
                    <Link to="/gyan-kendra">
                        <Button variant="secondary" size="md" className="text-black">Start Simulation</Button>
                    </Link>
                </Card>
            </div>

            {/* My Journey */}
            <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">My Journey</h2>
                <Card className="p-6">
                    <p className="text-center text-gray-600">A visual, map-like path showing completed and upcoming learning modules will be displayed here.</p>
                    {/* Placeholder for Journey Map */}
                    <div className="mt-4 h-40 bg-gray-100 rounded-lg flex items-center justify-center">
                        <p className="text-gray-400">[Journey Map Visualization]</p>
                    </div>
                </Card>
            </div>

            {/* Badges & Leaderboard */}
            <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Badges Showcase</h3>
                     <div className="flex justify-around items-start pt-2">
                        <Badge 
                            name="Fire Marshal" 
                            icon={<Flame className="h-10 w-10" />}
                            colorClasses="bg-red-100 text-red-600"
                        />
                        <Badge 
                            name="Earthquake Expert" 
                            icon={<Waves className="h-10 w-10" />}
                            colorClasses="bg-amber-100 text-amber-700"
                        />
                        <Badge 
                            name="First-Aid Ready" 
                            icon={<HeartPulse className="h-10 w-10" />}
                            colorClasses="bg-green-100 text-green-700"
                        />
                    </div>
                </Card>
                <Card className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Class Leaderboard</h3>
                    <div className="space-y-2">
                        <p className="text-lg">Your Rank: <span className="font-bold text-primary">#5</span></p>
                        <p className="text-sm text-gray-500">(Leaderboard does not display other students' progress data for privacy.)</p>
                    </div>
                </Card>
            </div>
        </div>
    );
};

interface BadgeProps {
    name: string;
    icon: React.ReactNode;
    colorClasses: string;
}

const Badge: React.FC<BadgeProps> = ({ name, icon, colorClasses }) => (
    <div className="flex flex-col items-center text-center space-y-2">
        <div className={`rounded-full h-20 w-20 flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform ${colorClasses}`}>
            {icon}
        </div>
        <p className="text-sm font-semibold text-gray-700 w-24">{name}</p>
    </div>
);


export default StudentDashboard;