import { useEffect } from 'react'
import { useStore } from '../store/useStore'
import { motion } from 'framer-motion'
import { FileText } from 'lucide-react'

const GithubIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" stroke="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
)

const LinkedinIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" stroke="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
)

const LandingPage = () => {
    const setStarted = useStore((state) => state.setStarted)

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key.toLowerCase() === 'w') {
                setStarted(true)
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [setStarted])

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex flex-col justify-center sm:justify-start pointer-events-auto z-50 text-white p-6 sm:pt-[12vh] sm:px-[6vw] lg:pt-[15vh] lg:pl-[8vw]"
        >
            {/* Mobile Background */}
            <div className="absolute inset-0 block sm:hidden -z-10" style={{ backgroundImage: 'url("/mobile_portrait.webp")', backgroundSize: 'cover', backgroundPosition: 'center' }} />

            {/* Desktop Background */}
            <div className="absolute inset-0 hidden sm:block -z-10" style={{ backgroundImage: 'url("/bg.webp?v=3")', backgroundSize: '100% 100%' }} />

            <div className="max-w-lg md:max-w-xl text-left relative z-10">
                <motion.h1
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-[clamp(1.5rem,4vw,3.5rem)] whitespace-normal sm:whitespace-nowrap text-white mb-2 minecraft-title-main leading-tight tracking-wide"
                >
                    SMARANIKA POREL
                </motion.h1>

                <motion.h2
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-[clamp(0.9rem,2vw,1.5rem)] whitespace-normal sm:whitespace-nowrap mb-6 minecraft-subtitle"
                >
                    FULL STACK DEVELOPER
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-sm sm:text-base md:text-lg text-gray-100 mb-8 font-sans description-text leading-relaxed max-w-sm sm:max-w-full"
                >
                    <p>Crafting ideas. Building solutions.</p>
                    <p>Exploring infinite possibilities.</p>
                </motion.div>

                <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="flex flex-col items-start gap-5 sm:gap-6"
                >
                    <button
                        onClick={() => setStarted(true)}
                        className="minecraft-btn-wood group shadow-2xl scale-[0.8] sm:scale-100 origin-left"
                    >
                        PRESS <span className="minecraft-key">W</span> TO BEGIN
                    </button>

                    <div className="flex items-center gap-3 sm:gap-4 scale-[0.85] sm:scale-100 origin-left">
                        <a href="https://github.com/Smaranika2005" target="_blank" rel="noreferrer" className="minecraft-slot">
                            <GithubIcon className="w-6 h-6 sm:w-8 sm:h-8" />
                        </a>
                        <a href="https://www.linkedin.com/in/smaranika-porel-43a11b291" target="_blank" rel="noreferrer" className="minecraft-slot">
                            <LinkedinIcon className="w-6 h-6 sm:w-8 sm:h-8" />
                        </a>
                        <a href="https://drive.google.com/file/d/1D-42c7LattUzFVt3Trp7N32IiOBt2THW/view?usp=sharing" target="_blank" rel="noreferrer" className="minecraft-slot">
                            <FileText className="w-6 h-6 sm:w-8 sm:h-8" />
                        </a>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default LandingPage
