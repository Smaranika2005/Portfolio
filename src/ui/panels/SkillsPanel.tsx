import React, { useState } from 'react';
import { Sword, Shield, Pickaxe, Box, Axe, Server, Shovel, Sparkles } from 'lucide-react';

const getLogo = (name: string) => {
    switch (name) {
        case 'Java': return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg'
        case 'C': return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg'
        case 'Python': return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg'
        case 'Node.js': return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg'
        case 'React.js': return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg'
        case 'Next.js': return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg'
        case 'Git': return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg'
        case 'Github': return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg'
        case 'Springboot': return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg'
        case 'HTML': return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg'
        case 'CSS': return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg'
        case 'Javascript': return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg'
        case 'Tailwind CSS': return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg'
        case 'VS Code': return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg'
        case 'MySQL': return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg'
        case 'Supabase': return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg'
        case 'PostgreSQL': return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg'
        case 'Postman': return 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg'
        case 'Docker': return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg'
        case 'Linux': return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg'
        case 'Express.js': return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg'
        case 'REST API': return 'https://www.vectorlogo.zone/logos/openapis/openapis-icon.svg'
        case 'JWT': return 'https://jwt.io/img/pic_logo.svg'
        case 'MongoDB': return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg'
        default: return ''
    }
}

interface Skill {
    name: string;
    type: string;
    desc: string;
    level: number;
    exp: string;
    projects: string[];
    color: string;
}

interface Category {
    title: string;
    icon: any;
    skills: Skill[];
}

