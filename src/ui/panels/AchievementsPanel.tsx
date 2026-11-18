import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar } from 'lucide-react';

const achievements = [
    {
        id: 1,
        title: "ACM Secretary 2026",
        popupTitle: "ACM Secretary 2026",
        desc: "Elected as the Secretary of RCCIIT\nACM Student Chapter for the\nAcademic Year 2025-26.",
        emoji: "🏆",
        color: "text-amber-400",
        glow: "from-amber-600/50 hover:from-amber-500/70",
        titleColor: "text-[#f7cf56]",
        date: "April, 2025"
    },
    {
        id: 2,
        title: "Best Student Chapter Award 2026",
        popupTitle: "Best Student Chapter Award 2026",
        desc: "Contributed to the RCCIIT ACM Student\nChapter in achieving the Best ACM \nStudent Chapter Award at the Annual\nRegional Meet 2026.",
        emoji: "💎",
        color: "text-cyan-300",
        glow: "from-cyan-600/30 hover:from-cyan-500/50",
        titleColor: "text-[#e0e0e0]",
        date: "January 31, 2026"
    },
    {
        id: 3,
        title: "Diversion Finalist",
        popupTitle: "Diversion Hackathon Finalist",
        desc: "Reached the Finals of the Diversion\nPan-India Hackathon, competing against\ntop teams from across the country.",
        emoji: "🏅",
        color: "text-rose-400",
        glow: "from-rose-700/40 hover:from-rose-600/60",
        titleColor: "text-[#f7cf56]",
        date: "November, 2025"
    },
    {
        id: 5,
        title: "Competitive Programmer",
        popupTitle: "Competitive Programmer",
        desc: "Solved coding problems on LeetCode\nand HackerRank, earning 5★ in Java\nand 4★ in C & Python on HackerRank.",
        emoji: "⚔️",
        color: "text-cyan-400",
        glow: "from-cyan-800/40 hover:from-cyan-700/60",
        titleColor: "text-[#f7cf56]",
        date: "Continuous"
    },
    {
        id: 6,
        title: "Academic Excellence",
        popupTitle: "Academic Excellence",
        desc: "Maintaining a CGPA of 8.96 while\nactively leading technical communities\nand building impactful projects.",
        emoji: "🎓",
        color: "text-slate-800",
        glow: "from-slate-700/40 hover:from-slate-600/60",
        titleColor: "text-[#e0e0e0]",
        date: "Semester 5"
    },
    {
        id: 7,
        title: "Lead Coordinator",
        popupTitle: "RCC-Techz Lead Coordinator",
        desc: "Appointed as the Lead Coordinator\nof RCCTechz (AY: 2025-26), the official coding club\nof RCC Institute of Information Technology",
        emoji: "👑",
        color: "text-amber-100",
        glow: "from-amber-700/40 hover:from-amber-600/60",
        titleColor: "text-[#e0e0e0]",
        date: "August, 2025"
    },
    {
        id: 9,
        title: "BuildIt Finalist",
        popupTitle: "BuildIt Hackathon Finalist",
        desc: "Qualified as a Finalist in the\nBuildIt Hackathon through multiple\ncompetitive evaluation rounds.",
        emoji: "⚒️",
        color: "text-emerald-500",
        glow: "from-emerald-800/40 hover:from-emerald-700/60",
        titleColor: "text-[#f7cf56]",
        date: "July 2026"
    },
    {
        id: 10,
        title: "Cultural Achievement",
        popupTitle: "Solo Dance Winner",
        desc: "Secured First position in the Solo\nDance Competition, showcasing\ncreativity, confidence, and stage presence.",
        emoji: "🎭",
        color: "text-yellow-500",
        glow: "from-yellow-800/40 hover:from-yellow-700/60",
        titleColor: "text-[#f7cf56]",
        date: "Cultural Fest- Regalia 2025"
    }
];

