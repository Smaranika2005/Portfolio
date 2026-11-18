import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const getExperienceData = () => [
    {
        id: 'isa',
        title: 'INDIA SPACE ACADEMY',
        role: 'Remote Sensing & GIS Intern',
        date: 'May 2026 - July 2026',
        status: 'COMPLETED',
        emoji: '🛰️',
        activityHeading: 'WHAT I DID',
        bullets: [
            'Worked with Remote Sensing, GIS, and Python for geospatial data analysis.',
            'Performed Drought Severity Mapping using satellite data and VCI.',
            'Conducted Urban Heat Island Mapping using Land Surface Temperature.',
            'Used Google Earth Engine for satellite data processing and visualization.'
        ],
        takeaway: 'Gained practical experience in satellite data analysis, GIS mapping, and Python-based geospatial processing.',
        links: [
            { label: 'CERTIFICATE', sub: 'View Certificate', type: 'green', url: 'https://drive.google.com/file/d/1ON52VSB8o-u0kfYWq8pX7ZcmnIGPVAk4/view?usp=sharing' },
            { label: 'REPORT', sub: 'View Report', type: 'blue', url: 'https://drive.google.com/drive/folders/10J3jec9qewjr2rbCFB8zFEm53rWdQ-oe?usp=drive_link' }
        ]
    },
    {
        id: 'wizard-communications',
        title: 'Wizard Communications PVT LTD',
        role: 'Full Stack Developer Intern',
        date: 'September 2026 - Present',
        status: 'ONGOING',
        emoji: '💻',
        activityHeading: 'WHAT I AM DOING',
        bullets: [
            'Learnt advanced JavaScript concepts from scratch.',
            'Working with React and Next.js, understanding routing and core workflows.',
            'Implementing API integration, API binding, and API development.',
            'Working on real-world client projects, handling client requirements, testing, code reviewing, and code analysis.'
        ],
        takeaway: 'Gaining hands-on experience in full-stack development, real-world project execution, client collaboration, and software quality assurance.',
        links: []
    }
];