const skillData: Category[] = [
    {
        title: 'LANGUAGES', icon: Sword,
        skills: [
            { name: 'Java', type: 'Backend Language', desc: 'Object-oriented programming language used for enterprise apps.', level: 8, exp: '3+ years', projects: ['Banking System', 'QuizApp'], color: 'text-[#e76f00]' },
            { name: 'Python', type: 'General Purpose', desc: 'Used for automation, scripting, and backend services.', level: 7, exp: '2+ years', projects: ['Data Parser', 'DevPilot'], color: 'text-[#ffd43b]' },
            { name: 'C', type: 'System Programming', desc: 'Low-level structural programming language.', level: 6, exp: '2+ years', projects: ['OS Kernel Mod', 'IoT Proxy'], color: 'text-[#00599C]' },
            { name: 'Javascript', type: 'Frontend Language', desc: 'Essential for dynamic rendering and web apps.', level: 9, exp: '4+ years', projects: ['Portfolio', 'DevPilot', 'Arogya Jal'], color: 'text-[#f7df1e]' },
        ]
    },
    {
        title: 'FRONTEND', icon: Shield,
        skills: [
            { name: 'React.js', type: 'Frontend Library', desc: 'Used for building interactive and dynamic user interfaces.', level: 8, exp: '2+ years', projects: ['DevPilot', 'QuizApp', 'Portfolio'], color: 'text-[#61dafb]' },
            { name: 'HTML', type: 'Markup Language', desc: 'Structural markup for web applications.', level: 10, exp: '4+ years', projects: ['All Web Projects'], color: 'text-[#e34f26]' },
            { name: 'CSS', type: 'Styling Language', desc: 'Visual styling and layout for the web.', level: 9, exp: '4+ years', projects: ['All Web Projects'], color: 'text-[#1572b6]' },
            { name: 'Tailwind CSS', type: 'CSS Framework', desc: 'Utility-first styling framework.', level: 9, exp: '2+ years', projects: ['Portfolio', 'DevPilot'], color: 'text-[#38b2ac]' },
            { name: 'Next.js', type: 'React Framework', desc: 'Server-side rendering and static web apps.', level: 7, exp: '1+ years', projects: ['DevPilot'], color: 'text-white' },
        ]
    },
    {
        title: 'BACKEND', icon: Pickaxe,
        skills: [
            { name: 'Node.js', type: 'JS Runtime', desc: 'Scalable backend runtime for JavaScript.', level: 7, exp: '2+ years', projects: ['DevPilot', 'ChatApp'], color: 'text-[#339933]' },
            { name: 'Express.js', type: 'Node.js Framework', desc: 'Minimal backend framework for routing.', level: 8, exp: '2+ years', projects: ['DevPilot API'], color: 'text-white' },
            { name: 'Springboot', type: 'Java Framework', desc: 'Robust backend framework for REST APIs.', level: 8, exp: '2+ years', projects: ['E-commerce API', 'QuizApp'], color: 'text-[#6db33f]' },
            { name: 'REST API', type: 'Architecture', desc: 'Stateless resource-based network interaction.', level: 9, exp: '3+ years', projects: ['Most Backend Projects'], color: 'text-[#9ca3af]' },
            { name: 'JWT', type: 'Security', desc: 'Token-based secure stateless authentication.', level: 8, exp: '2+ years', projects: ['DevPilot Auth', 'QuizApp'], color: 'text-[#eab308]' },
        ]
    },
    {
        title: 'DATABASES', icon: Box,
        skills: [
            { name: 'PostgreSQL', type: 'Relational DB', desc: 'Advanced open-source SQL database.', level: 7, exp: '2+ years', projects: ['DevPilot'], color: 'text-[#336791]' },
            { name: 'MySQL', type: 'Relational DB', desc: 'Open-source SQL database management.', level: 8, exp: '3+ years', projects: ['Inventory System'], color: 'text-[#4479a1]' },
            { name: 'MongoDB', type: 'NoSQL DB', desc: 'Document based scalable database.', level: 7, exp: '2+ years', projects: ['ChatApp'], color: 'text-[#47a248]' },
            { name: 'Supabase', type: 'BaaS', desc: 'Open source Firebase alternative focused on Postgres.', level: 7, exp: '1+ years', projects: ['Arogya Jal'], color: 'text-[#3ecf8e]' },
        ]
    },
    {
        title: 'TOOLS & OTHER', icon: Axe,
        skills: [
            { name: 'Git', type: 'Version Control', desc: 'Distributed version control system.', level: 9, exp: '3+ years', projects: ['All Projects'], color: 'text-[#f05032]' },
            { name: 'Github', type: 'Hosting Platform', desc: 'Code hosting and CI/CD platform.', level: 8, exp: '3+ years', projects: ['All Projects'], color: 'text-white' },
            { name: 'Docker', type: 'Containerization', desc: 'App deployment using containers.', level: 6, exp: '1 year', projects: ['DevPilot'], color: 'text-[#2496ed]' },
            { name: 'Postman', type: 'API Tool', desc: 'API testing and development platform.', level: 8, exp: '2+ years', projects: ['API Projects'], color: 'text-[#ff6c37]' },
            { name: 'VS Code', type: 'Code Editor', desc: 'Primary IDE for software development.', level: 10, exp: '4+ years', projects: ['All Projects'], color: 'text-[#007acc]' },
            { name: 'Linux', type: 'OS', desc: 'Open source operating system.', level: 7, exp: '2+ years', projects: ['Server Hosting'], color: 'text-[#fcc624]' },
        ]
    }
];

const renderPixels = (art: string[], colors: Record<string, string>) => {
    return art.map((row, y) =>
        row.split('').map((char, x) =>
            colors[char] ? <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" fill={colors[char]} /> : null
        )
    );
}

const HeartIcon = () => {
    const art = [
        ".BB...BB.",
        "BWWBBBRRB",
        "BWRRRRRRB",
        "BRRRRRRRB",
        ".BRRRRRB.",
        "..BRRRB..",
        "...BRB...",
        "....B...."
    ];
    return <svg viewBox="0 0 9 8" className="w-[14px] h-[12px] md:w-[16px] md:h-[14px] drop-shadow-[1.5px_1.5px_0_rgba(0,0,0,0.8)]" shapeRendering="crispEdges">
        {renderPixels(art, { 'B': '#000', 'R': '#ff0000', 'W': '#ffaaaa' })}
    </svg>
}

const HungerIcon = () => {
    const art = [
        "....BBB..",
        "...BOOOB.",
        "..BOOOOB.",
        "..BDOOOB.",
        ".BDDOOB..",
        ".BODDB...",
        ".BBDB....",
        "BBBB.....",
        "BB......."
    ];
    return <svg viewBox="0 0 9 9" className="w-[14px] h-[14px] md:w-[16px] md:h-[16px] drop-shadow-[1.5px_1.5px_0_rgba(0,0,0,0.8)]" shapeRendering="crispEdges">
        {renderPixels(art, { 'B': '#000', 'D': '#7a3800', 'O': '#d37c15' })}
    </svg>
}

