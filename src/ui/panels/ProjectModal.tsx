import { ExternalLink, X } from 'lucide-react';
import { motion } from 'framer-motion';

const containerVars = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
};

const childVars = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { type: 'spring' as const, stiffness: 250, damping: 20 }
    }
};

const Github = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
);

export const projectDataMap: Record<number, any> = {
    1: {
        id: 1,
        title: "Collaborative Notepad",
        desc: "A real-time collaborative notepad that allows multiple users to write, share and edit notes together seamlessly.",
        tech: ["Nest.js", "Flask", "Socket.io", "GitLab CI/CD"],
        features: [
            "Real-time collaboration with instant sync",
            "Unique room id for each session",
            "Toggle between light and dark themes",
            "Copy the room URL and invite collaborators instantly",
        ],
        live: "https://collaborative-notepad-three.vercel.app/",
        github: "https://github.com/Smaranika2005/Collaborative-Notepad",
        numColor: "bg-[#331166] border-[#1d0542]",
        titleColor: "text-[#331166]",
        sectionColor: "text-[#331166]"
    },
    2: {
        id: 2,
        title: "Arogya Jal",
        desc: "An IoT-based water quality monitoring system providing real-time analytics and alerts for clean water access.",
        tech: ["IoT", "Node.js", "React", "TypeScript", "ESP32"],
        features: [
            "Real-time IoT-based water quality monitoring",
            "Integrates with existing ASHA worker network",
            "AI powered early prediction of waterborne diseases",
            "Weighted regional WQi for accurate risk assessment",
            "Instant alerts for timely intervention."
        ],
        live: "/SIH2026-TechQuest.pdf",
        liveLabel: "Documentation",
        github: "https://github.com/Smaranika2005/Arogya-Jal",
        numColor: "bg-[#0b4816] border-[#05280b]",
        titleColor: "text-[#0b4816]",
        sectionColor: "text-[#0b4816]"
    },
    3: {
        id: 3,
        title: "QuizFlow",
        desc: "A dynamic online quiz platform enabling educators to create and manage quizzes with real-time leaderboards.",
        tech: ["React", "Spring Boot", "PostgreSQL", "WebSocket"],
        features: [
            "Role-based access (Student/Teacher)",
            "Real-time multiplayer leaderboard",
            "Push notifications for quiz events",
            "Detailed performance analytics",
            "Timed quiz sessions"
        ],
        live: "https://lnkd.in/p/dYvdk7WD",
        liveLabel: "Demo video",
        github: "https://github.com/Smaranika2005/Quizapp_backend",
        numColor: "bg-[#0c2a51] border-[#051428]",
        titleColor: "text-[#0c2a51]",
        sectionColor: "text-[#0c2a51]"
    },
    4: {
        id: 4,
        title: "Draftify",
        desc: "An interactive and customizable resume builder that allows users to create professional resumes through a user-friendly form interface.",
        tech: ["HTML", "CSS", "JavaScript", "Docker"],
        features: [
            "Interactive form-based resume creation with real-time live preview.",
            "Direct code editor for advanced resume customization.",
            "One-click PDF export with professional formatting.",
            "Distraction-free writing mode"
        ],
        live: "https://smart-resume-generator-six.vercel.app/",
        github: "https://github.com/Smaranika2005/Smart-Resume-Generator",
        numColor: "bg-[#432906] border-[#211202]",
        titleColor: "text-[#432906]",
        sectionColor: "text-[#432906]"
    },
    5: {
        id: 5,
        title: "Mahanayak",
        desc: "An immersive tribute website celebrating Uttam Kumar, offering a cinematic mood experience with classic Bengali music.",
        tech: ["Next.js","TypeScript", "Tailwind CSS", "Node.js"],
        features: [
            "Responsive cinematic poster design",
            "Curated classic Bengali music playlist",
            "Real-time audio playback controls",
            "Live viewer count, shuffle and repeat modes",
        ],
        live: "https://mahanayak-tribute.vercel.app/",
        github: "https://github.com/Smaranika2005/Mahanayak",
        numColor: "bg-[#4f0c0c] border-[#2a0404]",
        titleColor: "text-[#4f0c0c]",
        sectionColor: "text-[#4f0c0c]"
    },
    6: {
        id: 6,
        title: "Auto docker\nExtension",
        desc: "A VS Code extension to instantly generate Dockerfiles and docker-compose configurations for any project stack.",
        tech: ["TypeScript", "VS Code API", "Docker", "Javascript"],
        features: [
            "One-click Dockerfile generation",
            "Auto-detection of project tech stack",
            "Customizable compose templates",
            "Integrated container status",
            "Lightweight and fast execution"
        ],
        live: "/WORKFLOW.md",
        liveLabel: "Documentation",
        github: "https://github.com/Smaranika2005/Auto-Docker",
        numColor: "bg-[#25184a] border-[#110a26]",
        titleColor: "text-[#25184a]",
        sectionColor: "text-[#25184a]"
    }
};

