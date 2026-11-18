import React from 'react';

const experiences = [
    {
        title: 'ACM Secretary',
        organization: 'ACM Student Chapter',
        date: '2023 - Present',
        desc: 'Led organizing tech events, workshops, and coding competitions. Facilitated collaboration among developers.',
    },
    {
        title: 'Lead Coordinator',
        organization: 'RCCTechz',
        date: '2022 - 2024',
        desc: 'Directed the technical team, managing multiple tech initiatives and guiding junior members.',
    },
    {
        title: 'Hackathon Participant',
        organization: 'Various',
        date: 'Continuous',
        desc: 'Participated in multiple national-level hackathons, building MVP solutions under tight deadlines.',
    }
]

const ExperiencePanel = () => {
    return (
        <div className="space-y-6">
            <h2 className="text-4xl font-bold pixel-text text-purple-400 mb-6 border-b-2 border-gray-600 pb-2">ADVENTURE LOG</h2>

            <div className="relative border-l-4 border-purple-800 ml-4 pl-8 space-y-12 py-4">
                {experiences.map((exp, idx) => (
                    <div key={idx} className="relative">
                        {/* Timeline marker */}
                        <div className="absolute -left-[45px] top-1 w-6 h-6 bg-purple-600 border-2 border-black rotate-45 shadow-[0_0_10px_rgba(147,51,234,0.8)]"></div>

                        <div className="bg-gray-800/80 border-2 border-purple-900 border-t-purple-600 border-l-purple-600 p-5 shadow-[5px_5px_0px_rgba(0,0,0,0.5)]">
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                                <h3 className="text-2xl font-bold text-purple-300 pixel-text">{exp.title}</h3>
                                <span className="text-gray-400 text-sm font-mono bg-black/50 px-2 py-1 rounded">{exp.date}</span>
                            </div>
                            <h4 className="text-lg text-yellow-400 mb-4">{exp.organization}</h4>
                            <p className="text-gray-300">{exp.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ExperiencePanel;
