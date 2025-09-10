import React, { useState } from 'react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { ChevronDown } from '../../components/Icons';
import { motion, AnimatePresence } from 'framer-motion';
import ToggleSwitch from '../../components/ui/ToggleSwitch';

interface Module {
  title: string;
  description: string;
  icon: string; // Emoji for simplicity
  regions: string[];
}

const modulesData: Module[] = [
  { title: 'Earthquakes', description: 'Learn how to Drop, Cover, and Hold On.', icon: '🌍', regions: ['North', 'East'] },
  { title: 'Floods', description: 'Understand flood warnings and evacuation.', icon: '🌊', regions: ['East', 'South'] },
  { title: 'Cyclones', description: 'Prepare for high winds and storm surges.', icon: '🌪️', regions: ['East', 'South'] },
  { title: 'Fires', description: 'Know your escape routes and how to use an extinguisher.', icon: '🔥', regions: ['All'] },
  { title: 'Stampedes', description: 'Stay safe in crowded places during emergencies.', icon: '🏃', regions: ['All'] },
  { title: 'Landslides', description: 'Recognize warning signs and secure your home.', icon: '⛰️', regions: ['North'] },
];

const ModuleCard: React.FC<{ module: Module, isExpanded: boolean, onClick: () => void }> = ({ module, isExpanded, onClick }) => {
    return (
        <motion.div layout className="h-full">
            <Card className="flex flex-col text-center p-6 h-full">
                <motion.div layout="position">
                    <div className="text-6xl mb-4">{module.icon}</div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{module.title}</h3>
                    <p className="text-gray-600 mb-4 flex-grow">{module.description}</p>
                </motion.div>

                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            className="overflow-hidden text-left"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                            <div className="border-t pt-4 mt-4 space-y-2 text-gray-600">
                                <p><strong>Safety Precautions:</strong> This is where detailed information about safety precautions for {module.title} would appear. It would include actionable steps and guidelines.</p>
                                <p><strong>Emergency Contacts:</strong> Important numbers and links for help during a {module.title} event.</p>
                                <a href="#" className="text-primary hover:underline font-semibold block mt-2">Read NDMA Guidelines &rarr;</a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
                
                <div className="mt-auto pt-4">
                     <Button variant="primary" onClick={onClick}>
                        {isExpanded ? 'Show Less' : 'Learn More'}
                    </Button>
                </div>
            </Card>
        </motion.div>
    )
}

const GyanKendra: React.FC = () => {
  const [location, setLocation] = useState('All');
  const [expandedModule, setExpandedModule] = useState<string | null>(null);

  const handleToggle = (title: string) => {
    setExpandedModule(expandedModule === title ? null : title);
  };

  const filteredModules = modulesData.sort((a, b) => {
    const aIsRelevant = a.regions.includes(location) || a.regions.includes('All');
    const bIsRelevant = b.regions.includes(location) || b.regions.includes('All');
    if (aIsRelevant && !bIsRelevant) return -1;
    if (!aIsRelevant && bIsRelevant) return 1;
    return 0;
  });

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <header className="text-center">
        <h1 className="text-4xl font-extrabold text-primary mb-2">📚 Gyan Kendra – The Knowledge Center</h1>
        <p className="text-lg text-gray-600">Your Interactive Disaster Management Learning Hub</p>
        <p className="text-gray-500 mt-1">Learn about potential hazards and how to respond safely.</p>
      </header>

      {/* Controls: Localization & Accessibility */}
      <Card className="p-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center space-x-2">
            <label htmlFor="location-select" className="font-semibold">Your Region:</label>
            <div className="relative">
                <select 
                    id="location-select" 
                    value={location} 
                    onChange={e => setLocation(e.target.value)}
                    className="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-base focus:outline-none focus:ring-primary focus:border-primary"
                >
                    <option value="All">All India</option>
                    <option value="North">North</option>
                    <option value="East">East</option>
                    <option value="South">South</option>
                    <option value="West">West</option>
                </select>
                <ChevronDown className="h-5 w-5 text-gray-400 absolute top-1/2 right-3 transform -translate-y-1/2 pointer-events-none" />
            </div>
        </div>
        <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
                <label className="font-semibold text-gray-700">Text-to-Speech</label>
                <ToggleSwitch />
            </div>
            <button className="font-semibold text-primary hover:underline">Language: English</button>
        </div>
      </Card>

      {/* Interactive Learning Modules */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
        {filteredModules.map(module => (
           <ModuleCard 
            key={module.title} 
            module={module}
            isExpanded={expandedModule === module.title}
            onClick={() => handleToggle(module.title)}
          />
        ))}
      </div>
      
      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm pt-8 border-t">
          <p>For more information, visit: 
              <a href="#" className="text-primary hover:underline mx-1">NDMA</a> | 
              <a href="#" className="text-primary hover:underline mx-1">FEMA</a> | 
              <a href="#" className="text-primary hover:underline mx-1">UNDRR</a>
          </p>
          <p className="mt-2">&copy; 2024 Suraksha Kawach. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default GyanKendra;