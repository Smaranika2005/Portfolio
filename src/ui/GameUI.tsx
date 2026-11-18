import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useStore } from '../store/useStore'
import { TerminalSquare } from 'lucide-react'

// Simple helper snippet since we can't easily capture keys while pointer is locked without some magic
const GameUI = () => {
    const achievements = useStore((state) => state.achievements)
    const [consoleOpen, setConsoleOpen] = useState(false)
    const [consoleLog, setConsoleLog] = useState<string[]>(['> help\nAvailable commands:\n/about\n/skills\n/projects\n/experience\n/contact\n/easteregg'])
    const [input, setInput] = useState('')
    const setActiveSection = useStore((state) => state.setActiveSection)

    // Listen to keys for dev console
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            // Toggle console with `/`
            if (e.key === '/') {
                if (!consoleOpen) {
                    e.preventDefault()
                    setConsoleOpen(true)
                    document.exitPointerLock()
                }
            }
            if (e.key === 'Escape' && consoleOpen) {
                setConsoleOpen(false)
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [consoleOpen])

    const handleCommand = (e: React.FormEvent) => {
        e.preventDefault()
        const cmd = input.trim().toLowerCase()

        let response = `> ${cmd}`

        switch (cmd) {
            case '/help':
                response += '\nAvailable commands:\n/about\n/skills\n/projects\n/experience\n/contact\n/easteregg'
                break
            case '/about':
                setActiveSection('about'); setConsoleOpen(false); break;
            case '/skills':
                setActiveSection('skills'); setConsoleOpen(false); break;
            case '/projects':
                setActiveSection('projects'); setConsoleOpen(false); break;
            case '/experience':
                setActiveSection('experience'); setConsoleOpen(false); break;
            case '/contact':
                setActiveSection('contact'); setConsoleOpen(false); break;
            case '/easteregg':
            case 'easteregg':
                response += '\nYou found the secret! Achievement unlocked.'
                useStore.getState().addAchievement('Secret Hacker')
                break
            default:
                response += `\nCommand not found: ${cmd}`
        }

        setConsoleLog(prev => [...prev, response])
        setInput('')
    }

    // Last achievement
    const latestAchievement = achievements[achievements.length - 1]

    return (
        <>
            <AnimatePresence>
                {consoleOpen && (
                    <motion.div
                        initial={{ y: 200, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 200, opacity: 0 }}
                        className="absolute bottom-4 left-4 w-96 bg-black/80 border-2 border-gray-600 rounded p-4 font-mono text-sm text-green-400 z-50 pointer-events-auto"
                    >
                        <div className="h-48 overflow-y-auto mb-2 flex flex-col justify-end">
                            {consoleLog.map((log, i) => (
                                <div key={i} className="whitespace-pre-wrap mb-2">{log}</div>
                            ))}
                        </div>
                        <form onSubmit={handleCommand} className="flex">
                            <span className="mr-2">&gt;</span>
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                autoFocus
                                className="bg-transparent border-none outline-none flex-1 text-green-400"
                            />
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="absolute bottom-4 left-4 pointer-events-none z-10 text-white/50 text-xs font-mono">
                {!consoleOpen && 'Press / to open developer console'}
            </div>

            <AnimatePresence>
                {latestAchievement && (
                    <motion.div
                        key={latestAchievement}
                        initial={{ x: 300, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: 300, opacity: 0 }}
                        className="absolute top-4 right-4 bg-gray-900 border-2 border-yellow-500 rounded p-4 flex items-center shadow-[0_0_15px_rgba(234,179,8,0.5)] z-50"
                    >
                        <div className="w-8 h-8 rounded-full bg-yellow-500 mr-4 flex items-center justify-center font-bold text-black border-2 border-yellow-200 shadow-[inset_2px_2px_0px_rgba(255,255,255,0.5)]">!</div>
                        <div>
                            <div className="text-yellow-500 font-bold text-xs pixel-text uppercase">Achievement Unlocked!</div>
                            <div className="font-bold text-white">{latestAchievement}</div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default GameUI
