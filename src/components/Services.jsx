import React from 'react'
import { motion } from 'framer-motion'
import { Home, Droplets, Wind, Zap } from 'lucide-react'

const Services = () => {
    const services = [
        {
            title: "Toiture & Rénovation",
            desc: "Pose de tuiles, ardoises et rénovation complète de votre toit pour une protection optimale.",
            icon: Home,
            size: "md:col-span-2 md:row-span-2",
            bg: "bg-premium-copper/10"
        },
        {
            title: "Zinguerie",
            desc: "Étanchéité parfaite et finitions esthétiques en zinc et cuivre.",
            icon: Droplets,
            size: "md:col-span-1 md:row-span-1",
            bg: "bg-white/5"
        },
        {
            title: "Pose de Velux",
            desc: "Apportez une lumière naturelle à vos combles avec nos installations expertes.",
            icon: Zap,
            size: "md:col-span-1 md:row-span-2",
            bg: "bg-premium-accent/10"
        },
        {
            title: "Isolation",
            desc: "Améliorez votre confort thermique et réduisez vos factures d'énergie.",
            icon: Wind,
            size: "md:col-span-1 md:row-span-1",
            bg: "bg-white/5"
        }
    ]

    return (
        <section id="services" className="py-32 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
                            Nos <span className="premium-gradient-text">Services</span>
                        </h2>
                        <p className="text-lg md:text-xl opacity-50 font-medium">
                            Une gamme complète de solutions pour votre toiture, alliant savoir-faire traditionnel et matériaux modernes.
                        </p>
                    </div>
                    <button className="btn-glass text-xs uppercase tracking-widest whitespace-nowrap">
                        Voir tous nos services
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className={`glass-card p-8 flex flex-col justify-between group ${service.size} ${service.bg}`}
                        >
                            <div>
                                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-8 transition-transform group-hover:scale-110">
                                    <service.icon className="text-premium-copper" size={24} />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 tracking-tight">{service.title}</h3>
                                <p className="text-sm opacity-50 leading-relaxed max-w-xs font-medium">
                                    {service.desc}
                                </p>
                            </div>
                            <div className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-premium-copper opacity-0 group-hover:opacity-100 transition-opacity">
                                En savoir plus <Zap size={12} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services
