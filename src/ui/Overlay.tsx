import { useStore } from '../store/useStore'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import AboutPanel from './panels/AboutPanel'
import ProjectsPanel from './panels/ProjectsPanel'
import SkillsPanel from './panels/SkillsPanel'
import ExperiencePanel from './panels/ExperiencePanel'
import ContactPanel from './panels/ContactPanel'

const Overlay = () => {
    const activeSection = useStore((state) => state.activeSection)
    const setActiveSection = useStore((state) => state.setActiveSection)

    const renderContent = () => {
        switch (activeSection) {
            case 'about': return <AboutPanel />
            case 'projects': return <ProjectsPanel />
            case 'skills': return <SkillsPanel />
            case 'experience': return <ExperiencePanel />
            case 'contact': return <ContactPanel />
            default: return null;
        }
    }

    return (
        <AnimatePresence>
            {activeSection && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={`absolute inset-0 flex items-center justify-center pointer-events-auto z-50 p-4 md:p-12 ${activeSection === 'skills' ? 'bg-black/10 backdrop-blur-[1px]' : 'bg-black/60 backdrop-blur-sm'
                        }`}
                >
                    <motion.div
                        initial={{ scale: 0.9, y: 20 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0.9, y: 20 }}
                        style={
                            activeSection === 'experience'
                                ? {
                                    backgroundImage: 'linear-gradient(rgba(10,10,10,0.6), rgba(10,10,10,0.8)), url(/experience_bg.png)',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }
                                : undefined
                        }
                        className={`w-full max-w-5xl max-h-[90vh] overflow-y-auto relative flex flex-col text-white z-50 pointer-events-auto items-center ${activeSection === 'skills' ? 'p-2 md:p-4' : 'minecraft-panel p-6 md:p-8'
                            }`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={(e) => { e.stopPropagation(); setActiveSection(null); }}
                            className="absolute top-4 right-4 bg-red-600 hover:bg-red-500 p-2 border-2 border-black rounded shadow-[inset_-2px_-2px_0px_rgba(0,0,0,0.5),_inset_2px_2px_0px_rgba(255,255,255,0.5)] transition-transform active:translate-y-px z-50"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <div className="flex-1 w-full relative">
                            {renderContent()}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Overlay
