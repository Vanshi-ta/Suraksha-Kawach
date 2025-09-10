import React from 'react';
import { useAuth } from '../../context/AuthContext';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { Link } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'School A', progress: 85 },
  { name: 'School B', progress: 72 },
  { name: 'School C', progress: 91 },
  { name: 'School D', progress: 65 },
];

const AdminDashboard: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Administrator Dashboard</h1>
        <p className="text-gray-600 mt-1">Welcome, {user?.name}. Oversee district-wide preparedness.</p>
      </div>
      
       <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6 bg-gradient-to-br from-red-500 to-orange-600 text-white">
              <h2 className="text-2xl font-bold">Send Emergency Alert</h2>
              <p className="my-2">Broadcast a critical message to all students and teachers in the district.</p>
              <Link to="/satark-hub">
                <Button className="bg-white text-red-600">Compose Alert</Button>
              </Link>
          </Card>
          <Card className="p-6 bg-gradient-to-br from-primary to-blue-700 text-white">
              <h2 className="text-2xl font-bold">View School Progress</h2>
              <p className="my-2">Monitor disaster preparedness training completion across all schools.</p>
               <Button className="bg-white text-primary">View Reports</Button>
          </Card>
      </div>

      <Card className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">School-wise Progress Overview</h2>
        <div style={{ width: '100%', height: 300 }}>
          <ResponsiveContainer>
            <BarChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="progress" fill="#005A9C" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
};

export default AdminDashboard;
