import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Sun, Wind, ArrowRight, Heart } from 'lucide-react';

const Organic = () => {
    return (
        <div className="bg-organic-bg min-h-screen text-organic-text font-sans overflow-y-scroll snap-y snap-mandatory h-screen selection:bg-organic-sage selection:text-white scroll-smooth relative">

            {/* FLOATING NAV (Pill Shape) */}
            <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 bg-white/80 backdrop-blur-md px-8 py-4 rounded-full shadow-sm border border-white flex gap-8 items-center">
                <div className="font-bold flex items-center gap-2 text-organic-text">
                    <Leaf className="text-organic-sage" fill="currentColor" size={20} />
                    <span className="hidden md:inline">NATURE_HOMES</span>
                </div>
                <div className="hidden md:flex gap-6 text-sm font-medium text-organic-text/70">
                    <a href="#" className="hover:text-organic-sage transition-colors">Retreats</a>
                    <a href="#" className="hover:text-organic-sage transition-colors">Cabins</a>
                    <a href="#" className="hover:text-organic-sage transition-colors">Community</a>
                </div>
                <button className="bg-organic-sage text-white px-5 py-2 rounded-full text-sm hover:bg-organic-sage/90 transition-colors shadow-lg shadow-organic-sage/30">
                    Book Stay
                </button>
            </nav>

            {/* SECTION 1: HERO */}
            <section className="h-screen snap-start w-full relative flex items-center justify-center overflow-hidden bg-[#f3f1e7]">
                {/* Decorative Blobs */}
                <motion.div
                    animate={{
                        y: [0, -30, 0],
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, 0]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-20 right-20 w-[400px] h-[400px] bg-organic-sage/20 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        y: [0, 50, 0],
                        scale: [1, 1.2, 1],
                        rotate: [0, -10, 0]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-[-100px] left-[-100px] w-[600px] h-[600px] bg-organic-terra/20 rounded-full blur-3xl"
                />

                <div className="relative z-10 text-center px-4 max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-6 md:mb-8 text-sm text-organic-text/60"
                    >
                        <Sun size={16} className="text-orange-400" />
                        <span>Live in harmony with nature</span>
                    </motion.div>

                    <h1 className="text-5xl md:text-6xl lg:text-8xl font-serif text-organic-text mb-4 md:mb-6 leading-tight">
                        Breathable <br />
                        <span className="italic text-organic-sage">Living Spaces</span>
                    </h1>

                    <p className="text-lg md:text-xl text-organic-text/70 mb-6 md:mb-10 font-light max-w-2xl mx-auto">
                        Discover eco-friendly homes designed for wellness, sustainability, and peace of mind.
                    </p>

                    <div className="bg-white p-2 rounded-full shadow-xl flex items-center max-w-lg mx-auto transform hover:scale-105 transition-transform duration-300">
                        <input
                            type="text"
                            placeholder="Where do you want to heal?"
                            className="flex-grow px-6 bg-transparent border-none outline-none text-organic-text placeholder-organic-text/40"
                        />
                        <button className="bg-organic-text text-white p-4 rounded-full hover:bg-organic-sage transition-colors">
                            <ArrowRight size={20} />
                        </button>
                    </div>
                </div>

                <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-[rgb(243,241,231)] to-transparent" />
            </section>

            {/* SECTION 2: CAROUSEL (Rounded Cards) */}
            <section className="min-h-screen md:h-screen snap-start w-full flex items-center bg-white relative py-12 md:py-0">
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[rgb(243,241,231)] to-transparent pointer-events-none" />

                <div className="max-w-7xl mx-auto w-full px-4 md:px-8 relative z-10">
                    <div className="flex justify-between items-end mb-8 md:mb-12">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-serif mb-2 md:mb-4 text-organic-text">Curated Sanctuaries</h2>
                            <p className="text-organic-text/60 text-sm md:text-base">Handpicked homes with the lowest carbon footprint.</p>
                        </div>
                        <div className="flex gap-4">
                            <button className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-organic-text/20 flex items-center justify-center hover:bg-organic-bg transition-colors">←</button>
                            <button className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-organic-text/20 flex items-center justify-center hover:bg-organic-bg transition-colors">→</button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        {[
                            { title: "Forest Cabin", img: "https://images.unsplash.com/photo-1449156493391-d2cfa28e468b?q=80&w=800&auto=format&fit=crop", tag: "Off-Grid" },
                            { title: "Coastal Villa", img: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=800&auto=format&fit=crop", tag: "Solar Powered" },
                            { title: "Desert Bloom", img: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=800&auto=format&fit=crop", tag: "Recycled Materials" },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10 }}
                                className="bg-organic-bg rounded-[24px] md:rounded-[32px] p-3 md:p-4 pb-6 md:pb-8 cursor-pointer group"
                            >
                                <div className="relative h-[250px] md:h-[300px] rounded-[20px] md:rounded-[24px] overflow-hidden mb-4 md:mb-6">
                                    <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-organic-sage uppercase tracking-wide">
                                        {item.tag}
                                    </div>
                                </div>
                                <div className="px-2 md:px-4">
                                    <div className="flex justify-between items-center mb-2">
                                        <h3 className="text-xl md:text-2xl font-serif">{item.title}</h3>
                                        <Heart size={20} className="text-organic-text/30 hover:text-red-400 transition-colors" />
                                    </div>
                                    <p className="text-organic-text/60 text-sm">Starting from $450/night</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 3: TESTIMONIALS & FOOTER */}
            <section className="h-screen snap-start w-full bg-[#e8e6da] flex flex-col justify-center items-center relative overflow-hidden px-4">
                <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(#9caf88 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

                <div className="max-w-4xl mx-auto text-center relative z-10 w-full">
                    <Wind className="mx-auto mb-6 md:mb-8 text-organic-sage" size={40} md:size={48} />
                    <h2 className="text-3xl md:text-4xl lg:text-6xl font-serif mb-8 md:mb-12 italic text-organic-text leading-tight">
                        "We found more than just a house;<br />we found our peace of mind."
                    </h2>

                    <div className="flex items-center justify-center gap-4 mb-12 md:mb-16">
                        <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop" className="w-full h-full object-cover" />
                        </div>
                        <div className="text-left">
                            <div className="font-bold text-organic-text">Sarah & James</div>
                            <div className="text-sm text-organic-text/60">Moved to Oregon, 2025</div>
                        </div>
                    </div>

                    <div className="bg-white p-6 md:p-8 rounded-[32px] md:rounded-[40px] shadow-sm max-w-md mx-auto w-full">
                        <h3 className="text-lg md:text-xl font-serif mb-4">Join our community</h3>
                        <div className="flex gap-2">
                            <input type="email" placeholder="hello@example.com" className="bg-organic-bg flex-grow px-4 md:px-6 py-3 rounded-full outline-none text-sm md:text-base" />
                            <button className="bg-organic-text text-white px-4 md:px-6 py-3 rounded-full hover:bg-organic-sage transition-colors text-sm md:text-base">Join</button>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Organic;
