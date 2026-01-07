import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Plus, Box, Zap, Hexagon, X } from 'lucide-react';

const Neo = () => {
    const properties = [
        { id: '01', title: 'CONCRETE_LOFT', price: '¥2,500,000', location: 'Shibuya', area: '120m²' },
        { id: '02', title: 'RAW_STUDIOS', price: '¥1,800,000', location: 'Brooklyn', area: '85m²' },
        { id: '03', title: 'WAREHOUSE_X', price: '¥4,200,000', location: 'Berlin', area: '340m²' },
    ];

    return (
        <div className="bg-neo-white min-h-screen text-black font-mono selection:bg-neo-orange selection:text-white pb-24 border-x-4 border-black mx-auto max-w-[1600px] h-screen overflow-y-scroll snap-y snap-mandatory relative scroll-smooth">

            {/* FIXED SIDEBAR - Hidden on mobile */}
            <div className="hidden md:flex fixed left-0 top-0 bottom-0 w-24 border-r-4 border-black flex-col justify-between items-center py-8 z-50 bg-white">
                <div className="font-black text-2xl rotate-180 writing-vertical-rl">REAL_ESTATE</div>
                <div className="flex flex-col gap-8">
                    <div className="w-4 h-4 bg-black"></div>
                    <div className="w-4 h-4 border-4 border-black"></div>
                    <div className="w-4 h-4 bg-neo-orange"></div>
                </div>
                <div className="font-bold">2026</div>
            </div>

            {/* NAV - Adjusted margin for mobile */}
            <nav className="fixed top-0 left-0 right-0 h-16 md:h-20 border-b-4 border-black bg-white z-40 md:ml-24 flex justify-between items-center px-4 md:px-8">
                <div className="flex gap-4">
                    <span className="bg-black text-white px-2 font-bold hover:bg-neo-green hover:text-black transition-colors cursor-pointer">BUY</span>
                    <span className="border-2 border-black px-2 font-bold hover:bg-black hover:text-white transition-colors cursor-pointer">RENT</span>
                </div>
                <div className="font-black text-2xl tracking-tighter hidden md:block">
                    NEO_BRUTALIST
                </div>
                <button className="bg-neo-orange border-2 border-black px-4 md:px-6 py-2 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all active:translate-x-[4px] active:translate-y-[4px] active:shadow-none text-sm md:text-base">
                    GET_ACCESS
                </button>
            </nav>

            {/* SECTION 1: HERO - Padding adjustment */}
            <section className="h-screen snap-start w-full bg-neo-white pt-20 px-4 md:pt-20 md:pl-24 flex flex-col justify-between overflow-hidden relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border-[20px] border-black/5 rounded-full z-0 animate-spin-slow"></div>

                <div className="grid grid-cols-1 md:grid-cols-2 h-full z-10">
                    <div className="p-8 md:p-12 flex flex-col justify-center border-r-4 border-black relative">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: '100px' }}
                            transition={{ duration: 1 }}
                            className="h-4 bg-neo-green mb-6 md:mb-8"
                        />
                        <h1 className="text-5xl md:text-7xl lg:text-9xl font-black leading-[0.85] tracking-tighter mb-6 md:mb-8 break-words">
                            URBAN<br />
                            <span className="text-stroke-3 text-transparent hover:text-neo-orange transition-colors duration-300">LIVING</span><br />
                            SPACE
                        </h1>
                        <p className="text-lg md:text-xl font-bold max-w-md border-l-8 border-neo-orange pl-6 py-2 bg-black/5">
                            RAW AESTHETICS FOR THE MODERN NOMAD. NO FLUFF. JUST CONCRETE.
                        </p>
                    </div>
                    <div className="relative border-b-4 md:border-b-0 border-black bg-neutral-200 overflow-hidden group">
                        <img src="https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1600&auto=format&fit=crop" className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500" alt="Apartment" />
                        <div className="absolute inset-0 bg-neo-orange mix-blend-multiply opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>

                        <div className="absolute bottom-0 left-0 bg-white border-t-4 border-r-4 border-black p-4 md:p-6">
                            <h3 className="text-3xl md:text-4xl font-black">#01</h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2: MARQUEE & GRID - Padding adjustment */}
            <section className="min-h-screen snap-start w-full bg-black text-white md:pl-24 flex flex-col">
                <div className="h-20 md:h-24 bg-neo-green text-black border-y-4 border-black flex items-center overflow-hidden whitespace-nowrap flex-shrink-0">
                    <div className="animate-marquee font-black text-4xl md:text-5xl flex gap-12 items-center">
                        <span>NEW_LISTINGS</span>
                        <Zap size={32} md:size={40} fill="black" />
                        <span>OPEN_HOUSE</span>
                        <Zap size={32} md:size={40} fill="black" />
                        <span>SOLD_OUT</span>
                        <Zap size={32} md:size={40} fill="black" />
                        <span>NEW_LISTINGS</span>
                        <Zap size={32} md:size={40} fill="black" />
                        <span>OPEN_HOUSE</span>
                        <Zap size={32} md:size={40} fill="black" />
                    </div>
                </div>

                <div className="flex-grow grid grid-cols-1 md:grid-cols-3">
                    {properties.map((prop, i) => (
                        <div key={i} className="border-r-4 border-b-4 border-white/20 hover:bg-white hover:text-black transition-colors duration-300 group relative p-6 md:p-8 flex flex-col justify-between cursor-pointer">
                            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                <ArrowUpRight size={32} md:size={48} strokeWidth={3} />
                            </div>
                            <div>
                                <div className="bg-neo-orange w-fit px-2 py-1 font-bold text-black text-xs md:text-sm mb-4">FOR SALE</div>
                                <h3 className="text-3xl md:text-3xl lg:text-5xl font-black mb-2 leading-none break-all">{prop.title}</h3>
                                <div className="text-xl md:text-2xl font-bold">{prop.price}</div>
                            </div>
                            <div className="grid grid-cols-2 gap-4 mt-6 md:mt-8 font-bold border-t-4 border-current pt-4 text-sm md:text-base">
                                <div>LOC: {prop.location}</div>
                                <div className="text-right">AREA: {prop.area}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* SECTION 3: BOLD CTA - Padding adjustment */}
            <section className="h-screen snap-start w-full bg-neo-white px-4 md:pl-24 flex items-center justify-center relative overflow-hidden">
                {/* Background Grid */}
                <div className="absolute inset-0 z-0 opacity-10"
                    style={{ backgroundImage: 'linear-gradient(#000 2px, transparent 2px), linear-gradient(90deg, #000 2px, transparent 2px)', backgroundSize: '40px 40px' }}>
                </div>

                <div className="z-10 text-center max-w-4xl relative w-full px-4">
                    <div className="absolute -top-12 -left-12 text-black/10 hidden md:block">
                        <Plus size={200} strokeWidth={4} />
                    </div>
                    <div className="absolute -bottom-12 -right-12 text-black/10 hidden md:block">
                        <Hexagon size={200} strokeWidth={4} />
                    </div>

                    <h2 className="text-4xl md:text-7xl lg:text-9xl font-black mb-6 md:mb-8 leading-none bg-black text-white p-4 inline-block -rotate-2">
                        READY TO MOVE?
                    </h2>

                    <div className="bg-white border-4 border-black p-6 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
                        <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 uppercase">Join the waitlist</h3>
                        <div className="flex flex-col md:flex-row gap-4">
                            <input type="email" placeholder="ENTER_EMAIL" className="flex-grow bg-neutral-200 border-4 border-black p-3 md:p-4 font-bold placeholder-black/50 focus:outline-none focus:bg-neo-green focus:border-black transition-colors" />
                            <button className="bg-black text-white px-6 md:px-8 py-3 md:py-4 font-black text-lg md:text-xl hover:bg-neo-orange hover:text-black border-4 border-black transition-colors uppercase whitespace-nowrap">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Neo;
