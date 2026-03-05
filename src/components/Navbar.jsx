import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? 'glass h-16 sm:h-20' : 'bg-transparent h-20 sm:h-24'}`}>
            <nav className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
                <div className="flex items-center gap-2 group cursor-pointer">
                    <div className="w-10 h-10 bg-gradient-to-br from-premium-copper to-premium-accent rounded-lg flex items-center justify-center font-bold text-xl transition-transform group-hover:scale-110">
                        C
                    </div>
                    <span className="text-xl font-extrabold tracking-tighter uppercase whitespace-nowrap">
                        Corniou <span className="text-premium-copper hidden sm:inline">Couverture</span><span className="text-premium-copper inline sm:hidden">C.</span>
                    </span>
                </div>

                {/* Desktop Links */}
                <div className="hidden lg:flex items-center gap-8 font-medium text-[10px] uppercase tracking-[0.2em] opacity-70">
                    <a href="#services" className="hover:text-premium-copper transition-colors">Services</a>
                    <a href="#propos" className="hover:text-premium-copper transition-colors">À Propos</a>
                    <a href="#galerie" className="hover:text-premium-copper transition-colors">Portfolio</a>
                    <a href="#contact" className="hover:text-premium-copper transition-colors">Contact</a>
                </div>

                <div className="flex items-center gap-4">
                    <button className="btn-premium py-2 px-6 text-[10px] uppercase tracking-widest hidden sm:block">
                        Devis Gratuit
                    </button>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="lg:hidden w-10 h-10 flex items-center justify-center glass rounded-lg"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="lg:hidden absolute top-full left-0 w-full glass border-t border-white/5 py-8 px-6 flex flex-col gap-6 font-bold uppercase tracking-widest text-sm"
                >
                    <a href="#services" onClick={() => setIsMenuOpen(false)} className="hover:text-premium-copper">Services</a>
                    <a href="#propos" onClick={() => setIsMenuOpen(false)} className="hover:text-premium-copper">À Propos</a>
                    <a href="#galerie" onClick={() => setIsMenuOpen(false)} className="hover:text-premium-copper">Portfolio</a>
                    <a href="#contact" onClick={() => setIsMenuOpen(false)} className="hover:text-premium-copper">Contact</a>
                    <button className="btn-premium w-full py-4 text-xs">Obtenir un devis</button>
                </motion.div>
            )}
        </header>
    )
}

export default Navbar
