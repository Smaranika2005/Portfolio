
const projects = [
    {
        title: 'Mahanayak',
        desc: 'An immersive tribute website celebrating Uttam Kumar, offering a cinematic mood experience with classic Bengali music.',
        tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
        icon: '🏰', // Castle
        features: [
            'Responsive cinematic poster design',
            'Curated classic Bengali music playlist',
            'Real-time audio playback controls',
            'Live viewer count',
            'Shuffle and repeat modes',
        ],
        link: '#',
    },
    {
        title: 'Arogya Jal',
        desc: 'Water Quality Monitoring System',
        tech: ['IoT', 'Node.js', 'React', 'MongoDB'],
        icon: '🏛️', // Water Temple
        features: ['Real-time Monitoring', 'Alerts', 'Data Visualization'],
        link: '#',
    },
    {
        title: 'Quiz App',
        desc: 'Online Quiz Platform',
        tech: ['React', 'Spring Boot', 'PostgreSQL'],
        icon: '⚙️', // Workshop
        features: ['User Roles', 'Real-time Leaderboard', 'Notifications'],
        link: '#',
    }
]

const ProjectsPanel = () => {
    return (
        <div className="space-y-6">
            <h2 className="text-4xl font-bold pixel-text text-yellow-400 mb-6 border-b-2 border-gray-600 pb-2">PROJECTS INVENTORY</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((proj, idx) => (
                    <div key={idx} className="bg-gray-800 border-4 border-gray-600 p-4 flex flex-col shadow-[inset_0px_0px_10px_rgba(0,0,0,0.5)] transform transition-transform hover:-translate-y-1 hover:border-gray-400">
                        <div className="text-4xl mb-4 text-center">{proj.icon}</div>
                        <h3 className="text-xl font-bold text-blue-300 pixel-text mb-2">{proj.title}</h3>
                        <p className="text-gray-300 text-sm mb-4 flex-1">{proj.desc}</p>

                        <div className="flex flex-wrap gap-2 mb-4">
                            {proj.tech.map(t => (
                                <span key={t} className="px-2 py-1 bg-gray-900 border border-gray-700 text-xs rounded text-gray-400">{t}</span>
                            ))}
                        </div>

                        <button className="minecraft-button w-full text-sm py-2">View Details</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProjectsPanel;
