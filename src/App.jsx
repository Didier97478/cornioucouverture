import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustSection from './components/TrustSection'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Contact from './components/Contact'

function App() {
    return (
        <div className="min-h-screen relative bg-premium-dark selection:bg-premium-copper/30">
            {/* Dynamic Background Effects */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-premium-copper/10 blur-[150px] rounded-full animate-pulse" />
                <div className="absolute bottom-0 right-[-10%] w-[50%] h-[50%] bg-premium-accent/5 blur-[120px] rounded-full" />
            </div>

            <Navbar />

            <main className="relative z-10">
                <Hero />
                <TrustSection />
                <Services />
                <Gallery />
                <Contact />
            </main>

            <footer className="py-20 border-t border-white/5 relative z-10">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-xl font-bold uppercase tracking-tighter">
                        Corniou <span className="text-premium-copper">Couverture</span>
                    </div>
                    <div className="flex gap-8 text-xs font-semibold uppercase tracking-widest opacity-40">
                        <a href="#" className="hover:text-premium-copper transition-colors">Mentions Légales</a>
                        <a href="#" className="hover:text-premium-copper transition-colors">Confidentialité</a>
                    </div>
                    <p className="text-[10px] uppercase tracking-[0.3em] opacity-30">© 2024 Design by Antigravity</p>
                </div>
            </footer>
        </div>
    )
}

export default App