const DiamondSwordIcon = ({ className, size }: any) => {
    const art = [
        "..............BB",
        ".............BHW",
        "............BHDW",
        "...........BHDWB",
        "..........BHDWB.",
        ".........BHDWB..",
        "........BHDWB...",
        ".......BHDWB....",
        "......BHDWB.....",
        ".BB..BHDWB......",
        "BOOBBHDB........",
        "BOBBCOB.........",
        "BB.BOBB.........",
        "....BB..........",
        "................",
        "................"
    ];
    return <svg viewBox="0 0 16 16" className={className || `w-${size / 4} h-${size / 4}`} style={size ? { width: size, height: size } : {}} shapeRendering="crispEdges">
        {renderPixels(art, { 'B': '#000', 'D': '#33ebff', 'W': '#ffffff', 'H': '#1d9999', 'C': '#8a5a3a', 'O': '#5c3a21' })}
    </svg>
}

const SkillsPanel = () => {
    const [selected, setSelected] = useState<Skill | null>(null);

    const renderSlots = (skills: Skill[]) => {
        const slots = [];
        for (let i = 0; i < 7; i++) {
            const skill = skills[i];
            const isDark = skill && (skill.name === 'Next.js' || skill.name === 'Github' || skill.name === 'Express.js');

            slots.push(
                <div
                    key={i}
                    onClick={() => skill && setSelected(skill)}
                    className={`relative w-[48px] h-[48px] md:w-[60px] md:h-[60px] bg-[#4a4a4a] border-[2px] md:border-[3px] border-t-[#2a2a2a] border-l-[#2a2a2a] border-b-[#ffffff] border-r-[#ffffff] flex flex-col items-center justify-center p-[2px] ${skill ? 'cursor-pointer hover:bg-[#5a5a5a]' : ''
                        }`}
                >
                    {skill ? (
                        <>
                            <div className="flex-1 flex items-center justify-center pt-0 md:pt-0.5">
                                <img
                                    src={getLogo(skill.name)}
                                    alt={skill.name}
                                    className={`w-[22px] h-[22px] md:w-[26px] md:h-[26px] z-0 ${isDark ? 'filter invert brightness-200' : ''}`}
                                />
                            </div>
                            <span className="minecraft-text text-[8px] md:text-[11px] leading-tight text-white drop-shadow-[1.5px_1.5px_0_#000] text-center w-[110%] overflow-hidden text-ellipsis whitespace-nowrap mb-0.5">
                                {skill.name}
                            </span>
                        </>
                    ) : (
                        <div className="w-full h-full"></div>
                    )}
                </div>
            );
        }
        return slots;
    };

    return (
        <div className="flex flex-col items-center max-sm:justify-start sm:justify-center w-full h-full text-white mx-auto relative pointer-events-auto max-w-[950px] scale-[0.95] sm:scale-100 py-6 md:py-10 max-sm:overflow-y-auto max-sm:overflow-x-hidden [&::-webkit-scrollbar]:hidden max-sm:pb-24">

            {/* Title Header Section */}
            <div className="flex flex-col items-center justify-center w-full mb-3 md:mb-5 mt-2 md:mt-3">
                <div className="flex items-center justify-center mb-1 md:mb-[2px]">
                    <h2 className="minecraft-title-main text-lg md:text-2xl text-[#f7cf56] tracking-[0.1em] leading-none mt-2 drop-shadow-[4px_4px_0_rgba(0,0,0,0.8)]">
                        MY SKILLS
                    </h2>
                </div>

                {/* Golden Ornamented Underline */}
                <div className="flex items-center justify-center w-full mt-2 lg:mt-3 gap-3 md:gap-5">
                    {/* Left Line */}
                    <div className="flex items-center">
                        <div className="w-[6px] h-[6px] md:w-[8px] md:h-[8px] bg-[#f7cf56] shadow-[2px_2px_0_rgba(0,0,0,0.8)]"></div>
                        <div className="w-[30px] md:w-[60px] h-[2px] md:h-[4px] bg-[#f7cf56] shadow-[2px_2px_0_rgba(0,0,0,0.8)] -ml-[1px]"></div>
                    </div>

                    <span className="font-['MinecraftRegular'] text-gray-300 text-xs md:text-sm tracking-widest drop-shadow-[2px_2px_0_rgba(0,0,0,0.8)] px-1">
                        My toolkit for building impactful solutions.
                    </span>

                    {/* Right Line */}
                    <div className="flex items-center">
                        <div className="w-[30px] md:w-[60px] h-[2px] md:h-[4px] bg-[#f7cf56] shadow-[2px_2px_0_rgba(0,0,0,0.8)] -mr-[1px]"></div>
                        <div className="w-[6px] h-[6px] md:w-[8px] md:h-[8px] bg-[#f7cf56] shadow-[2px_2px_0_rgba(0,0,0,0.8)]"></div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col xl:flex-row gap-4 md:gap-5 mt-1 items-start justify-center w-full">
                {/* Left Inventory Container */}
                <div className="bg-[#c6c6c6] border-[4px] border-t-white border-l-white border-b-[#555555] border-r-[#555555] p-2 md:p-3 rounded-sm shadow-[0_0_15px_rgba(0,0,0,0.8)] w-full xl:w-auto overflow-x-hidden">
                    <div className="flex flex-col gap-1">
                        {skillData.map((category) => (
                            <div key={category.title} className="flex flex-col mb-1.5 md:mb-1.5">
                                <div className="flex items-center gap-1.5 mb-[1px]">
                                    <category.icon size={16} className="text-[#373737] drop-shadow-sm ml-1" />
                                    <span className="minecraft-text font-bold text-[#373737] text-[12px] md:text-[14px] tracking-wide -mb-[2px] drop-shadow-[1px_1px_0_rgba(255,255,255,0.3)]">
                                        {category.title}
                                    </span>
                                </div>
                                <div className="flex">
                                    {renderSlots(category.skills)}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Detail Tooltip Box */}
                {selected ? (
                    <div className="bg-[#0b0014] border-[2px] border-[#310b4f] p-4 w-full xl:w-[280px] rounded-[2px] shadow-xl flex-shrink-0 min-h-[380px] md:min-h-[400px]">
                        <h3 className="minecraft-text text-2xl md:text-3xl mb-4 text-[#00e5ff] tracking-widest drop-shadow-[2px_2px_0_rgba(0,0,0,1)]">
                            {selected.name}
                        </h3>

                        <div className="space-y-4 text-[15px] md:text-base leading-relaxed minecraft-text tracking-widest">
                            <p className="text-[#facc15]">
                                Type: <span className="text-white ml-2">{selected.type}</span>
                            </p>

                            <p className="text-white opacity-95 min-h-[50px] tracking-widest">
                                {selected.desc}
                            </p>

                            <div className="pt-1">
                                <p className="text-white mb-2">Proficiency:</p>
                                <div className="flex gap-[2px]">
                                    {Array.from({ length: 10 }).map((_, i) => (
                                        <div
                                            key={i}
                                            className={`h-3 w-[18px] md:h-3.5 md:w-[22px] rounded-[1px] ${i < selected.level ? 'bg-[#00a2b8]' : 'bg-[#1a1a1a]'}`}
                                        />
                                    ))}
                                </div>
                            </div>

                            <p className="text-[#4ade80] pt-1">
                                Experience: <span className="text-white ml-2">{selected.exp}</span>
                            </p>

                            <div className="pt-2">
                                <p className="text-[#facc15] mb-2">Projects Used:</p>
                                <ul className="space-y-1.5 ml-1">
                                    {selected.projects.map((proj, i) => (
                                        <li key={i} className="text-white flex items-center gap-1.5 tracking-widest">
                                            <span className="text-[#4ade80] text-[10px] scale-x-75 -mt-[1px]">{'>'}</span> {proj}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="hidden xl:flex w-[320px] flex-shrink-0 min-h-[380px] md:min-h-[400px] items-center justify-center relative pointer-events-none">
                        <div className="flex items-center gap-4 ml-[-60px] animate-pulse">
                            <span className="text-[#facc15] minecraft-text text-5xl drop-shadow-[3px_3px_0_#000]">◄</span>
                            <p className="minecraft-text text-white text-left leading-relaxed text-sm md:text-base drop-shadow-[2px_2px_0_#000]">
                                Select a skill block<br />to open details
                            </p>
                        </div>
                    </div>
                )}
            </div>

            {/* Minecraft Player HUD (Health, XP, Hunger, Hotbar) */}
            <div className="flex flex-col items-center justify-center w-full mt-3 md:mt-4 xl:mt-6 gap-0.5 z-50 pointer-events-none">

                {/* Health & Hunger Block */}
                <div className="flex justify-between items-end w-full max-w-[340px] md:max-w-[420px] px-1 relative z-10 -mb-2">
                    {/* Hearts (Health) */}
                    <div className="flex gap-[-2px] md:gap-[1px]">
                        {Array.from({ length: 10 }).map((_, i) => (
                            <HeartIcon key={i} />
                        ))}
                    </div>

                    {/* Hunger (Meat/Drumsticks) */}
                    <div className="flex gap-[-2px] md:gap-[1px] flex-row-reverse">
                        {Array.from({ length: 10 }).map((_, i) => (
                            <HungerIcon key={i} />
                        ))}
                    </div>
                </div>

                {/* XP Bar Component */}
                <div className="flex flex-col items-center justify-end z-10 w-[200px] md:w-[240px] mb-[-4px]">
                    <span className="minecraft-text text-[#80FF20] text-lg md:text-xl drop-shadow-[2px_2px_0_rgba(0,0,0,1)] -mb-1 mt-[-6px]">24</span>
                    <div className="w-full h-[6px] md:h-[10px] bg-[#222] border-[2px] border-[#000] p-[1px] flex items-center shadow-[1px_1px_0_#000]">
                        <div className="h-full w-[80%] bg-[#55FF55] border-t-[1.5px] border-[#AAFFAA]"></div>
                    </div>
                </div>

                {/* Hotbar Container */}
                <div className="flex bg-[#8b8b8b] border-[3px] border-[#373737] p-[1px] md:p-[2px] shadow-[0_15px_30px_rgba(0,0,0,0.8)] relative z-20 pointer-events-auto">
                    {[
                        { icon: DiamondSwordIcon, fill: '#33ebff', outline: '#004444', durability: 'bg-[#55FF55]', durWidth: '85%' },
                        { icon: Pickaxe, fill: '#33ebff', outline: '#004444', durability: 'bg-[#55FF55]', durWidth: '70%' },
                        { icon: Axe, fill: '#e6e6e6', outline: '#333333', durability: 'bg-[#55FF55]', durWidth: '95%' },
                        { icon: Shovel, fill: '#33ebff', outline: '#004444', durability: 'bg-[#55FF55]', durWidth: '50%' },
                        { icon: null },
                        { icon: null },
                        { icon: Box, fill: '#d25500', outline: '#330000' },
                        { icon: Server, fill: '#a3a3a3', outline: '#111111' },
                        { icon: Sparkles, fill: '#facc15', outline: '#222200' }
                    ].map((slot, i) => (
                        <div key={i} className={`relative w-[36px] h-[36px] md:w-[46px] md:h-[46px] bg-[#8b8b8b] mx-[1px] flex items-center justify-center group ${i === 0 ? 'ring-[3px] ring-white z-10' : 'border-[2px] border-transparent'}`}>
                            {/* Inner Hotbar Item Border (Lighter Top/Left, Darker Bottom/Right) */}
                            <div className="absolute inset-0 border-t-[#c6c6c6] border-l-[#c6c6c6] border-b-[#555] border-r-[#555] border-[2px] pointer-events-none"></div>

                            {slot?.icon && (
                                <div className={`relative flex items-center justify-center w-full h-full transition-transform ${i === 0 ? 'scale-110' : 'group-hover:scale-110'} drop-shadow-[2px_2px_0_#000]`}>
                                    <slot.icon size={26} color={slot.outline} fill={slot.fill} className={`${(i < 4 && i !== 0) ? 'rotate-[-45deg] scale-x-[-1]' : ''}`} strokeWidth={2.5} />
                                    {slot.durability && (
                                        <div className="absolute bottom-[2px] left-[3px] right-[3px] h-[4px] bg-black p-[1px]">
                                            <div className={`h-full ${slot.durability}`} style={{ width: slot.durWidth }}></div>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default SkillsPanel;
