import React from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck } from 'lucide-react'

const Hero = () => {
    return (
        <section className="relative pt-40 pb-20 px-6 min-h-[90vh] flex items-center justify-center">
            <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-10 text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] border-premium-copper/20"
                >
                    <ShieldCheck size={14} className="text-premium-copper" />
                    <span>Excellence & Tradition Locale</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-5xl md:text-8xl font-black tracking-tight mb-8 leading-[0.9]"
                >
                    Expertise en <br />
                    <span className="premium-gradient-text">Toiture</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="max-w-2xl text-lg md:text-2xl font-medium opacity-60 mb-12 leading-relaxed"
                >
                    Couvreur à <span className="text-white">Treillières</span> & <span className="text-white">Morlaix</span>.
                    Rénovation, zinguerie et isolation pour une protection durable de votre patrimoine.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-6"
                >
                    <button className="btn-premium text-sm py-4 px-10">
                        Demander un devis
                    </button>
                    <button className="btn-glass text-sm py-4 px-10">
                        Explorer nos réalisations
                    </button>
                </motion.div>
            </div>

            {/* Decorative architectural grid element */}
            <div className="absolute left-0 bottom-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="absolute right-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
        </section>
    )
}

export default Hero
