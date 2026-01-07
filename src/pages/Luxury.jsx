import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Search, MapPin, ArrowRight, Star, Home, Key, Building2 } from 'lucide-react';

const Luxury = () => {
    const containerRef = useRef(null);

    // Mock Data
    const trendingProperties = [
        { id: 1, title: "Ocean View Estate", location: "Beverly Hills, CA", price: "$25,000,000", image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1600&auto=format&fit=crop" },
        { id: 2, title: "Modern Glass Villa", location: "Malibu, CA", price: "$18,500,000", image: "https://images.unsplash.com/photo-1659720879283-7bb2c29370cf?q=80&w=1600&auto=format&fit=crop" },
        { id: 3, title: "Skyline Penthouse", location: "New York, NY", price: "$32,000,000", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop" },
        { id: 4, title: "Private Island Retreat", location: "Exuma, Bahamas", price: "$55,000,000", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop" },
    ];

    return (
        <div className="bg-luxury-dark text-white font-sans min-h-screen md:h-screen md:overflow-y-scroll md:snap-y md:snap-mandatory scroll-smooth overflow-x-hidden selection:bg-emerald-500/30 selection:text-emerald-200">

            {/* Navigation (Floating Glass) */}
            <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-4 md:px-8 py-4 md:py-6 pointer-events-none bg-gradient-to-b from-black/80 to-transparent md:bg-none">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-2xl font-serif font-bold tracking-widest pointer-events-auto cursor-pointer"
                >
                    LUXE.
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 1 }}
                    className="bg-white/5 backdrop-blur-md rounded-full px-6 py-3 flex gap-8 text-sm font-medium border border-white/10 pointer-events-auto shadow-2xl hidden md:flex"
                >
                    {['Buy', 'Rent', 'Sell', 'Concierge'].map((item) => (
                        <a key={item} href="#" className="hover:text-emerald-400 transition-colors duration-300">{item}</a>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 1 }}
                    className="pointer-events-auto"
                >
                    <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-full transition-colors duration-300 font-medium text-sm shadow-lg shadow-emerald-900/20">
                        Sign In
                    </button>
                </motion.div>
            </nav>

            {/* SECTION 1: HERO */}
            <section className="min-h-screen md:h-screen snap-start w-full relative flex flex-col items-center justify-center overflow-hidden pt-20 md:pt-0">
                {/* Ambient Background Video Placeholder (Using Image for Stability with Overlay) */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark via-luxury-dark/50 to-transparent z-10" />
                    <div className="absolute inset-0 bg-black/40 z-10" /> {/* Darken Filter */}
                    <motion.img
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 10, ease: "easeOut" }}
                        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2560&auto=format&fit=crop"
                        alt="Luxury Home"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="relative z-20 text-center max-w-4xl px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="text-4xl md:text-8xl font-serif font-base mb-4 md:mb-6 tracking-tight leading-tight"
                    >
                        Find Your <span className="italic text-emerald-400">Sanctuary</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="text-base md:text-xl text-neutral-300 mb-8 md:mb-12 font-light tracking-wide"
                    >
                        Exclusive properties for the uncompromising few.
                    </motion.p>

                    {/* Glass Search Bar */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="bg-white/10 backdrop-blur-xl border border-white/20 p-2 rounded-full max-w-2xl mx-auto flex items-center shadow-2xl w-full"
                    >
                        <div className="px-4 md:px-6 flex items-center gap-2 border-r border-white/10 h-full text-neutral-300 hidden md:flex">
                            <MapPin size={18} />
                            <span className="text-sm">Location</span>
                        </div>
                        <input
                            type="text"
                            placeholder="Beverly Hills, Dubai, London..."
                            className="bg-transparent border-none outline-none text-white px-4 md:px-6 w-full placeholder-neutral-400 font-light text-sm md:text-base"
                        />
                        <button className="bg-emerald-600 hover:bg-emerald-500 text-white p-3 md:p-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-emerald-900/50">
                            <Search size={18} className="md:w-5 md:h-5" />
                        </button>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 10 }}
                    transition={{ repeat: Infinity, duration: 2, repeatType: "reverse", delay: 2 }}
                    className="absolute bottom-10 z-20 text-neutral-400 hidden md:flex flex-col items-center gap-2 text-xs tracking-widest uppercase"
                >
                    <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-emerald-500 to-transparent"></div>
                    Scroll to explore
                </motion.div>
            </section>

            {/* SECTION 2: TRENDING (Horizontal Scroll) */}
            <section className="min-h-screen md:h-screen snap-start w-full relative flex flex-col justify-center bg-luxury-dark/95 py-20 md:py-0">
                <div className="max-w-7xl mx-auto w-full px-4 md:px-8 flex flex-col h-full justify-center">

                    <div className="flex justify-between items-end mb-8 md:mb-12">
                        <div>
                            <motion.span
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                className="text-emerald-500 uppercase tracking-[0.2em] text-xs md:text-sm font-semibold mb-2 block"
                            >
                                Curated Collection
                            </motion.span>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="text-3xl md:text-5xl font-serif"
                            >
                                Trending This Week
                            </motion.h2>
                        </div>

                        <div className="hidden md:flex gap-2 text-white/50">
                            <span className="hover:text-white cursor-pointer transition-colors">Prev</span>
                            <span className="text-emerald-500">/</span>
                            <span className="hover:text-white cursor-pointer transition-colors">Next</span>
                        </div>
                    </div>

                    {/* Horizontal Scroll Container */}
                    <div className="flex gap-4 md:gap-8 overflow-x-auto snap-x snap-mandatory pb-8 md:pb-12 scrollbar-hide -mx-4 px-4 md:-mx-8 md:px-8">
                        {trendingProperties.map((property, index) => (
                            <motion.div
                                key={property.id}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                className="min-w-[85vw] md:min-w-[380px] h-[400px] md:h-[50vh] snap-center group relative rounded-3xl overflow-hidden cursor-pointer shadow-xl"
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                                <img
                                    src={property.image}
                                    alt={property.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                                />

                                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <div className="text-emerald-400 text-sm mb-2 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity delay-100 duration-300 flex items-center gap-2">
                                        <Star size={14} fill="currentColor" /> Featured
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-serif mb-1">{property.title}</h3>
                                    <p className="text-neutral-300 text-sm mb-4">{property.location}</p>
                                    <div className="flex justify-between items-center border-t border-white/20 pt-4">
                                        <span className="font-semibold text-lg">{property.price}</span>
                                        <div className="bg-white/20 p-2 rounded-full hover:bg-white hover:text-black transition-colors duration-300">
                                            <ArrowRight size={18} />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 3: CATEGORIES (Bento Grid) */}
            <section className="min-h-screen md:h-screen snap-start w-full relative flex items-center bg-[#0a0f1c] py-20 md:py-0">
                <div className="max-w-7xl mx-auto w-full px-4 md:px-8 flex flex-col justify-center h-full">
                    <div className="mb-4 md:mb-6 text-center flex-shrink-0">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-3xl md:text-4xl font-serif mb-2 md:mb-4"
                        >
                            Explore High-End Living
                        </motion.h2>
                        <p className="text-neutral-400 max-w-xl mx-auto text-xs md:text-sm">Discover properties tailored to your lifestyle, from urban penthouses to secluded island getaways.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[55vh] w-full">
                        {/* Box 1: Large Span */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="col-span-1 md:col-span-2 row-span-1 md:row-span-2 h-[300px] md:h-full relative rounded-3xl overflow-hidden group cursor-pointer"
                        >
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500 z-10" />
                            <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1600&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Villas" />
                            <div className="absolute bottom-6 left-6 z-20">
                                <span className="bg-emerald-600/90 text-white px-3 py-1 rounded-full text-xs uppercase tracking-wider mb-2 inline-block backdrop-blur-sm">Most Popular</span>
                                <h3 className="text-2xl md:text-3xl font-serif">Luxury Villas</h3>
                                <p className="text-neutral-300 text-sm mt-1">124 Properties</p>
                            </div>
                        </motion.div>

                        {/* Box 2 */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="col-span-1 row-span-1 h-[250px] md:h-full relative rounded-3xl overflow-hidden group cursor-pointer"
                        >
                            <div className="absolute inset-0 bg-black/40 z-10" />
                            <img src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Penthouses" />
                            <div className="absolute bottom-4 left-4 z-20">
                                <Building2 size={24} className="mb-2 text-emerald-400" />
                                <h3 className="text-lg md:text-xl font-serif">Penthouses</h3>
                            </div>
                        </motion.div>

                        {/* Box 3 */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="col-span-1 row-span-1 h-[250px] md:h-full relative rounded-3xl overflow-hidden group cursor-pointer bg-neutral-800 flex items-center justify-center p-6 border border-white/5 hover:border-emerald-500/50 transition-colors"
                        >
                            <div className="text-center">
                                <div className="bg-emerald-500/20 p-4 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-emerald-400">
                                    <ArrowRight size={24} className="-rotate-45" />
                                </div>
                                <h3 className="text-lg md:text-xl font-medium">View All</h3>
                                <p className="text-neutral-500 text-xs mt-2">More Categories</p>
                            </div>
                        </motion.div>

                        {/* Box 4 */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="col-span-1 md:col-span-2 row-span-1 h-[250px] md:h-full relative rounded-3xl overflow-hidden group cursor-pointer"
                        >
                            <div className="absolute inset-0 bg-black/40 z-10" />
                            <img src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1600&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Modern" />
                            <div className="absolute inset-0 z-20 flex items-center justify-center">
                                <div className="bg-white/10 backdrop-blur-md px-8 py-4 rounded-2xl border border-white/20 hover:bg-white/20 transition-all">
                                    <h3 className="text-xl md:text-2xl font-serif">Modern Waterfront</h3>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: TRUST & FOOTER */}
            <section className="min-h-screen md:h-screen snap-start w-full relative flex flex-col justify-between pt-24 md:pt-24 pb-8 bg-black">
                <div className="max-w-7xl mx-auto w-full px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center flex-grow">
                    <div className="mb-8 md:mb-0">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">Trusted by the <br /> <span className="text-emerald-500">World's Elite</span></h2>
                            <div className="grid grid-cols-2 gap-8 mb-12">
                                <div>
                                    <h4 className="text-4xl font-bold text-white mb-2 counter">7,500+</h4>
                                    <p className="text-neutral-400">Happy Clients</p>
                                </div>
                                <div>
                                    <h4 className="text-4xl font-bold text-white mb-2">$4.2B</h4>
                                    <p className="text-neutral-400">Total Volume</p>
                                </div>
                                <div>
                                    <h4 className="text-4xl font-bold text-white mb-2">25+</h4>
                                    <p className="text-neutral-400">Cities Covered</p>
                                </div>
                                <div>
                                    <h4 className="text-4xl font-bold text-white mb-2">Top 1%</h4>
                                    <p className="text-neutral-400">Global Agency</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-neutral-900/50 p-8 md:p-12 rounded-[32px] md:rounded-[40px] border border-white/10"
                    >
                        <h3 className="text-3xl font-serif mb-2">Join the Inner Circle</h3>
                        <p className="text-neutral-400 mb-8">Get exclusive access to off-market listings before they go public.</p>

                        <form className="flex flex-col gap-4">
                            <input type="text" placeholder="Full Name" className="bg-neutral-800 border-none rounded-xl p-4 text-white placeholder-neutral-500 focus:ring-2 focus:ring-emerald-500 outline-none transition-all" />
                            <input type="email" placeholder="Email Address" className="bg-neutral-800 border-none rounded-xl p-4 text-white placeholder-neutral-500 focus:ring-2 focus:ring-emerald-500 outline-none transition-all" />
                            <button className="bg-white text-black font-bold p-4 rounded-xl hover:bg-emerald-400 transition-colors duration-300 mt-2">
                                Subscribe
                            </button>
                        </form>
                    </motion.div>
                </div>

                <footer className="border-t border-white/10 pt-8 px-8">
                    <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center text-sm text-neutral-500 text-center md:text-left">
                        <div>© 2026 LUXE. Real Estate. All rights reserved.</div>
                        <div className="flex gap-6">
                            <a href="#" className="hover:text-white transition-colors">Privacy</a>
                            <a href="#" className="hover:text-white transition-colors">Terms</a>
                            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
                        </div>
                    </div>
                </footer>
            </section>
        </div>
    );
};

export default Luxury;
