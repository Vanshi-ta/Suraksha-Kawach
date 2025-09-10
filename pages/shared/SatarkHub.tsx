import React from 'react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { UserRole } from '../../types';
import { useAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

type Severity = 'Severe' | 'Moderate' | 'Advisory';

interface Alert {
  type: string;
  severity: Severity;
  time: string;
  source: string;
  message: string;
}

const alertsData: Alert[] = [
  { type: 'Flood', severity: 'Severe', time: '10 mins ago', source: 'IMD', message: 'Heavy rainfall expected in the next 24 hours. Low-lying areas are at high risk of flooding.' },
  { type: 'Cyclone', severity: 'Moderate', time: '2 hours ago', source: 'NDMA', message: 'Cyclone "Vayu" approaching the coast. Wind speeds expected to reach 80-90 km/h.' },
  { type: 'Earthquake', severity: 'Advisory', time: '1 day ago', source: 'CWC', message: 'Minor tremors felt in the region. No immediate danger, but stay cautious.' },
];

const severityStyles: { [key in Severity]: { bg: string; text: string; ring: string } } = {
  Severe: { bg: 'bg-severity-high/10', text: 'text-severity-high', ring: 'ring-severity-high' },
  Moderate: { bg: 'bg-severity-medium/10', text: 'text-severity-medium', ring: 'ring-severity-medium' },
  Advisory: { bg: 'bg-green-500/10', text: 'text-green-600', ring: 'ring-green-500' },
};

const SatarkHub: React.FC = () => {
  const { user } = useAuth();
  
  return (
    <div className="space-y-8">
      <header className="text-center">
        <h1 className="text-4xl font-extrabold text-primary mb-2">⚠️ Satark Hub – The Alert Hub</h1>
        <p className="text-lg text-gray-600">Stay Informed. Stay Safe.</p>
        <p className="text-gray-500 mt-1">Live alerts from official government agencies like NDMA & IMD.</p>
      </header>

      {user?.role === UserRole.ADMIN && <AdminBroadcast />}

      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-800">Live Alert Feed (District-wise)</h2>
        {alertsData.map((alert, index) => (
          <AlertCard key={index} alert={alert} />
        ))}
      </div>

      {user?.role === UserRole.TEACHER && <DigitalRollCall />}
      
      <footer className="text-center text-gray-500 text-sm pt-8 border-t">
          <p>Official Sources: 
              <a href="#" className="text-primary hover:underline mx-1">NDMA</a> | 
              <a href="#" className="text-primary hover:underline mx-1">IMD</a> | 
              <a href="#" className="text-primary hover:underline mx-1">CWC</a> |
              <a href="#" className="text-primary hover:underline mx-1">SACHET</a>
          </p>
          <p className="mt-2">Your privacy and data security are our top priority.</p>
      </footer>
    </div>
  );
};

const AlertCard: React.FC<{ alert: Alert }> = ({ alert }) => {
    const styles = severityStyles[alert.severity];
    const learnLink = `/gyan-kendra#${alert.type.toLowerCase()}`;
    const practiceLink = `/abhyas-arena#${alert.type.toLowerCase()}`;

    return (
        <Card className={`p-4 border-l-4 ${styles.bg} border-current ${styles.text}`}>
            <div className="flex justify-between items-start">
                <div>
                    <span className={`inline-block rounded-full px-3 py-1 text-sm font-semibold ${styles.bg} ${styles.text} ring-1 ring-inset ${styles.ring}`}>{alert.severity}</span>
                    <h3 className="text-xl font-bold text-gray-800 mt-2">{alert.type} Warning</h3>
                </div>
                <div className="text-right text-sm">
                    <p>{alert.time}</p>
                    <p className="font-semibold">Source: {alert.source}</p>
                </div>
            </div>
            <p className="text-gray-700 my-4">{alert.message}</p>
            <div className="flex space-x-2 border-t pt-3 mt-3">
                <Link to={learnLink}>
                    <Button className="bg-primary text-white text-sm">📘 Learn Safety</Button>
                </Link>
                <Link to={practiceLink}>
                    <Button className="bg-action text-white text-sm">🎮 Practice Drill</Button>
                </Link>
            </div>
        </Card>
    );
};

const AdminBroadcast: React.FC = () => (
    <Card className="p-6 bg-blue-50 border-primary border-2">
        <h2 className="text-2xl font-bold text-primary mb-4">Campus-Level Communication</h2>
        <textarea 
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
            rows={3}
            placeholder="Type your broadcast message here..."
        ></textarea>
        <div className="mt-4 text-right">
            <Button>Send Broadcast</Button>
        </div>
    </Card>
);

const DigitalRollCall: React.FC = () => (
    <Card className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Digital Roll-Call</h2>
        <p className="text-gray-600 mb-4">Mark students as safe during an emergency. Real-time headcount: <span className="font-bold text-success">25</span>/<span className="font-bold text-gray-800">30</span> Safe.</p>
        <div className="overflow-x-auto">
            <table className="w-full text-left">
                <thead>
                    <tr className="border-b">
                        <th className="p-2">Student Name</th>
                        <th className="p-2">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b">
                        <td className="p-2">Rohan Sharma</td>
                        <td className="p-2 flex space-x-2"><Button size="sm" className="bg-success text-white">✅ Safe</Button><Button size="sm" className="bg-gray-200">⚠️ Unconfirmed</Button></td>
                    </tr>
                    <tr className="border-b">
                        <td className="p-2">Priya Singh</td>
                        <td className="p-2 flex space-x-2"><Button size="sm" className="bg-success text-white">✅ Safe</Button><Button size="sm" className="bg-gray-200">⚠️ Unconfirmed</Button></td>
                    </tr>
                    <tr>
                        <td className="p-2">Amit Kumar</td>
                        <td className="p-2 flex space-x-2"><Button size="sm" className="bg-gray-200">✅ Safe</Button><Button size="sm" className="bg-severity-medium text-white">⚠️ Unconfirmed</Button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </Card>
);


export default SatarkHub;