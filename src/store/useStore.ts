import { create } from 'zustand'

type AppState = {
    started: boolean;
    setStarted: (started: boolean) => void;
    activeSection: string | null;
    setActiveSection: (section: string | null) => void;
    achievements: string[];
    addAchievement: (achievement: string) => void;
}

export const useStore = create<AppState>((set) => ({
    started: false,
    setStarted: (started) => set({ started }),
    activeSection: null,
    setActiveSection: (activeSection) => set({ activeSection }),
    achievements: [],
    addAchievement: (achievement) => set((state) => ({
        achievements: state.achievements.includes(achievement) ? state.achievements : [...state.achievements, achievement]
    })),
}))
