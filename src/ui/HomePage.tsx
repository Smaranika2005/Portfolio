import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { User, Cpu, Box, Mail } from 'lucide-react'
import SkillsPanel from './panels/SkillsPanel'
import EducationPanelView from './panels/EducationPanelView'
import AchievementsPanel from './panels/AchievementsPanel'
import ExperiencePanelView from './panels/ExperiencePanelView'
import { ProjectModal } from './panels/ProjectModal'
// Section Data mapping to Hotbar Tools
const sections = [
    { id: 'about', label: 'Player Status', icon: <User className="w-8 h-8 md:w-10 md:h-10 text-green-400 drop-shadow-md" /> },
    { id: 'projects', label: 'Crafted Builds', icon: <Box className="w-8 h-8 md:w-10 md:h-10 text-orange-400 drop-shadow-md" /> },
    { id: 'experience', label: 'Level 42 Experience', icon: <Cpu className="w-8 h-8 md:w-10 md:h-10 text-red-500 drop-shadow-md" /> },
    { id: 'contact', label: 'Multiplayer Mail', icon: <Mail className="w-8 h-8 md:w-10 md:h-10 text-blue-400 drop-shadow-md" /> }
]

// Legacy skills data removed - Now fully handled by SkillsPanel

const HomePage = () => {
    const [activeSection, setActiveSection] = useState('about')
    const [isEducationOpen, setIsEducationOpen] = useState(false)
    const [isSkillsOpen, setIsSkillsOpen] = useState(false)
    const [isAchievementsOpen, setIsAchievementsOpen] = useState(false)
    const [activeProject, setActiveProject] = useState<number | null>(null)
    const [popups, setPopups] = useState<{ id: number; text: string; x: number; y: number }[]>([])

    const handlePropClick = (e: React.MouseEvent, text: string) => {
        const parentRect = e.currentTarget.parentElement?.getBoundingClientRect()
        if (!parentRect) return

        const id = Date.now() + Math.random()
        setPopups((prev) => [...prev, { id, text, x: e.clientX - parentRect.left, y: e.clientY - parentRect.top }])

        try {
            const audio = new Audio('/step3.ogg')
            audio.volume = 0.5
            audio.play().catch(() => { })
        } catch (err) { }

        setTimeout(() => {
            setPopups((prev) => prev.filter((p) => p.id !== id))
        }, 1200)
    }

    const currentIndex = sections.findIndex(s => s.id === activeSection)
    const handleNext = () => {
        if (currentIndex < sections.length - 1) setActiveSection(sections[currentIndex + 1].id)
    }
    const handlePrev = () => {
        if (currentIndex > 0) setActiveSection(sections[currentIndex - 1].id)
    }

    const renderContent = () => {
        switch (activeSection) {
            case 'about':
                return (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full h-full relative border-l-4 border-black/50 bg-no-repeat" style={{ backgroundImage: 'url("/about_bg.webp?v=5")', backgroundSize: '100% 100%' }}>

                        {/* 2D Interactive Hotzones for Background Objects */}
                        <div className="absolute top-[8%] left-[7%] w-[10%] h-[20%] cursor-pointer z-10" onClick={(e) => handlePropClick(e, '💡 Lit!')} />
                        <div className="absolute top-[8%] right-[5%] w-[10%] h-[20%] cursor-pointer z-10" onClick={(e) => handlePropClick(e, '💡 Lit!')} />
                        <div className="absolute top-[18%] left-[45%] w-[30%] h-[35%] cursor-pointer z-10" onClick={(e) => handlePropClick(e, '🏞️ Nice view!')} />
                        <div className="absolute top-[55%] left-[53%] w-[25%] h-[25%] cursor-pointer z-10" onClick={(e) => handlePropClick(e, '🛏️ Zzz...')} />

                        {/* Floating Interaction Messages */}
                        <AnimatePresence>
                            {popups.map(popup => (
                                <motion.div
                                    key={popup.id}
                                    initial={{ opacity: 0, y: 0 }}
                                    animate={{ opacity: 1, y: -40 }}
                                    exit={{ opacity: 0, scale: 0.5 }}
                                    transition={{ duration: 1 }}
                                    className="absolute z-[100] text-yellow-300 pointer-events-none drop-shadow-[2px_2px_0_rgba(0,0,0,1)] minecraft-text text-sm md:text-xl whitespace-nowrap"
                                    style={{ left: popup.x, top: popup.y, transform: 'translate(-50%, -50%)' }}
                                >
                                    {popup.text}
                                </motion.div>
                            ))}
                        </AnimatePresence>

                        {/* Top Title */}
                        <h2 className="absolute top-6 left-1/2 -translate-x-1/2 text-2xl sm:text-4xl lg:text-5xl minecraft-title-main text-[#f7cf56] drop-shadow-[4px_4px_0_rgba(0,0,0,1)] text-center w-full whitespace-nowrap pointer-events-none">ABOUT ME</h2>

                        {/* Bookshelf */}
                        <motion.button
                            onClick={() => setIsEducationOpen(true)}
                            animate={{ y: [-3, 3, -3] }}
                            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                            className="absolute top-[30%] left-[12%] minecraft-btn-wood enchanted-hover text-[6px] sm:text-[10px] md:text-xs lg:text-base max-sm:!px-1 max-sm:!py-0 max-sm:!border-[1px] max-sm:!border-b-[1px] max-sm:origin-top-left max-sm:scale-[0.75] max-sm:hover:scale-[0.8] sm:hover:scale-105 hover:brightness-110 transition-all z-20"
                        >
                            📚 EDUCATION
                        </motion.button>

                        {/* Crafting Table */}
                        <motion.button
                            onClick={() => setIsSkillsOpen(true)}
                            animate={{ y: [4, -4, 4] }}
                            transition={{ repeat: Infinity, duration: 3.8, ease: "easeInOut" }}
                            className="absolute top-[60%] left-[32%] minecraft-btn-wood enchanted-hover text-[6px] sm:text-[10px] md:text-xs lg:text-base max-sm:!px-1 max-sm:!py-0 max-sm:!border-[1px] max-sm:!border-b-[1px] max-sm:origin-top-left max-sm:scale-[0.75] max-sm:hover:scale-[0.8] sm:hover:scale-105 transition-transform z-20"
                        >
                            ⚒️ SKILLS
                        </motion.button>

                        {/* Furnace */}
                        <motion.button
                            onClick={() => setIsAchievementsOpen(true)}
                            animate={{ y: [-4, 4, -4] }}
                            transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut" }}
                            className="absolute top-[45%] right-[18%] minecraft-btn-wood enchanted-hover text-[6px] sm:text-[10px] md:text-xs lg:text-base max-sm:!px-1 max-sm:!py-0 max-sm:!border-[1px] max-sm:!border-b-[1px] max-sm:origin-top-right max-sm:scale-[0.75] max-sm:hover:scale-[0.8] sm:hover:scale-105 transition-transform z-20"
                        >
                            🔥 ACHIEVEMENTS
                        </motion.button>

                        {/* Chest */}
                        <motion.button
                            onClick={() => window.open('https://drive.google.com/file/d/1D-42c7LattUzFVt3Trp7N32IiOBt2THW/view?usp=sharing', '_blank')}
                            animate={{ y: [3, -3, 3] }}
                            transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}
                            className="absolute bottom-[12%] right-[8%] minecraft-btn-wood enchanted-hover text-[6px] sm:text-[10px] md:text-xs lg:text-base max-sm:!px-1 max-sm:!py-0 max-sm:!border-[1px] max-sm:!border-b-[1px] max-sm:origin-bottom-right max-sm:scale-[0.75] max-sm:hover:scale-[0.8] sm:hover:scale-105 transition-transform z-20"
                        >
                            📜 RESUME
                        </motion.button>

                        {/* Dialogue Box */}
                        <motion.div
                            animate={{ y: [2, -2, 2] }}
                            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                            className="absolute bottom-2 left-2 md:bottom-10 md:left-10 max-w-[80%] md:max-w-xl border-[2px] md:border-[6px] border-[#b0915f] bg-[#1a110a] p-1 sm:p-2 md:p-6 shadow-[0_15px_30px_rgba(0,0,0,0.8)] rounded-sm md:rounded-br-3xl z-30"
                        >
                            <p className="text-gray-200 text-[6px] sm:text-[10px] md:text-base leading-tight md:leading-relaxed tracking-wide" style={{ fontFamily: "'MinecraftRegular', monospace" }}>
                                Hi! I'm <span className="text-[#a855f7]">Smaranika</span>, a passionate developer who loves building impactful solutions.
                            </p>
                        </motion.div>
                    </motion.div>
                )
            case 'experience':
                return (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="w-full h-full relative bg-no-repeat"
                        style={{ backgroundImage: 'url("/experience_bg.webp")', backgroundSize: 'cover', backgroundPosition: 'center' }}
                    >
                        <ExperiencePanelView />
                    </motion.div>
                )
            case 'projects':
                return (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="w-full h-full relative border-l-4 border-black/50 bg-no-repeat"
                        style={{ backgroundImage: 'url("/projects bg.webp")', backgroundSize: '100% 100%' }}
                    >
                        {/* Floating Interaction Messages (Hooks) */}
                        <AnimatePresence>
                            {popups.map(popup => (
                                <motion.div
                                    key={popup.id}
                                    initial={{ opacity: 0, y: 0 }}
                                    animate={{ opacity: 1, y: -40 }}
                                    exit={{ opacity: 0, scale: 0.5 }}
                                    transition={{ duration: 1 }}
                                    className="absolute z-[100] text-yellow-300 pointer-events-none drop-shadow-[2px_2px_0_rgba(0,0,0,1)] minecraft-text text-sm md:text-xl whitespace-nowrap"
                                    style={{ left: popup.x, top: popup.y, transform: 'translate(-50%, -50%)' }}
                                >
                                    {popup.text}
                                </motion.div>
                            ))}
                        </AnimatePresence>

                        {/* Top Title */}
                        <h2 className="absolute top-0.5 sm:top-6 md:top-8 left-1/2 -translate-x-1/2 text-[17px] sm:text-4xl lg:text-5xl minecraft-title-main text-[#f7cf56] drop-shadow-none sm:drop-shadow-[4px_4px_0_rgba(0,0,0,1)] text-center w-full whitespace-nowrap pointer-events-none z-30 tracking-widest">
                            PROJECTS
                        </h2>

                        {/* Interactive Building Markers for Projects */}
                        {[
                            { id: 1, name: "Collaborative\nNotepad", top: "35%", left: "20%", numColor: "bg-[#27104b] border-[#593991]" },
                            { id: 2, name: "Arogya Jal", top: "28%", left: "33%", numColor: "bg-[#0b4816] border-[#1d8c2f]" },
                            { id: 3, name: "QuizFlow", top: "20%", left: "48%", numColor: "bg-[#0c2a51] border-[#22579b]" },
                            { id: 4, name: "Draftify", top: "25%", left: "67%", numColor: "bg-[#432906] border-[#8e6022]" },
                            { id: 5, name: "Mahanayak", top: "26%", left: "82%", numColor: "bg-[#4f0c0c] border-[#9f2323]" },
                            { id: 6, name: "Auto docker\nExtension", top: "50%", left: "76%", numColor: "bg-[#25184a] border-[#553ea1]" }
                        ].map(m => (
                            <motion.button
                                key={m.id}
                                onClick={() => setActiveProject(m.id)}
                                whileHover={{ scale: 1.1 }}
                                className="absolute flex flex-col items-center justify-center -translate-x-1/2 -translate-y-1/2 drop-shadow-[2px_10px_10px_rgba(0,0,0,0.8)] cursor-pointer z-20 group"
                                style={{ top: m.top, left: m.left }}
                            >
                                {/* Expanded Hit Area to cover the building underneath */}
                                <div className="absolute top-[80%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35px] h-[45px] sm:w-[170px] sm:h-[190px] md:w-[200px] md:h-[240px] bg-transparent z-0" />

                                {/* Number Box */}
                                <div className={`relative w-5 h-5 sm:w-8 sm:h-8 md:w-10 md:h-10 ${m.numColor} border-[1.5px] md:border-[2px] flex items-center justify-center text-white text-[9px] sm:text-base md:text-2xl minecraft-text leading-none z-10 pt-[1.5px] md:pt-[2px] rounded-sm md:rounded-md shadow-lg group-hover:brightness-125 transition-all`}>
                                    {m.id}
                                </div>
                                {/* Title Box */}
                                <div className="relative bg-black/60 border border-white/10 px-2 py-1 sm:px-4 sm:py-3 mt-0 text-center w-max min-w-0 md:min-w-[150px] rounded-sm md:rounded-md backdrop-blur-sm shadow-xl z-10 group-hover:bg-black/70 group-hover:border-white/30 transition-all">
                                    <span className="minecraft-text text-white text-[8px] sm:text-[10px] md:text-lg whitespace-pre-line leading-[1.1] md:leading-relaxed block tracking-wide drop-shadow-md">
                                        {m.name}
                                    </span>
                                </div>
                            </motion.button>
                        ))}

                        {/* Notice Box */}
                        <motion.div
                            animate={{ y: [2, -2, 2] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="absolute bottom-2 left-2 sm:bottom-6 sm:left-6 md:bottom-10 md:left-10 bg-[#422915] border-2 sm:border-4 border-[#1f1208] border-t-[#5f3f24] border-l-[#5f3f24] p-1 sm:p-1.5 md:p-2 flex items-center gap-1 sm:gap-2 md:gap-3 shadow-[2px_2px_0_rgba(0,0,0,0.9)] sm:shadow-[3px_3px_0_rgba(0,0,0,0.9),_8px_8px_15px_rgba(0,0,0,0.6)] rounded-sm z-20 pointer-events-none"
                        >
                            <div className="text-[10px] sm:text-xl md:text-3xl drop-shadow-[0_2px_15px_rgba(255,200,0,1)] pt-0.5 sm:pt-1">🏮</div>
                            <span
                                className="minecraft-text text-[#FFDF00] text-[7px] sm:text-[14px] md:text-[20px] leading-[1.1] md:leading-[1.15] w-24 sm:w-44 md:w-[16.5rem] whitespace-pre-line"
                                style={{
                                    textShadow: '1px 1px 0px #301b0d, 2px 2px 0px #301b0d, 3px 3px 0px #000, 5px 5px 5px rgba(0,0,0,0.7)'
                                }}
                            >
                                Click on any building{"\n"}to explore the project.
                            </span>
                        </motion.div>

                    </motion.div>
                )
            case 'contact':
                return (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="w-full h-full relative border-l-4 border-black/50 bg-no-repeat"
                        style={{ backgroundImage: 'url("/contact_bg.webp")', backgroundSize: '100% 100%' }}
                    >
                        {/* Floating Interaction Messages (Hooks) */}
                        <AnimatePresence>
                            {popups.map(popup => (
                                <motion.div
                                    key={popup.id}
                                    initial={{ opacity: 0, y: 0 }}
                                    animate={{ opacity: 1, y: -40 }}
                                    exit={{ opacity: 0, scale: 0.5 }}
                                    transition={{ duration: 1 }}
                                    className="absolute z-[100] text-yellow-300 pointer-events-none drop-shadow-[2px_2px_0_rgba(0,0,0,1)] minecraft-text text-sm md:text-xl whitespace-nowrap"
                                    style={{ left: popup.x, top: popup.y, transform: 'translate(-50%, -50%)' }}
                                >
                                    {popup.text}
                                </motion.div>
                            ))}
                        </AnimatePresence>

                        {/* Top Title */}
                        <h2 className="absolute top-6 md:top-8 left-1/2 -translate-x-1/2 text-2xl sm:text-4xl lg:text-5xl minecraft-title-main text-[#f7cf56] drop-shadow-[4px_4px_0_rgba(0,0,0,1)] text-center w-full whitespace-nowrap pointer-events-none z-30">
                            CONTACTS
                        </h2>

                        {/* Interactive Click Areas for Social Links mapped visually to the wooden board in the image */}
                        {/* Interactive Click Areas for Social Links mapped visually to the wooden board in the image */}
                        {/* Leftmost (GitHub) */}
                        <a href="https://github.com/smaranika2005" target="_blank" rel="noreferrer" className="absolute top-[36%] left-[61%] w-[7%] h-[11%] cursor-pointer z-20" onClick={(e) => handlePropClick(e, 'Checking Repos!')} />

                        {/* Middle (LinkedIn) */}
                        <a href="https://www.linkedin.com/in/smaranika-porel-43a11b291" target="_blank" rel="noreferrer" className="absolute top-[36%] left-[69%] w-[7%] h-[11%] cursor-pointer z-20" onClick={(e) => handlePropClick(e, 'Connecting!')} />

                        {/* Rightmost (Email) */}
                        <div
                            className="absolute top-[36%] left-[77%] w-[7%] h-[11%] cursor-pointer z-20"
                            onClick={(e) => {
                                handlePropClick(e, 'porelsmaranika@gmail.com');
                                navigator.clipboard.writeText('porelsmaranika@gmail.com');
                            }}
                        />

                        {/* Bottom Left (Resume) */}
                        <a href="https://drive.google.com/file/d/1D-42c7LattUzFVt3Trp7N32IiOBt2THW/view?usp=sharing" target="_blank" rel="noreferrer" className="absolute top-[50%] left-[65%] w-[7%] h-[11%] cursor-pointer z-20" onClick={(e) => handlePropClick(e, 'Reading Resume!')} />

                        {/* Bottom Right (HackerRank) */}
                        <a href="https://www.hackerrank.com/profile/porelsmaranika" target="_blank" rel="noreferrer" className="absolute top-[50%] left-[73%] w-[7%] h-[11%] cursor-pointer z-20" onClick={(e) => handlePropClick(e, 'HackerRank Time!')} />

                        {/* Scenic interaction boxes */}
                        <div className="absolute top-[18%] left-[28%] w-[15%] h-[20%] cursor-pointer z-20" onClick={(e) => handlePropClick(e, 'Guiding the way!')} />
                        <div className="absolute top-[35%] left-[10%] w-[25%] h-[25%] cursor-pointer z-20" onClick={(e) => handlePropClick(e, 'Ahoy!')} />
                        <div className="absolute top-[60%] left-[8%] w-[20%] h-[15%] cursor-pointer z-20" onClick={(e) => handlePropClick(e, 'Let\'s collaborate!')} />
                    </motion.div>
                )
            default:
                return null
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 pointer-events-auto z-50 flex sword-cursor"
        >
            {/* PAGINATION ARROWS (LEFT AND RIGHT) */}
            {currentIndex > 0 && (
                <button
                    onClick={handlePrev}
                    className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-[60] w-10 h-10 md:w-16 md:h-16 minecraft-btn-wood flex items-center justify-center m-0 p-0 shadow-[0_10px_20px_rgba(0,0,0,0.8)]"
                >
                    <span className="minecraft-text text-white text-xl md:text-3xl ml-[-2px]">&lt;</span>
                </button>
            )}
            {currentIndex < sections.length - 1 && (
                <button
                    onClick={handleNext}
                    className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-[60] w-10 h-10 md:w-16 md:h-16 minecraft-btn-wood flex items-center justify-center m-0 p-0 shadow-[0_10px_20px_rgba(0,0,0,0.8)]"
                >
                    <span className="minecraft-text text-white text-xl md:text-3xl mr-[-2px]">&gt;</span>
                </button>
            )}

            {/* ISOMETRIC IMAGE REPLACED PREVIOUS LOGIC (Main Content takes 100%) */}
            <div className={`flex-1 overflow-y-auto w-full h-full flex items-center justify-center relative ${(activeSection !== 'about' && activeSection !== 'projects' && activeSection !== 'contact' && activeSection !== 'experience') ? 'p-4 md:p-12 pb-32 md:pb-40' : ''}`}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeSection}
                        className={`w-full ${(activeSection !== 'about' && activeSection !== 'projects' && activeSection !== 'contact' && activeSection !== 'experience') ? 'h-full max-w-4xl' : 'h-full max-lg:h-auto max-lg:aspect-video lg:h-full flex-shrink-0'}`}
                    >
                        {renderContent()}
                    </motion.div>
                </AnimatePresence>

                {/* THE MINECRAFT HOTBAR (BOTTOM NAVIGATION) */}
                <div className="absolute bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-auto z-[60]">

                    {/* Floating Item Name Text (Classic Minecraft interaction) */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeSection}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="mb-1 text-center"
                        >
                            <span className="minecraft-text text-white text-xs md:text-sm drop-shadow-[2px_2px_0_rgba(0,0,0,1)] tracking-widest px-4 py-1">
                                {sections.find(s => s.id === activeSection)?.label}
                            </span>
                        </motion.div>
                    </AnimatePresence>

                    {/* The Wooden Hotbar Container */}
                    <div className="flex gap-1 p-1 bg-[#3A2411] shadow-[0_15px_30px_rgba(0,0,0,0.8)] border-[4px] border-[#201309] rounded-sm relative">

                        {sections.map((section, index) => {
                            const isActive = activeSection === section.id

                            return (
                                <button
                                    key={section.id}
                                    onClick={() => setActiveSection(section.id)}
                                    className={`relative w-10 h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 flex items-center justify-center transition-transform duration-100 ${isActive
                                        ? 'minecraft-wood-slot-active scale-110 z-20 border-[2px] border-white'
                                        : 'minecraft-wood-slot hover:brightness-110 z-10'
                                        }`}
                                >
                                    {/* Slot Number */}
                                    <span className="absolute bottom-[1px] right-1 minecraft-text text-white text-[7px] md:text-[8px] drop-shadow-[1px_1px_0_rgba(0,0,0,1)] pointer-events-none opacity-80">
                                        {index + 1}
                                    </span>

                                    {/* Item Icon */}
                                    <motion.div
                                        animate={isActive ? { y: [-1, 1, -1] } : {}}
                                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                                        className="absolute inset-0 flex items-center justify-center"
                                    >
                                        <div className="scale-[0.65] md:scale-75 lg:scale-90 flex items-center justify-center">
                                            {section.icon}
                                        </div>
                                    </motion.div>
                                </button>
                            )
                        })}
                    </div>

                    {/* HUD Dots (4 exact dots mirroring active section) */}
                    <div className="w-full flex justify-center items-center gap-2 mt-2 pointer-events-none">
                        {sections.map((_, i) => (
                            <div
                                key={i}
                                className={`w-3 h-3 md:w-4 md:h-4 rounded-full border-[2px] transition-colors ${i === currentIndex
                                    ? 'bg-yellow-400 border-white shadow-[0_0_10px_rgba(255,215,0,0.8)]'
                                    : 'bg-[#CE3E3E] border-[#4A1515] opacity-60 shadow-[1px_1px_0_rgba(0,0,0,0.8)]'
                                    }`}
                            ></div>
                        ))}
                    </div>
                </div>
            </div>

            {/* MINECRAFT MODAL POPUPS */}
            <AnimatePresence>
                {isEducationOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-md pointer-events-auto"
                    >
                        <button
                            onClick={() => setIsEducationOpen(false)}
                            className="absolute top-4 right-4 md:top-8 md:right-8 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-[#E53935] border-[4px] border-t-[#EF9A9A] border-l-[#EF9A9A] border-b-[#B71C1C] border-r-[#B71C1C] hover:brightness-110 active:border-t-[#B71C1C] active:border-l-[#B71C1C] active:border-b-[#EF9A9A] active:border-r-[#EF9A9A] z-[250] shadow-[0_10px_20px_rgba(0,0,0,0.5)] rounded-sm transition-transform hover:scale-105"
                        >
                            <span className="minecraft-text text-white text-xl md:text-2xl drop-shadow-[2px_2px_0_rgba(0,0,0,0.8)] mt-[-2px]">X</span>
                        </button>

                        <div className="w-full max-w-5xl h-[90vh] relative z-50 flex flex-col justify-center items-center p-4">
                            <EducationPanelView />
                        </div>
                    </motion.div>
                )}

                {/* SKILLS MODAL POPUP - EXACTLY MATCHING SCREENSHOT */}
                {isSkillsOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-md pointer-events-auto"
                    >
                        <button
                            onClick={() => setIsSkillsOpen(false)}
                            className="absolute top-4 right-4 md:top-8 md:right-8 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-[#E53935] border-[4px] border-t-[#EF9A9A] border-l-[#EF9A9A] border-b-[#B71C1C] border-r-[#B71C1C] hover:brightness-110 active:border-t-[#B71C1C] active:border-l-[#B71C1C] active:border-b-[#EF9A9A] active:border-r-[#EF9A9A] z-[250] shadow-[0_10px_20px_rgba(0,0,0,0.5)] rounded-sm transition-transform hover:scale-105"
                        >
                            <span className="minecraft-text text-white text-xl md:text-2xl drop-shadow-[2px_2px_0_rgba(0,0,0,0.8)] mt-[-2px]">X</span>
                        </button>

                        <div className="w-full flex justify-center items-center p-4">
                            <SkillsPanel />
                        </div>
                    </motion.div>
                )}

                {/* ACHIEVEMENTS MODAL POPUP */}
                {isAchievementsOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-md pointer-events-auto"
                    >
                        <button
                            onClick={() => setIsAchievementsOpen(false)}
                            className="absolute top-4 right-4 md:top-8 md:right-8 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-[#E53935] border-[4px] border-t-[#EF9A9A] border-l-[#EF9A9A] border-b-[#B71C1C] border-r-[#B71C1C] hover:brightness-110 active:border-t-[#B71C1C] active:border-l-[#B71C1C] active:border-b-[#EF9A9A] active:border-r-[#EF9A9A] z-[250] shadow-[0_10px_20px_rgba(0,0,0,0.5)] rounded-sm transition-transform hover:scale-105"
                        >
                            <span className="minecraft-text text-white text-xl md:text-2xl drop-shadow-[2px_2px_0_rgba(0,0,0,0.8)] mt-[-2px]">X</span>
                        </button>

                        <div className="w-full h-full flex justify-center items-center p-4">
                            <AchievementsPanel />
                        </div>
                    </motion.div>
                )}

                {/* PROJECT MODAL POPUP */}
                {activeProject !== null && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-md pointer-events-auto p-4"
                    >
                        <ProjectModal projectId={activeProject} onClose={() => setActiveProject(null)} />
                    </motion.div>
                )}

            </AnimatePresence>
        </motion.div>
    )
}

export default HomePage
