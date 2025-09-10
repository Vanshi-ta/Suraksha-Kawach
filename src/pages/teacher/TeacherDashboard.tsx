import React from 'react';
import { useAuth } from '../../context/AuthContext';
import Card from '../../components/ui/Card';
import { Users, BookOpen } from '../../components/Icons';
import { Link } from 'react-router-dom';

const TeacherDashboard: React.FC = () => {
    const { user } = useAuth();

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-gray-800">Welcome, {user?.name}!</h1>
                <p className="text-gray-600 mt-1">Manage your class and monitor their disaster preparedness journey.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                <InfoCard title="Students" value="30" />
                <InfoCard title="Avg. Class Progress" value="75%" />
                <InfoCard title="Alerts Sent" value="2" />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                 <Link to="/teacher/reports">
                    <Card className="p-6 flex items-center space-x-4 h-full hover:bg-primary/5 transition-colors">
                        <div className="p-3 bg-primary/10 rounded-full text-primary">
                            <Users className="h-8 w-8" />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold">View Student Reports</h2>
                            <p className="text-gray-600">Track individual and class-wide progress.</p>
                        </div>
                    </Card>
                </Link>
                <Link to="/gyan-kendra">
                    <Card className="p-6 flex items-center space-x-4 h-full hover:bg-primary/5 transition-colors">
                        <div className="p-3 bg-primary/10 rounded-full text-primary">
                            <BookOpen className="h-8 w-8" />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold">Assign Learning Modules</h2>
                            <p className="text-gray-600">Guide your students through Gyan Kendra.</p>
                        </div>
                    </Card>
                </Link>
            </div>
            
             <Card className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Recent Activity</h2>
                <ul>
                    <li className="border-b py-2">Class 10B completed the 'Fire Safety' module.</li>
                    <li className="border-b py-2">You sent a 'Mock Drill' campus alert.</li>
                    <li className="py-2">Priya Singh earned the 'First-Aid Ready' badge.</li>
                </ul>
            </Card>
        </div>
    );
};

const InfoCard: React.FC<{ title: string, value: string }> = ({ title, value }) => (
    <Card className="p-6 text-center">
        <p className="text-gray-600 text-lg">{title}</p>
        <p className="text-4xl font-extrabold text-primary">{value}</p>
    </Card>
);

export default TeacherDashboard;
