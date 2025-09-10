import React from 'react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';

const AbhyasArena: React.FC = () => {
    return (
        <div className="space-y-12">
            {/* Header Section */}
            <header className="text-center">
                <h1 className="text-4xl font-extrabold text-primary mb-2">🎮 Abhyas Arena – The Practice Arena</h1>
                <p className="text-lg text-gray-600">Learn by Doing. Practice. Prepare.</p>
                <p className="text-gray-500 mt-1">Test your knowledge and sharpen your skills in a gamified environment.</p>
            </header>

            {/* Gamification Features */}
            <Card className="p-4 flex flex-wrap items-center justify-around gap-4 bg-gray-800 text-white">
                <div>
                    <span className="font-bold text-lg">My Leaderboard Rank: </span>
                    <span className="text-2xl font-bold text-action-DEFAULT">#5</span>
                </div>
                <div>
                    <span className="font-bold text-lg">Badges Earned: </span>
                    <span className="text-2xl">🏅🥈🥉</span>
                </div>
                <div className="w-full md:w-auto flex-grow max-w-sm">
                    <div className="w-full bg-gray-600 rounded-full h-4">
                        <div className="bg-success rounded-full h-4" style={{ width: '75%' }}></div>
                    </div>
                    <p className="text-sm text-center mt-1">XP 750 / 1000 (Level 5)</p>
                </div>
            </Card>

            {/* Tiered Gamification Layout */}
            <div className="space-y-8">
                {/* Tier 1 */}
                <TierCard
                    tier="1"
                    title="Accessible Gamified Learning"
                    colorClasses="from-green-500 to-teal-600"
                >
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <GameCard title="Fire Safety Quiz" description="Answer MCQs to earn points." />
                        <GameCard title="Hazard Hunt" description="Spot potential dangers in a picture." />
                        <GameCard title="First Aid Scenarios" description="Choose the right action." />
                    </div>
                </TierCard>

                {/* Tier 2 */}
                <TierCard
                    tier="2"
                    title="Immersive 3D Simulations"
                    colorClasses="from-purple-600 to-indigo-700"
                >
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <img src="https://picsum.photos/400/200" alt="3D school simulation" className="rounded-lg shadow-lg w-full md:w-1/2" />
                        <div className="text-center md:text-left">
                            <p className="mb-4">Navigate a virtual replica of your school during a simulated earthquake. Find safe zones and practice evacuation routes.</p>
                            <Button className="bg-white text-black">Start Simulation</Button>
                        </div>
                    </div>
                </TierCard>

                {/* Tier 3 */}
                <TierCard
                    tier="3"
                    title="VR/AR Extension Modules"
                    colorClasses="from-gray-800 to-black"
                >
                    <div className="flex flex-col md:flex-row items-center gap-6">
                         <img src="https://picsum.photos/400/201" alt="VR headset" className="rounded-lg shadow-lg w-full md:w-1/2" />
                        <div className="text-center md:text-left">
                            <p className="mb-4">Coming Soon: Connect a VR headset for unparalleled immersion or use your phone's camera for AR-based safety drills.</p>
                            <Button className="bg-white text-black" disabled>Experience in AR/VR</Button>
                        </div>
                    </div>
                </TierCard>
            </div>

            {/* Footer */}
            <footer className="text-center text-gray-500 text-sm pt-8 border-t">
                <p>Inspired by: 
                    <a href="#" className="text-primary hover:underline mx-1">Duolingo</a> | 
                    <a href="#" className="text-primary hover:underline mx-1">Kahoot!</a>
                </p>
                <p className="mt-2">&copy; 2024 Suraksha Kawach. All rights reserved.</p>
            </footer>
        </div>
    );
};

interface TierCardProps {
    tier: string;
    title: string;
    colorClasses: string;
    children: React.ReactNode;
}
const TierCard: React.FC<TierCardProps> = ({ tier, title, colorClasses, children }) => (
    <Card className={`p-6 bg-gradient-to-br text-white overflow-hidden relative ${colorClasses}`}>
        <div className="absolute -top-8 -right-8 text-white/10 font-black text-9xl">{tier}</div>
        <h2 className="text-3xl font-bold mb-4 relative z-10">{title}</h2>
        <div className="relative z-10">{children}</div>
    </Card>
);

const GameCard: React.FC<{ title: string, description: string }> = ({ title, description }) => (
    <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm hover:bg-white/30 transition-colors">
        <h4 className="font-bold">{title}</h4>
        <p className="text-sm">{description}</p>
    </div>
);

export default AbhyasArena;