const ExperiencePanelView = () => {
    const experiences = getExperienceData();
    // Default is null to keep it centered initially
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const [popups, setPopups] = useState<{ id: number, text: string, x: number, y: number }[]>([]);

    useEffect(() => {
        if (selectedId) {
            setTimeout(() => {
                const el = document.getElementById('details-panel');
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }, 100);
        }
    }, [selectedId]);

    const triggerPopup = (text: string, e: React.MouseEvent) => {
        const id = Date.now();
        setPopups(prev => [...prev, { id, text, x: e.clientX, y: e.clientY - 20 }]);
        setTimeout(() => setPopups(prev => prev.filter(p => p.id !== id)), 1200);
    };

    const selected = experiences.find(e => e.id === selectedId) || null;

    const CustomDivider = () => (
        <div className="flex items-center justify-center w-full my-2 opacity-50 pointer-events-none relative z-0">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#888] to-[#888]"></div>
            <div className="w-[3px] h-[3px] bg-[#a855f7] rotate-45 mx-2 shadow-[0_0_5px_#a855f7]"></div>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#888] to-[#888]"></div>
        </div>
    );

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full h-full relative overflow-y-auto overflow-x-hidden p-0 m-0"
        >
            {/* Top Left Title (Static Position) */}
            <div className="absolute top-1 left-2 sm:top-6 sm:left-16 lg:left-24 flex flex-col z-30 max-sm:scale-[0.55] max-sm:origin-top-left">
                <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-[14px] h-[14px] sm:w-[16px] sm:h-[16px] bg-[#00ffff] rotate-45 border-[2px] border-white shadow-[0_0_10px_rgba(0,255,255,0.8)]"></div>
                    <h2 className="text-3xl sm:text-4xl lg:text-[52px] minecraft-title-main text-[#f2f2f2] drop-shadow-[4px_4px_0_rgba(0,0,0,1)] tracking-widest leading-none">
                        EXPERIENCE
                    </h2>
                    <div className="w-[14px] h-[14px] sm:w-[16px] sm:h-[16px] bg-[#00ffff] rotate-45 border-[2px] border-white shadow-[0_0_10px_rgba(0,255,255,0.8)]"></div>
                </div>
            </div>

            {/* Main Content Layout */}
            <div className={`w-full h-full min-h-max flex flex-col lg:flex-row items-center justify-center p-2 sm:p-4 lg:p-10 pb-4 sm:pb-40 lg:pb-48 z-20 relative transition-all duration-500 ease-out max-sm:scale-[0.70] max-sm:origin-top ${selected ? "lg:items-start pt-[50px] sm:pt-[60px] lg:pt-[70px] xl:pt-[80px] gap-2 sm:gap-4 lg:gap-14 xl:gap-24 lg:pl-0 xl:pr-12" : "pt-[60px] sm:pt-[90px] lg:pt-[120px] xl:pt-[130px] gap-0"}`}>

                {/* Left Column */}
                <div className={`flex flex-col gap-1.5 sm:gap-3 w-full max-w-[280px] sm:max-w-[360px] flex-shrink-0 transition-all duration-500 ease-out ${selected ? "lg:mr-8 xl:mr-16 lg:-ml-6 xl:-ml-12 lg:mt-[5px] xl:mt-[10px]" : "lg:scale-105"}`}>

                    {selected && (
                        <div className="flex flex-col items-center mb-1 max-sm:hidden">
                            <span className="font-['Minecrafter'] text-[#f7cf56] text-xs sm:text-sm lg:text-base tracking-widest drop-shadow-[2px_2px_0_#000]">
                                LAUNCHING THROUGH MY
                            </span>
                            <span className="font-['Minecrafter'] text-[#f7cf56] text-xs sm:text-sm lg:text-base tracking-widest drop-shadow-[2px_2px_0_#000]">
                                PROFESSIONAL JOURNEY
                            </span>
                        </div>
                    )}

                    {/* Your Journey Box */}
                    <motion.div
                        animate={{ y: [-4, 4, -4] }}
                        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                        className="bg-[#111111]/90 backdrop-blur-md border-[3px] border-[#313131] border-t-[#4a4a4a] border-l-[#4a4a4a] p-3 flex flex-col shadow-[0_0_15px_rgba(247,207,86,0.2),_inset_0_0_10px_rgba(247,207,86,0.1),_6px_6px_0_rgba(0,0,0,0.6)] rounded-sm mt-2 lg:mt-6 max-sm:hidden"
                    >
                        <div className="flex items-center gap-2 mb-1.5">
                            <span className="text-lg">⛏️</span>
                            <span className="font-['Minecrafter'] text-[#f7cf56] tracking-widest text-[11px] sm:text-[13px] drop-shadow-[1.5px_1.5px_0_#000]">YOUR JOURNEY</span>
                        </div>
                        <p className="font-['Minecrafter'] text-[#d4d4d4] text-[11px] sm:text-[12px] leading-relaxed tracking-wider drop-shadow-md">
                            Every experience is a mission that fuels my growth and shapes my future.
                        </p>
                    </motion.div>

                    {/* Experience Selector */}
                    <motion.div
                        animate={{ y: [4, -4, 4] }}
                        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                        className="bg-[#111111]/90 backdrop-blur-md border-[3px] border-[#313131] border-t-[#4a4a4a] border-l-[#4a4a4a] flex flex-col shadow-[0_0_20px_rgba(168,85,247,0.2),_inset_0_0_10px_rgba(168,85,247,0.1),_6px_6px_0_rgba(0,0,0,0.6)] rounded-sm overflow-hidden"
                    >

                        <div className="flex items-center justify-center gap-2 py-2 border-b-[2px] border-[#222]">
                            <div className="w-1 h-1 bg-[#f7cf56] rotate-45"></div>
                            <span className="font-['Minecrafter'] text-[#f7cf56] tracking-widest text-[11px] sm:text-[13px] drop-shadow-[1.5px_1.5px_0_#000]">EXPERIENCE SELECTOR</span>
                            <div className="w-1 h-1 bg-[#f7cf56] rotate-45"></div>
                        </div>

                        <div className="flex flex-col p-2 gap-2">
                            {experiences.map(exp => (
                                <div
                                    key={exp.id}
                                    onClick={() => setSelectedId(exp.id === selectedId ? null : exp.id)}
                                    className={`relative flex items-center p-2.5 gap-2.5 cursor-pointer transition-all border-[2px] rounded-sm bg-[#0a0a0a] ${selectedId === exp.id ? 'border-[#a855f7] shadow-[inset_0_0_10px_rgba(168,85,247,0.4)]' : 'border-[#333] hover:border-[#555]'}`}
                                >
                                    {selectedId === exp.id && (
                                        <div className="absolute -left-2.5 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#a855f7] rotate-45 shadow-[0_0_6px_#a855f7]"></div>
                                    )}
                                    <div className="text-2xl filter drop-shadow-lg p-1 bg-[#1a1a1a] border-[2px] border-[#333] border-t-[#444] border-l-[#444] rounded-sm">
                                        {exp.emoji}
                                    </div>
                                    <div className="flex flex-col flex-1 overflow-hidden">
                                        <span className="font-['Minecrafter'] text-white text-[13px] tracking-wider drop-shadow-md truncate">{exp.title}</span>
                                        <span className="font-['Minecrafter'] text-[#a855f7] text-[10px] tracking-widest drop-shadow-md mb-0.5 truncate">{exp.role}</span>
                                        <div className="flex items-center gap-1 mt-0.5">
                                            <span className="text-[#888] text-[9px]">📅</span>
                                            <span className="font-['Minecrafter'] text-[#999] text-[9px] tracking-widest truncate">{exp.date}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1 self-center">
                                        <span className={`text-xs font-bold ${exp.status === 'COMPLETED' ? 'text-[#22c55e]' : 'text-[#f59e0b]'}`}>
                                            {exp.status === 'COMPLETED' ? '✓' : '⚡'}
                                        </span>
                                        <span className={`font-['Minecrafter'] ${exp.status === 'COMPLETED' ? 'text-[#16a34a]' : 'text-[#d97706]'} text-[9px] tracking-widest drop-shadow-md`}>
                                            {exp.status}
                                        </span>
                                    </div>
                                </div>
                            ))}

                            {/* Locked Card */}
                            <div className="flex items-center p-2.5 gap-2.5 border-[2px] border-[#222] bg-[#050505] rounded-sm opacity-60">
                                <div className="text-2xl filter drop-shadow-lg p-1 bg-[#1a1a1a] border-[2px] border-[#333] border-t-[#444] border-l-[#444] rounded-sm grayscale">
                                    🔒
                                </div>
                                <div className="flex flex-col flex-1 overflow-hidden">
                                    <span className="font-['Minecrafter'] text-white text-[13px] tracking-wider drop-shadow-md truncate">MORE EXPERIENCES</span>
                                    <span className="font-['Minecrafter'] text-[#999] text-[9px] tracking-widest drop-shadow-md mt-1 truncate">Stay tuned for more missions!</span>
                                </div>
                                <div className="flex items-center gap-1 self-center border-[2px] border-[#333] px-1.5 py-0.5 bg-[#111] rounded-sm">
                                    <span className="text-[#888] text-[9px]">🔒</span>
                                    <span className="font-['Minecrafter'] text-[#888] text-[8px] tracking-widest drop-shadow-md">LOCKED</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Right Column (Details) */}
                <AnimatePresence mode="wait">
                    {selected && (
                        <motion.div
                            key="details-panel"
                            id="details-panel"
                            initial={{ opacity: 0, x: 30, scale: 0.95 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            exit={{ opacity: 0, x: 30, scale: 0.95 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="bg-[#111111]/95 backdrop-blur-md border-[3px] border-[#313131] border-t-[#4a4a4a] border-l-[#4a4a4a] flex flex-col shadow-[8px_8px_0_rgba(0,0,0,0.7)] rounded-sm w-full max-w-[500px] p-2 sm:p-3 lg:p-4 h-auto max-sm:mb-2 sm:mb-20 lg:mb-28 xl:mb-32 max-sm:scale-95"
                        >
                            {/* Header */}
                            <div className="flex justify-between items-center mb-3">
                                <div className="flex items-center gap-2 bg-[#1e0a2d] border-[2px] border-[#3d185c] px-2 py-1 rounded-sm shadow-[inset_0_0_10px_rgba(168,85,247,0.2)]">
                                    <span className="text-[#a855f7] drop-shadow-[0_0_5px_#a855f7] text-sm md:text-base">♦</span>
                                    <span className="font-['Minecrafter'] text-[#a855f7] text-[10px] md:text-[11px] tracking-widest drop-shadow-[1px_1px_0_#000]">
                                        MISSION {selected.status}
                                    </span>
                                </div>
                                <div
                                    onClick={() => setSelectedId(null)}
                                    className="w-6 h-6 flex items-center justify-center bg-[#1a1a1a] border-[2px] border-[#333] border-t-[#4a4a4a] border-l-[#4a4a4a] rounded-sm cursor-pointer hover:bg-[#a855f7] hover:border-[#b86df8] transition-colors"
                                >
                                    <span className="font-['Minecrafter'] text-white text-sm">X</span>
                                </div>
                            </div>

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={selected.id}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="flex flex-col flex-1"
                                >
                                    {/* Title Block */}
                                    <div className="flex items-start gap-3">
                                        <div className="text-3xl filter drop-shadow-[3px_3px_0_#000] p-1.5 bg-[#1a1a1a] border-[2px] border-[#333] border-t-[#4a4a4a] border-l-[#4a4a4a] rounded-sm">
                                            {selected.emoji}
                                        </div>
                                        <div className="flex flex-col pt-0.5">
                                            <h3 className="font-['Minecrafter'] text-white text-lg md:text-xl lg:text-[20px] tracking-widest drop-shadow-[2px_2px_0_#000] uppercase">{selected.title}</h3>
                                            <span className="font-['Minecrafter'] text-[#a855f7] text-[11px] md:text-[12px] tracking-widest drop-shadow-[1.5px_1.5px_0_#000] mt-0.5">{selected.role}</span>
                                            <div className="flex items-center gap-1.5 mt-1">
                                                <span className="text-[#888] text-[9px]">📅</span>
                                                <span className="font-['Minecrafter'] text-[#999] text-[9px] tracking-widest">{selected.date}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {selected.bullets.length > 0 && (
                                        <>
                                            <CustomDivider />

                                            {/* What I Did */}
                                            <div className="flex flex-col gap-1.5">
                                                <div className="flex items-center gap-2">
                                                    <span className="text-lg drop-shadow-md">📦</span>
                                                    <span className="font-['Minecrafter'] text-[#e8a3b9] text-[10px] md:text-[11px] tracking-widest drop-shadow-[1.5px_1.5px_0_#000]">{selected.activityHeading}</span>
                                                </div>
                                                <div className="flex flex-col gap-1.5 ml-1 mt-0.5">
                                                    {selected.bullets.map((bullet, i) => (
                                                        <div key={i} className="flex gap-2 items-start">
                                                            <span className="text-[#a855f7] font-bold mt-[1px] drop-shadow-[0_0_2px_#a855f7] text-[9px]">➤</span>
                                                            <span className="font-['Minecrafter'] text-[#e0e0e0] text-[10px] md:text-[11px] tracking-wider leading-relaxed drop-shadow-md">{bullet}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </>
                                    )}

                                    <CustomDivider />

                                    {/* Key Takeaway */}
                                    <div className="flex flex-col gap-1.5">
                                        <div className="flex items-center gap-2">
                                            <span className="text-lg drop-shadow-md">🧰</span>
                                            <span className="font-['Minecrafter'] text-[#e8a3b9] text-[10px] md:text-[11px] tracking-widest drop-shadow-[1.5px_1.5px_0_#000]">KEY TAKEAWAY</span>
                                        </div>
                                        <p className="font-['Minecrafter'] text-[#d4d4d4] text-[10px] md:text-[11px] ml-1 tracking-wider leading-relaxed drop-shadow-md">
                                            {selected.takeaway}
                                        </p>
                                    </div>

                                    {selected.links.length > 0 && (
                                        <>
                                            <CustomDivider />

                                            {/* Resources & Links */}
                                            <div className="flex flex-col gap-1.5 mt-auto">
                                                <span className="font-['Minecrafter'] text-[#a855f7] text-[10px] md:text-[11px] tracking-widest drop-shadow-[1.5px_1.5px_0_#000]">RESOURCES & LINKS</span>
                                                <div className="flex flex-wrap gap-2">
                                                    {selected.links.map((link, i) => {
                                                        const colorMap: any = {
                                                            green: { border: 'border-[#16a34a]', bg: 'bg-[#14532d]/40', text: 'text-[#4ade80]', icon: '📜' },
                                                            blue: { border: 'border-[#2563eb]', bg: 'bg-[#1e3a8a]/40', text: 'text-[#60a5fa]', icon: '📄' },
                                                            orange: { border: 'border-[#ea580c]', bg: 'bg-[#7c2d12]/40', text: 'text-[#fb923c]', icon: '🔗' }
                                                        };
                                                        const c = colorMap[link.type];
                                                        return (
                                                            <a
                                                                key={i}
                                                                href={link.url !== '#' ? link.url : undefined}
                                                                onClick={(e) => {
                                                                    if (link.url === '#') {
                                                                        e.preventDefault();
                                                                        triggerPopup('MISSION STILL ONGOING', e);
                                                                    }
                                                                }}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className={`relative z-50 flex items-center gap-1.5 border-[2px] ${c.border} ${c.bg} px-2.5 py-1 rounded-sm cursor-pointer hover:brightness-125 transition-all w-max`}
                                                            >
                                                                <div className="p-0.5 bg-[#1a1a1a] border-[2px] border-[#333] border-t-[#4a4a4a] border-l-[#4a4a4a] rounded-sm text-xs">
                                                                    {c.icon}
                                                                </div>
                                                                <span className={`font-['Minecrafter'] ${c.text} text-[9px] tracking-widest drop-shadow-md`}>{link.label}</span>
                                                            </a>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </motion.div>
                            </AnimatePresence>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Click Popups */}
                <AnimatePresence>
                    {popups.map(popup => (
                        <motion.div
                            key={popup.id}
                            initial={{ opacity: 0, y: 0 }}
                            animate={{ opacity: 1, y: -40 }}
                            exit={{ opacity: 0, scale: 0.5 }}
                            transition={{ duration: 1 }}
                            className="fixed z-[9999] text-yellow-300 pointer-events-none drop-shadow-[2px_2px_0_rgba(0,0,0,1)] font-['Minecrafter'] text-xs md:text-sm whitespace-nowrap"
                            style={{ left: popup.x, top: popup.y, transform: 'translate(-50%, -50%)' }}
                        >
                            {popup.text}
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </motion.div >
    );
};

export default ExperiencePanelView;
