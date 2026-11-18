import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HTMLFlipBook from 'react-pageflip';

const Page = React.forwardRef((props: any, ref: any) => {
    return (
        <div className="demoPage bg-[#dec59c] h-full overflow-hidden" ref={ref}>
            {props.children}
        </div>
    );
});
Page.displayName = 'Page';
import { BookOpen, Calendar, CheckSquare, School, Star, GraduationCap, Library, Building, Map } from 'lucide-react';

const educationData = [
    {
        title: 'Primary School',
        school: 'Agrasain Balika Siksha Sadan',
        year: '2009 - 2021',
        score: 'Percentage: 98% (ICSE)',
        icon: Library,
        type: 'school',
    },
    {
        title: 'Higher Secondary',
        school: 'Agrasain Balika Siksha Sadan',
        year: '2021 - 2023',
        score: 'Percentage: 97.5% (ISC)',
        icon: Building,
        type: 'school',
    },
    {
        title: 'B.Tech CSE',
        school: 'RCC Institute of Information Tech',
        year: '2023 - 2027',
        score: 'CGPA: 8.96',
        icon: GraduationCap,
        type: 'college',
    },
    {
        title: 'Future Journey',
        school: 'To Be Decided',
        year: '2027 - ∞',
        score: 'Endless Learning',
        icon: Map,
        type: 'college',
    }
];