const AchievementsPanel = () => {
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const selectedAchievement = achievements.find(a => a.id === selectedId);

    // Decorative separator line for title
    const TitleSeparator = () => (
        <div className="flex items-center gap-1 opacity-80 mt-1 md:mt-1.5">
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#a37c44] rotate-45"></div>
            <div className="w-10 md:w-16 h-0.5 md:h-1 bg-[#a37c44]"></div>
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#a37c44] rotate-45"></div>
        </div>
    );

    return (
        <div className="w-full h-full flex flex-col items-center justify-center p-2 md:p-6 pb-20">

            {/* Outer Stone Wall Background */}
            <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="w-full max-w-3xl bg-[#1a1a1a] p-2 md:p-4 rounded-sm relative shadow-[0_30px_60px_rgba(0,0,0,0.9)] border-4 border-black border-b-[8px] border-r-[8px]"
                style={{
                    backgroundImage: 'linear-gradient(45deg, #1f1f1f 25%, transparent 25%, transparent 75%, #1f1f1f 75%, #1f1f1f), linear-gradient(45deg, #1f1f1f 25%, transparent 25%, transparent 75%, #1f1f1f 75%, #1f1f1f)',
                    backgroundSize: '40px 40px',
                    backgroundPosition: '0 0, 20px 20px',
                    boxShadow: 'inset 0 0 100px rgba(0,0,0,1)'
                }}
            >
                {/* Wall Torches (Decorative glow) */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-[120px] bg-gradient-to-r from-yellow-500/20 to-transparent blur-xl pointer-events-none z-10"></div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-[120px] bg-gradient-to-l from-yellow-500/20 to-transparent blur-xl pointer-events-none z-10"></div>

                {/* Inner Wooden Board */}
                <div className="bg-[#341f11] border-[4px] border-[#1e1008] border-b-[#472d1a] border-r-[#472d1a] rounded-sm p-2 md:p-4 relative shadow-[0_20px_40px_rgba(0,0,0,0.8),inset_0_0_120px_rgba(0,0,0,0.8)] flex flex-col items-center z-20">

                    {/* Header */}
                    <div className="flex items-center gap-1.5 sm:gap-3 mb-2 sm:mb-5 md:mb-8 w-full justify-center">
                        <div className="scale-75 sm:scale-100"><TitleSeparator /></div>
                        <h2 className="minecraft-title-main text-[#f7cf56] text-sm sm:text-xl md:text-4xl tracking-wide drop-shadow-[3px_3px_0_rgba(0,0,0,1)] pt-1">
                            ACHIEVEMENTS
                        </h2>
                        <div className="rotate-180 scale-75 sm:scale-100"><TitleSeparator /></div>
                    </div>

                    {/* Achievements Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 md:gap-5 w-full px-1 sm:px-2 md:px-3">
                        {achievements.map((item) => (
                            <motion.button
                                key={item.id}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setSelectedId(item.id)}
                                className="relative w-full max-sm:aspect-[6/5] aspect-[3/4] md:aspect-[4/5] bg-[#1a110a] border-[3px] sm:border-[6px] md:border-[10px] border-t-[#593922] border-l-[#593922] border-b-[#22130a] border-r-[#22130a] shadow-[inset_0_0_30px_rgba(0,0,0,1),0_8px_15px_rgba(0,0,0,0.8)] flex flex-col items-center justify-center sm:justify-between p-1 sm:p-2 md:p-4 group hover:border-[#8c5e35] transition-all overflow-hidden max-sm:gap-1"
                            >
                                {/* Inner Colored Glow Gradient */}
                                <div className={`absolute inset-0 bg-gradient-to-t ${item.glow} pointer-events-none transition-all duration-300 opacity-70`} />

                                {/* Inner Slot Highlight Bevel (Photo Frame Glass Effect) */}
                                <div className="absolute inset-0 border-[2px] border-black/60 opacity-80 pointer-events-none shadow-[inset_0_0_20px_black]" />

                                {/* Content Wrapper */}
                                <div className="relative z-10 flex flex-col items-center justify-center w-full h-full pt-1 gap-2 md:gap-3">
                                    {/* Emoji */}
                                    <div className="text-[17px] sm:text-4xl lg:text-5xl mb-0.5 sm:mb-2 drop-shadow-[2px_2px_0_rgba(0,0,0,1)] drop-shadow-[0_6px_6px_rgba(0,0,0,0.9)] group-hover:-translate-y-1 sm:group-hover:-translate-y-2 group-hover:scale-110 transition-transform duration-300">
                                        {item.emoji}
                                    </div>

                                    {/* Text Label */}
                                    <span className={`minecraft-text ${item.titleColor} text-[10px] sm:text-xs md:text-sm lg:text-sm text-center leading-[1.1] sm:leading-snug tracking-tighter sm:tracking-wide drop-shadow-[2px_2px_0_rgba(0,0,0,1)] font-bold whitespace-pre-wrap px-0.5 sm:px-1 w-full`}>
                                        {item.title}
                                    </span>
                                </div>
                            </motion.button>
                        ))}
                    </div>

                </div>
            </motion.div>

            {/* Popup Modal */}
            <AnimatePresence>
                {selectedId && selectedAchievement && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[300] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm pointer-events-auto"
                        onClick={() => setSelectedId(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-[#151515] border-[4px] border-[#404040] rounded-md shadow-2xl relative p-6 md:p-8 max-w-sm w-full flex flex-col items-center"
                        >
                            {/* Close Button UI Exactly Matching Screenshot */}
                            <button
                                onClick={() => setSelectedId(null)}
                                className="absolute top-2 right-2 w-8 h-8 bg-[#333333] border-[2px] border-[#555] rounded-sm flex items-center justify-center text-[#aaaaaa] hover:bg-[#555] hover:text-white transition-colors z-[350]"
                            >
                                <X size={20} className="drop-shadow-[1px_1px_0_rgba(0,0,0,0.8)]" strokeWidth={2.5} />
                            </button>

                            {/* Big Icon */}
                            <div className="text-4xl md:text-6xl mt-4 mb-4 drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] transform hover:rotate-6 transition-transform duration-500">
                                {selectedAchievement.emoji}
                            </div>

                            {/* Popup Title */}
                            <h3 className="minecraft-title-main text-[#f7cf56] text-xl md:text-2xl text-center drop-shadow-[3px_3px_0_rgba(0,0,0,1)] mb-4">
                                {selectedAchievement.popupTitle}
                            </h3>

                            {/* Description Block */}
                            <div className="w-full flex-col flex items-start mb-6">
                                <p className="font-mono text-gray-300 text-sm whitespace-pre-wrap leading-relaxed">
                                    {selectedAchievement.desc}
                                </p>
                            </div>

                            {/* Unlocked Bar UI */}
                            <div className="w-full bg-[#1c2e1c] border-[2px] border-[#364936] rounded-sm py-2 px-3 flex items-center gap-2 mb-3">
                                <span className="text-[#3c7840] font-black leading-none text-xl mt-[-2px]">+</span>
                                <span className="text-[#6aba5b] font-mono font-bold tracking-widest text-sm">
                                    UNLOCKED
                                </span>
                            </div>

                            {/* Date Label */}
                            <div className="w-full flex justify-start items-center gap-2 text-gray-400 font-mono text-xs opacity-80">
                                <Calendar size={14} className="opacity-90" />
                                <span>{selectedAchievement.date}</span>
                            </div>

                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default AchievementsPanel;
