import React from 'react';
import Card from '../../components/ui/Card';

const studentsData = [
  { id: 1, name: 'Rohan Sharma', progress: 85, lastActivity: 'Fire Quiz' },
  { id: 2, name: 'Priya Singh', progress: 92, lastActivity: 'Flood Simulation' },
  { id: 3, name: 'Amit Kumar', progress: 70, lastActivity: 'Earthquake Module' },
  { id: 4, name: 'Sneha Patel', progress: 65, lastActivity: 'First Aid Scenario' },
];

const StudentReports: React.FC = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Student Reports</h1>
            <p className="text-gray-600 mb-6">Monitor the progress of students in your class.</p>

            <Card className="p-0">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="p-4 font-semibold">Student Name</th>
                                <th className="p-4 font-semibold">Overall Progress</th>
                                <th className="p-4 font-semibold">Last Activity</th>
                                <th className="p-4 font-semibold">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y">
                            {studentsData.map(student => (
                                <tr key={student.id} className="hover:bg-gray-50">
                                    <td className="p-4">{student.name}</td>
                                    <td className="p-4">
                                        <div className="flex items-center">
                                            <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                                                <div className="bg-success h-2.5 rounded-full" style={{ width: `${student.progress}%` }}></div>
                                            </div>
                                            <span>{student.progress}%</span>
                                        </div>
                                    </td>
                                    <td className="p-4">{student.lastActivity}</td>
                                    <td className="p-4">
                                        <button className="text-primary font-semibold hover:underline">View Details</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>
        </div>
    );
};

export default StudentReports;