const EducationPanelView = () => {
    const [view, setView] = useState<'table' | 'book'>('table');
    const [pageIndex, setPageIndex] = useState(0);

    const totalPages = educationData.length;

    const bookRef = useRef<any>(null);

    const handleNextPage = () => {
        bookRef.current?.pageFlip().flipNext();
    };

    const handlePrevPage = () => {
        bookRef.current?.pageFlip().flipPrev();
    };

    const onFlip = (e: any) => {
        setPageIndex(e.data);
    };

    const renderTable = () => (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-between w-full h-[85vh] py-8"
        >
            {/* Top Titles */}
            <div className="flex flex-col items-center mt-2 gap-2 text-center z-20 outline-none select-none">
                <div className="flex items-center gap-4">
                    <div className="flex items-center">
                        <div className="w-2 h-2 bg-[#f7cf56] rotate-45 mr-[-2px]"></div>
                        <div className="w-6 md:w-10 h-[2px] bg-[#f7cf56]"></div>
                    </div>
                    <h2 className="minecraft-title-main text-[#a855f7] text-xl md:text-3xl drop-shadow-[2px_2px_0_rgba(0,0,0,1)] tracking-widest outline-none">
                        EDUCATION LIBRARY
                    </h2>
                    <div className="flex items-center">
                        <div className="w-6 md:w-10 h-[2px] bg-[#f7cf56]"></div>
                        <div className="w-2 h-2 bg-[#f7cf56] rotate-45 ml-[-2px]"></div>
                    </div>
                </div>
                <p className="minecraft-title-main text-white text-xs md:text-sm mt-4 opacity-100 max-w-md drop-shadow-[2px_2px_0_rgba(0,0,0,1)] tracking-[2px] leading-relaxed">
                    Every chapter built the foundation<br /> of who I am today.
                </p>
            </div>

            {/* Floating Enchanted Book Area (No Table Base) */}
            <div className="relative flex-1 flex flex-col items-center justify-center w-full select-none mt-0 md:-mt-4">

                {/* Floating Particles Background */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 w-full max-w-sm mx-auto">
                    {Array.from({ length: 12 }).map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute font-bold text-lg md:text-3xl text-[#d8b4fe]"
                            style={{ textShadow: '0 0 10px #a855f7' }}
                            initial={{ opacity: 0, scale: 0.5, x: Math.random() * 250 - 125, y: Math.random() * 150 }}
                            animate={{ opacity: [0, 1, 0], y: -200 - Math.random() * 100 }}
                            transition={{ duration: 2 + Math.random() * 2.5, repeat: Infinity, delay: Math.random() * 2 }}
                        >
                            ✧
                        </motion.div>
                    ))}
                </div>

                {/* Floating 3D Book */}
                <motion.div
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="relative z-30 cursor-pointer group flex justify-center items-center outline-none select-none"
                    onClick={() => setView('book')}
                >
                    {/* The 3D CSS Book */}
                    <div className="relative z-10 w-64 h-40 md:w-80 md:h-52 perspective-[1200px] outline-none group-hover:scale-110 transition-transform duration-500">
                        <motion.div
                            className="w-full h-full relative border-none outline-none"
                            style={{ transformStyle: 'preserve-3d' }}
                            animate={{ rotateY: [-8, 8, -8], rotateX: [15, 23, 15] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        >
                            {/* Left Half Cover */}
                            <div
                                className="absolute right-1/2 top-0 w-1/2 h-full bg-[#311c0f] rounded-l-lg border-[4px] border-r-0 border-[#221008] shadow-[0_20px_30px_rgba(0,0,0,0.8),inset_0_0_30px_black] origin-right flex justify-end"
                                style={{ transform: 'rotateY(35deg)', transformStyle: 'preserve-3d' }}
                            >
                                {/* Paper Edge 3D Stack */}
                                {Array.from({ length: 6 }).map((_, i) => (
                                    <div key={i} className="absolute right-0 top-2 bottom-2 left-3 bg-[#e3cca1] rounded-l-md border-y border-l border-[#d3ba8f]" style={{ transform: `translateZ(${1 + i * 1.5}px)` }}></div>
                                ))}

                                {/* Top Pages Surface */}
                                <div className="absolute right-0 top-2 bottom-2 left-3 bg-[#e3cca1] shadow-[inset_0_0_20px_rgba(102,64,28,0.9)] border border-r-0 border-[#a88a59] rounded-l-md" style={{ transform: 'translateZ(10px)' }}>
                                    <div className="p-3 md:p-5 flex flex-col gap-2.5 opacity-50">
                                        <div className="w-full h-2 bg-[#704d20] rounded-sm"></div>
                                        <div className="w-3/4 h-2 bg-[#704d20] rounded-sm"></div>
                                        <div className="w-5/6 h-2 bg-[#704d20] rounded-sm mt-3"></div>
                                        <div className="w-4/5 h-2 bg-[#704d20] rounded-sm"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Half Cover */}
                            <div
                                className="absolute left-1/2 top-0 w-1/2 h-full bg-[#311c0f] rounded-r-lg border-[4px] border-l-0 border-[#221008] shadow-[0_20px_30px_rgba(0,0,0,0.8),inset_0_0_30px_black] origin-left"
                                style={{ transform: 'rotateY(-35deg)', transformStyle: 'preserve-3d' }}
                            >
                                {/* Paper Edge 3D Stack */}
                                {Array.from({ length: 6 }).map((_, i) => (
                                    <div key={i} className="absolute left-0 top-2 bottom-2 right-3 bg-[#e3cca1] rounded-r-md border-y border-r border-[#d3ba8f]" style={{ transform: `translateZ(${1 + i * 1.5}px)` }}></div>
                                ))}

                                {/* Top Pages Surface */}
                                <div className="absolute left-0 top-2 bottom-2 right-3 bg-[#e3cca1] shadow-[inset_0_0_20px_rgba(102,64,28,0.9)] border border-l-0 border-[#a88a59] rounded-r-md" style={{ transform: 'translateZ(10px)' }}>
                                    <div className="p-3 md:p-5 flex flex-col gap-2.5 opacity-50">
                                        <div className="w-full h-2 bg-[#704d20] rounded-sm"></div>
                                        <div className="w-4/5 h-2 bg-[#704d20] rounded-sm"></div>
                                        <div className="w-full h-2 bg-[#704d20] rounded-sm mt-3"></div>
                                        <div className="w-2/3 h-2 bg-[#704d20] rounded-sm"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Center Spine Dark Crease */}
                            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-3 bg-[#110905] shadow-[inset_0_0_10px_black] rounded" style={{ transform: 'translateZ(8px)' }}></div>

                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Bottom Dialogue */}
            <div
                className="bg-[#110B07] border-[3px] border-[#926c3f] p-4 md:p-6 flex items-center gap-4 md:gap-6 w-[95%] md:w-[75%] relative -mb-4 md:-mb-8 z-20 shadow-[0_15px_30px_rgba(0,0,0,0.8)] cursor-pointer outline-none hover:brightness-110 transition-all select-none"
                onClick={() => setView('book')}
            >
                {/* Overlapping corners */}
                <div className="absolute top-[-3px] left-[-3px] w-2 h-2 md:w-3 md:h-3 bg-[#926c3f] pointer-events-none" />
                <div className="absolute top-[-3px] right-[-3px] w-2 h-2 md:w-3 md:h-3 bg-[#926c3f] pointer-events-none" />
                <div className="absolute bottom-[-3px] left-[-3px] w-2 h-2 md:w-3 md:h-3 bg-[#926c3f] pointer-events-none" />
                <div className="absolute bottom-[-3px] right-[-3px] w-2 h-2 md:w-3 md:h-3 bg-[#926c3f] pointer-events-none" />

                <div className="bg-[#1a110a] border border-[#553b22] p-2 md:p-3 flex-shrink-0 outline-none pointer-events-none">
                    <BookOpen className="w-6 h-6 md:w-8 md:h-8 text-gray-400" />
                </div>
                <div className="minecraft-text outline-none pointer-events-none">
                    <p className="text-[#a855f7] text-base md:text-xl font-bold tracking-widest mb-1.5 md:mb-2 drop-shadow-[1px_1px_0_rgba(0,0,0,1)]">Click the book to open my education journey!</p>
                    <p className="text-gray-200 text-sm md:text-lg font-bold tracking-wide drop-shadow-[1px_1px_0_rgba(0,0,0,1)]">Knowledge is power.</p>
                </div>
            </div>
        </motion.div>
    );

    const renderBookPage = (item: any, pageNum: number) => {
        if (!item) return <div className="flex-1 h-full bg-[#dec59c] shadow-[inset_0_0_80px_rgba(102,64,28,0.3)]" />;

        return (
            <div className="w-full h-full bg-[#dec59c] p-2 sm:p-4 md:p-8 flex flex-col relative shadow-[inset_0_0_80px_rgba(102,64,28,0.3),inset_0_0_10px_rgba(0,0,0,0.1)] pointer-events-auto">

                {/* Vintage Page Border */}
                <div className="absolute inset-1 sm:inset-2 border-[1px] sm:border-[1.5px] border-[#c0a47d] pointer-events-none rounded-sm">
                    {/* Corner Ornaments */}
                    <div className="absolute -top-1 -left-1 w-2 h-2 sm:w-3 sm:h-3 bg-[#dec59c] border-b-[1.5px] border-r-[1.5px] border-[#c0a47d]"></div>
                    <div className="absolute -top-1 -right-1 w-2 h-2 sm:w-3 sm:h-3 bg-[#dec59c] border-b-[1.5px] border-l-[1.5px] border-[#c0a47d]"></div>
                    <div className="absolute -bottom-1 -left-1 w-2 h-2 sm:w-3 sm:h-3 bg-[#dec59c] border-t-[1.5px] border-r-[1.5px] border-[#c0a47d]"></div>
                    <div className="absolute -bottom-1 -right-1 w-2 h-2 sm:w-3 sm:h-3 bg-[#dec59c] border-t-[1.5px] border-l-[1.5px] border-[#c0a47d]"></div>
                </div>

                {/* Page Number & Separator */}
                <div className="text-center w-full minecraft-text text-[#4a2b16] text-[8px] sm:text-[10px] md:text-xs font-bold tracking-widest opacity-80 mb-0.5 sm:mb-1 mt-0.5 sm:mt-1 relative z-10">
                    Page {pageNum} of {Math.ceil(totalPages / 2) * 2}
                </div>

                <div className="w-full flex items-center justify-center mb-1 sm:mb-2 md:mb-4 relative z-10">
                    <div className="w-6 sm:w-12 h-[1px] bg-[#b59871]"></div>
                    <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rotate-45 border border-[#856742] mx-1 sm:mx-2 bg-[#dec59c]"></div>
                    <div className="w-6 sm:w-12 h-[1px] bg-[#b59871]"></div>
                </div>

                <div className="w-full flex-1 flex flex-col items-center relative z-10">

                    {/* Illustration / Picture Area */}
                    <div className="w-6 h-6 sm:w-14 sm:h-14 md:w-20 md:h-20 mb-1 sm:mb-2 md:mb-3 relative flex justify-center items-center group transform transition-transform hover:scale-105 duration-300 shadow-[0_10px_20px_rgba(0,0,0,0.5)] rounded-full">
                        {/* Decorative background behind icon */}
                        <div className="absolute inset-0 bg-[#331c0e] rounded-full shadow-[inset_0_0_15px_rgba(0,0,0,0.8),0_5px_15px_rgba(0,0,0,0.3)] border-[1px] sm:border-[2px] border-[#5e371c]"></div>
                        <div className="absolute inset-1 sm:inset-1.5 border-[1px] sm:border-[1.5px] border-dashed border-[#8c5e35] rounded-full opacity-60"></div>
                        {/* The rendered Icon */}
                        <div className="relative z-10 text-[#dec59c] drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                            {item.icon && <item.icon className="w-3 h-3 sm:w-6 sm:h-6 md:w-8 md:h-8" strokeWidth={1.5} />}
                        </div>
                    </div>

                    <h3 className="minecraft-text text-[#24130a] text-[10px] sm:text-xl md:text-2xl mb-0.5 sm:mb-1 md:mb-2 text-center tracking-wide font-bold">
                        {item.title}
                    </h3>
                    <p className="minecraft-text text-[7px] sm:text-sm md:text-base text-[#4a2b16] mb-1.5 sm:mb-2 md:mb-3 text-center px-1 sm:px-2 font-semibold opacity-90 leading-tight">
                        {item.school}
                    </p>

                    <div className="flex flex-col gap-1.5 sm:gap-3 mt-auto mb-1 sm:mb-4 md:mb-6 w-[98%] sm:w-[95%] mx-auto border-t-[1px] sm:border-t-[1.5px] border-dashed border-[#b59871] pt-1.5 sm:pt-2 md:pt-3 relative shrink-0">
                        <div className="flex items-center gap-1.5 sm:gap-3 md:gap-4 group">
                            <div className="bg-[#4a2b16] p-1 sm:p-2 md:p-2.5 rounded-[1px] sm:rounded-sm shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)] group-hover:bg-[#5E371C] transition-colors">
                                <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-[#dec59c]" />
                            </div>
                            <span className="minecraft-text text-[7px] sm:text-xs md:text-sm text-[#2e1a0d] font-bold tracking-wider">{item.year}</span>
                        </div>
                        <div className="flex items-center gap-1.5 sm:gap-3 md:gap-4 group">
                            <div className="bg-[#4a2b16] p-1 sm:p-2 md:p-2.5 rounded-[1px] sm:rounded-sm shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)] group-hover:bg-[#5E371C] transition-colors">
                                <Star className="w-3 h-3 sm:w-4 sm:h-4 text-[#dec59c] fill-[#dec59c]" />
                            </div>
                            <span className="minecraft-text text-[7px] sm:text-xs md:text-sm text-[#2e1a0d] font-bold tracking-wider whitespace-normal">{item.score}</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const renderBook = () => (
        <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center w-full h-[90vh] py-8 relative bg-cover bg-center overflow-hidden"
            style={{ backgroundImage: 'url("/education_modal.webp")' }}
        >
            {/* Top Title */}
            <div className="flex items-center gap-2 md:gap-4 mb-2 md:mb-8">
                <div className="flex items-center opacity-70">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#a855f7] rotate-45 mr-[-2px]"></div>
                    <div className="w-4 md:w-10 h-1 bg-[#a855f7]"></div>
                </div>
                <h2 className="minecraft-title-main text-[#a855f7] text-lg sm:text-2xl md:text-4xl leading-tight md:leading-normal drop-shadow-[3px_3px_0_rgba(0,0,0,1)] tracking-widest text-center cursor-pointer hover:scale-105" onClick={() => setView('table')}>
                    <span className="hidden sm:inline">MY EDUCATION JOURNEY</span>
                    <span className="sm:hidden block">MY EDUCATION<br />JOURNEY</span>
                </h2>
                <div className="flex items-center opacity-70">
                    <div className="w-4 md:w-10 h-1 bg-[#a855f7]"></div>
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#a855f7] rotate-45 ml-[-2px]"></div>
                </div>
            </div>


            {/* Purple Particles floating around the book */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 w-full max-w-4xl mx-auto overflow-hidden">
                {Array.from({ length: 12 }).map((_, i) => (
                    <motion.div
                        key={`p-${i}`}
                        className="absolute font-bold text-2xl md:text-4xl text-[#d8b4fe]"
                        style={{ textShadow: '0 0 15px #a855f7' }}
                        initial={{ opacity: 0, scale: 0.5, x: Math.random() * 800 - 400, y: Math.random() * 400 - 200 }}
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 1.5 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
                    >
                        +
                    </motion.div>
                ))}
            </div>

            {/* Book Container with Navigation */}
            <div className="w-full relative flex items-center justify-center gap-2 md:gap-6 mt-4">

                {/* Left Nav Arrow */}
                <motion.button
                    animate={{ y: [-5, 5, -5] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    onClick={handlePrevPage}
                    disabled={pageIndex === 0}
                    className={`relative w-8 h-10 sm:w-12 sm:h-16 md:w-16 md:h-20 bg-[#69488f] flex items-center justify-center flex-shrink-0 z-50 hover:bg-[#8659c2] active:scale-95 transition-all shadow-[inset_-4px_-4px_0_rgba(0,0,0,0.3),inset_4px_4px_0_rgba(255,255,255,0.2),0_0_20px_rgba(168,85,247,0.8)] border-2 border-[#1c0d2e] ${pageIndex === 0 ? 'opacity-30 cursor-not-allowed' : ''}`}
                >
                    <span className="minecraft-text text-[#f7cf56] text-xl sm:text-3xl md:text-5xl font-bold drop-shadow-[3px_3px_0_rgba(0,0,0,0.8)] pb-1 md:pb-2 pr-0.5 md:pr-1">{"<"}</span>
                </motion.button>

                {/* The HTMLFlipBook Realistic Peeling Book */}
                <div className="w-[70%] sm:w-[85%] md:w-[65%] max-w-4xl aspect-[4/3] md:aspect-[2/1.3] relative z-10 p-1 md:p-2 bg-[#221008] rounded-md shadow-[0_10px_30px_rgba(0,0,0,0.9),inset_0_0_20px_black] border-[3px] md:border-[4px] border-[#160a05]">
                    {/* Spine Shadow for realistic center depth */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-8 md:w-16 -translate-x-1/2 bg-gradient-to-r from-transparent via-[rgba(0,0,0,0.6)] to-transparent pointer-events-none z-50"></div>

                    {/* @ts-ignore */}
                    <HTMLFlipBook
                        width={400}
                        height={550}
                        size="stretch"
                        minWidth={100}
                        maxWidth={600}
                        minHeight={150}
                        maxHeight={800}
                        showCover={false}
                        mobileScrollSupport={true}
                        className="w-full h-full"
                        ref={bookRef}
                        onFlip={onFlip}
                        usePortrait={false}
                    >
                        {educationData.map((item, index) => (
                            <Page key={index}>
                                {renderBookPage(item, index + 1)}
                            </Page>
                        ))}
                    </HTMLFlipBook>
                </div>

                {/* Right Nav Arrow */}
                <motion.button
                    animate={{ y: [5, -5, 5] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    onClick={handleNextPage}
                    disabled={pageIndex >= 2}
                    className={`relative w-8 h-10 sm:w-12 sm:h-16 md:w-16 md:h-20 bg-[#69488f] flex items-center justify-center flex-shrink-0 z-50 hover:bg-[#8659c2] active:scale-95 transition-all shadow-[inset_-4px_-4px_0_rgba(0,0,0,0.3),inset_4px_4px_0_rgba(255,255,255,0.2),0_0_20px_rgba(168,85,247,0.8)] border-2 border-[#1c0d2e] ${pageIndex >= Math.ceil(totalPages / 2) * 2 - 2 ? 'opacity-30 cursor-not-allowed' : ''}`}
                >
                    <span className="minecraft-text text-[#f7cf56] text-xl sm:text-3xl md:text-5xl font-bold drop-shadow-[3px_3px_0_rgba(0,0,0,0.8)] pb-1 md:pb-2 pl-0.5 md:pl-1">{">"}</span>
                </motion.button>

            </div>

            {/* Pagination Dots */}
            <div className="flex items-center gap-4 mt-8 md:mt-12">
                {Array.from({ length: Math.ceil(totalPages / 2) }).map((_, i) => (
                    <div
                        key={i}
                        className={`w-4 h-4 md:w-5 md:h-5 rounded-full cursor-pointer transition-all ${Math.floor(pageIndex / 2) === i ? 'bg-[#a855f7] shadow-[0_0_15px_#a855f7] scale-125' : 'bg-gray-600 shadow-inner'}`}
                        onClick={() => bookRef.current?.pageFlip().turnToPage(i * 2)}
                    />
                ))}
            </div>
        </motion.div >
    );

    return (
        <div className="w-full h-full text-white pointer-events-auto overflow-hidden">
            <AnimatePresence mode="wait">
                <motion.div key={view} className="w-full h-full flex flex-col items-center justify-center">
                    {view === 'table' ? renderTable() : renderBook()}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default EducationPanelView;
