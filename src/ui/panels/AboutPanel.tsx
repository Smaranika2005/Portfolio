import React from 'react';

const AboutPanel = () => {
    return (
        <div className="space-y-6">
            <h2 className="text-4xl font-bold pixel-text text-yellow-400 mb-6 border-b-2 border-gray-600 pb-2">ABOUT ME</h2>

            <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                    <div className="w-full aspect-square bg-gray-800 border-4 border-gray-600 shadow-[inset_0px_0px_20px_rgba(0,0,0,0.8)] rounded flex items-center justify-center p-4">
                        <img src="https://api.dicebear.com/7.x/miniavs/svg?seed=Smaranika&backgroundColor=b6e3f4" alt="Smaranika" className="w-full h-full object-cover pixelated-img rounded" />
                    </div>
                </div>

                <div className="md:w-2/3 space-y-4 text-lg text-gray-200">
                    <p>
                        Hello! I'm <span className="text-purple-400 font-bold">Smaranika Porel</span>, a passionate Full Stack Software Developer with a love for crafting elegant solutions and engaging digital experiences.
                    </p>
                    <p>
                        Just like building structures block by block in a pixelated world, I construct robust software architecture line by line. I thrive on solving complex problems and continuously learning new technologies.
                    </p>

                    <div className="mt-8 bg-gray-800 p-4 border-2 border-gray-600 rounded">
                        <h3 className="text-xl text-yellow-300 font-bold mb-2 pixel-text">Current Quest</h3>
                        <p className="text-sm">Seeking new opportunities to contribute to meaningful projects, expand my skill tree, and level up as a developer.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPanel;