const HexagonBadge = ({ number, colors }: { number: number, colors: string }) => (
    <div className="relative w-12 h-14 md:w-16 md:h-[72px] flex items-center justify-center -ml-2 filter drop-shadow-md">
        <div className={`absolute inset-0 ${colors.split(' ')[0]} border-[3px] border-[#1a1a1a] shadow-[inset_0_2px_4px_rgba(255,255,255,0.3)]`} style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', borderRadius: '2px' }}></div>
        <div className={`absolute inset-0 ${colors.split(' ')[0]} m-[3px] border-2 border-white/20`} style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}></div>
        <span className="relative z-10 text-white text-xl md:text-3xl font-bold minecraft-text mt-1 drop-shadow-[2px_2px_0_rgba(0,0,0,0.8)]">{number}</span>
    </div>
);

const SectionDivider = ({ title, color }: { title: string, color: string }) => (
    <div className="flex items-center gap-2 mb-3 mt-6 pl-1 md:pl-2">
        <span className={`minecraft-text ${color} text-sm md:text-[15px] whitespace-nowrap drop-shadow-[0_1px_0_rgba(255,255,255,0.5)]`}>{title}</span>
        <div className="flex-1 flex items-center opacity-60">
            <div className="h-[2px] bg-[#614e3b] w-3"></div>
            <div className="w-2 h-2 rotate-45 border-[1.5px] border-[#614e3b]"></div>
            <div className="h-[2px] bg-[#614e3b] flex-1"></div>
        </div>
    </div>
);

