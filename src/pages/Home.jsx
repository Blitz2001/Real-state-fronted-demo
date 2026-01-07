import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Layout, Zap, Leaf } from 'lucide-react';

const styles = [
    {
        id: 'luxury',
        name: 'Minimalist Luxury',
        description: 'Elegant, dark mode, glassmorphism, and premium aesthetics.',
        icon: Layout,
        color: 'bg-slate-900',
        hover: 'group-hover:text-emerald-400',
        link: '/luxury'
    },
    {
        id: 'neo',
        name: 'Neo-Brutalist',
        description: 'Bold, high-contrast, raw borders, and industrial vibes.',
        icon: Zap,
        color: 'bg-white border-4 border-black',
        textColor: 'text-black',
        hover: 'group-hover:text-orange-600',
        link: '/neo'
    },
    {
        id: 'organic',
        name: 'Organic Calm',
        description: 'Soft, pastel earth tones, rounded shapes, and nature-inspired.',
        icon: Leaf,
        color: 'bg-[#f3f1e7]',
        textColor: 'text-[#2c3e2e]',
        hover: 'group-hover:text-[#9caf88]',
        link: '/organic'
    }
];

const Home = () => {
    return (
        <div className="min-h-screen bg-neutral-100 flex flex-col items-center justify-center p-8 font-sans">
            <div className="max-w-5xl w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl font-bold tracking-tight text-neutral-900 mb-6 font-serif">
                        Design Style Showcase
                    </h1>
                    <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
                        Choose a visual direction to explore the high-fidelity prototypes.
                        Three distinct identities.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-20 md:pb-0">
                    {styles.map((style, index) => (
                        <Link key={style.id} to={style.link} className="group cursor-pointer">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                                className={`h-[300px] md:h-[400px] relative rounded-2xl p-6 md:p-8 flex flex-col justify-between overflow-hidden shadow-xl
                  ${style.id === 'neo' ? 'shadow-none hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-shadow' : 'hover:shadow-2xl'}
                  ${style.color} ${style.textColor || 'text-white'}
                `}
                            >
                                <div>
                                    <div className={`mb-4 md:mb-6 p-3 md:p-4 rounded-full w-fit ${style.id === 'neo' ? 'bg-black text-white' : 'bg-white/10 backdrop-blur-sm'}`}>
                                        <style.icon size={24} className="md:w-8 md:h-8" />
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4">{style.name}</h2>
                                    <p className={`text-base md:text-lg opacity-80 leading-relaxed font-light`}>
                                        {style.description}
                                    </p>
                                </div>

                                <div className="flex items-center gap-2 font-medium text-base md:text-lg mt-4 md:mt-8 group-hover:translate-x-2 transition-transform duration-300">
                                    <span>Explore Design</span>
                                    <ArrowRight size={18} className="md:w-5 md:h-5" />
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>

            <div className="fixed bottom-8 text-neutral-400 text-sm">
                Scroll Snap & Animations Enabled
            </div>
        </div>
    );
};

export default Home;
