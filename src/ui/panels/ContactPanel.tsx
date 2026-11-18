import React from 'react';
import { Mail, Download } from 'lucide-react';

const ContactPanel = () => {
    return (
        <div className="space-y-6 flex flex-col items-center justify-center p-8">
            <div className="w-24 h-24 mb-6 relative animate-bounce">
                <div className="absolute inset-0 bg-purple-600 opacity-50 blur-xl rounded-full"></div>
                <div className="w-full h-full bg-purple-500 border-4 border-purple-300 rotate-45 shadow-[0_0_30px_rgba(168,85,247,0.8)] flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/20"></div>
                </div>
            </div>

            <h2 className="text-5xl font-bold pixel-text text-white text-center mb-2 title-glow">LET'S CONNECT</h2>
            <p className="text-xl text-purple-200 text-center mb-12">You've reached the End! Let's build something amazing together.</p>

            <div className="w-full max-w-md space-y-4">
                <a href="mailto:contact@example.com" className="minecraft-button w-full justify-start py-4 group">
                    <Mail className="w-6 h-6 mr-4 text-purple-300 group-hover:text-white transition-colors" />
                    <span>Email Me</span>
                </a>
                <a href="https://www.linkedin.com/in/smaranika-porel-43a11b291" target="_blank" rel="noreferrer" className="minecraft-button w-full justify-start py-4 group">
                    <span className="w-6 h-6 mr-4 text-blue-400 group-hover:text-white transition-colors flex items-center justify-center font-bold">IN</span>
                    <span>LinkedIn</span>
                </a>
                <a href="https://github.com/Smaranika2005" target="_blank" rel="noreferrer" className="minecraft-button w-full justify-start py-4 group">
                    <span className="w-6 h-6 mr-4 text-gray-400 group-hover:text-white transition-colors flex items-center justify-center font-bold">GH</span>
                    <span>GitHub</span>
                </a>
                <a href="https://drive.google.com/file/d/1D-42c7LattUzFVt3Trp7N32IiOBt2THW/view?usp=sharing" target="_blank" rel="noreferrer" className="minecraft-button w-full justify-start py-4 group">
                    <Download className="w-6 h-6 mr-4 text-green-400 group-hover:text-white transition-colors" />
                    <span>Download Resume</span>
                </a>
            </div>
        </div>
    )
}

export default ContactPanel;