export const ProjectModal = ({ projectId, onClose }: { projectId: number, onClose: () => void }) => {
    const p = projectDataMap[projectId];
    if (!p) return null;

    return (
        <div className="relative w-full max-w-[440px] md:max-w-[500px]">
            {/* Outer Dark Frame */}
            <motion.div
                initial={{ rotateX: 30, scale: 0.8, opacity: 0 }}
                animate={{ rotateX: 0, scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 150, damping: 15 }}
                className="bg-[#241f1c] p-1.5 sm:p-2 md:p-3 rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.9)] border-4 border-[#12100e] relative z-10"
            >

                {/* Close Button overlapping edge */}
                <motion.button
                    initial={{ scale: 0, rotate: -90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 12, delay: 0.4 }}
                    whileHover={{ scale: 1.15, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={onClose}
                    className="absolute -top-3 -right-3 md:-top-4 md:-right-4 w-10 h-10 md:w-12 md:h-12 bg-[#4a1c13] border-[3px] border-t-[#783626] border-l-[#783626] border-[#2b0e07] rounded-md shadow-xl flex items-center justify-center z-50 transition-colors"
                >
                    <X className="w-6 h-6 md:w-8 md:h-8 text-[#f25c40] drop-shadow-[1px_1px_0_rgba(0,0,0,0.8)] stroke-[3]" />
                </motion.button>

                {/* Inner Parchment */}
                <motion.div
                    variants={containerVars}
                    initial="hidden"
                    animate="visible"
                    className="bg-[#e4ccaa] border-[3px] border-[#4a3622] rounded shadow-[inset_0_0_20px_rgba(100,60,20,0.3)] p-3 sm:p-4 md:p-6 pb-4 sm:pb-6 relative overflow-hidden h-auto max-sm:max-h-[70vh] md:h-[85vh] max-h-[750px] overflow-y-auto w-full custom-scrollbar"
                >

                    {/* Dirt texture overlay very faint */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '4px 4px' }}></div>

                    {/* Header Row */}
                    <motion.div variants={childVars} className="flex items-center gap-3 md:gap-4 mb-5 relative z-10">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", bounce: 0.7, delay: 0.3 }}
                        >
                            <HexagonBadge number={p.id} colors={p.numColor} />
                        </motion.div>
                        <h2 className={`minecraft-text ${p.titleColor} text-xl sm:text-2xl md:text-[26px] leading-tight whitespace-pre-line drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)]`}>
                            {p.title}
                        </h2>
                    </motion.div>

                    {/* Description */}
                    <motion.p variants={childVars} className="text-[#3b2d1f] font-medium leading-relaxed text-sm md:text-[15px] mb-2 px-1 md:px-2 relative z-10">
                        {p.desc}
                    </motion.p>

                    {/* Tech Stack */}
                    <motion.div variants={childVars} className="relative z-10">
                        <SectionDivider title="TECH STACK" color={p.sectionColor} />
                        <div className="flex flex-wrap gap-2 px-1 md:px-2">
                            {p.tech.map((t: string) => (
                                <motion.span whileHover={{ scale: 1.1, rotate: 2 }} key={t} className="bg-[#f0dfc3] border border-[#a69075] text-[#4a3b2b] px-3 py-1 text-xs md:text-sm font-semibold rounded-[4px] shadow-sm cursor-default inline-block">
                                    {t}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Features */}
                    <motion.div variants={childVars} className="relative z-10">
                        <SectionDivider title="FEATURES" color={p.sectionColor} />
                        <ul className="space-y-3 px-1 md:px-2">
                            {p.features.map((f: string, i: number) => (
                                <motion.li variants={childVars} key={i} className="flex items-start gap-3">
                                    <div className="mt-[6px] w-[5px] h-[5px] rotate-45 bg-[#4a3b2b] shrink-0 opacity-80"></div>
                                    <span className="text-[#3b2d1f] text-sm md:text-[15px] leading-tight font-medium">{f}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Links */}
                    <motion.div variants={childVars} className="relative z-10">
                        <SectionDivider title="LINKS" color={p.sectionColor} />
                        <div className="flex flex-col sm:flex-row gap-3 px-1 md:px-2">
                            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href={p.live} target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-[#512c81] border-[3px] border-t-[#784db3] border-l-[#784db3] border-[#2b134d] text-white py-2.5 px-4 rounded-sm shadow-md transition-shadow group">
                                <ExternalLink className="w-4 h-4 md:w-5 md:h-5 text-purple-200 group-hover:scale-110 transition-transform" />
                                <span className="minecraft-text text-xs md:text-sm drop-shadow-[1px_1px_0_rgba(0,0,0,0.8)] pt-1">{p.liveLabel ?? "Live Demo"}</span>
                            </motion.a>
                            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href={p.github} target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-[#2c5f2b] border-[3px] border-t-[#498b47] border-l-[#498b47] border-[#183a17] text-white py-2.5 px-4 rounded-sm shadow-md transition-shadow group">
                                <Github className="w-4 h-4 md:w-5 md:h-5 text-green-200 group-hover:scale-110 transition-transform" />
                                <span className="minecraft-text text-xs md:text-sm drop-shadow-[1px_1px_0_rgba(0,0,0,0.8)] pt-1">GitHub Repository</span>
                            </motion.a>
                        </div>
                    </motion.div>

                </motion.div>
            </motion.div>

            {/* Custom scrollbar styles dynamically inserted just for safety */}
            <style>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 8px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: rgba(100, 60, 20, 0.1);
                    border-left: 1px solid rgba(100, 60, 20, 0.2);
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #8b6b47;
                    border: 1px solid #4a3622;
                    border-radius: 4px;
                }
            `}</style>
        </div>
    );
};
