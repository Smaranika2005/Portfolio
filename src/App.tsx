import { useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { useStore } from './store/useStore'
import LandingPage from './ui/LandingPage'
import HomePage from './ui/HomePage'

function App() {
  const started = useStore((state) => state.started)

  useEffect(() => {
    const playClickSound = () => {
      const audio = new Audio('/step3.ogg')
      audio.volume = 0.5
      audio.play().catch(e => console.error("Audio play error:", e))
    }

    window.addEventListener('mousedown', playClickSound)

    return () => {
      window.removeEventListener('mousedown', playClickSound)
    }
  }, [])

  return (
    <div className="w-full h-full relative custom-cursor bg-black overflow-hidden">
      {/* UI Layer */}
      <AnimatePresence mode="wait">
        {!started ? (
          <LandingPage key="landing" />
        ) : (
          <HomePage key="home" />
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
