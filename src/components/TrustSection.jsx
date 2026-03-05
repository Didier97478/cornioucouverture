import React from 'react'
import { motion } from 'framer-motion'
import { Hammer, ShieldCheck, Mail } from 'lucide-react'

const TrustSection = () => {
    const items = [
        {
            icon: Hammer,
            title: "Garantie Décennale",
            desc: "Protections complètes sur l'assurance de vos travaux."
        },
        {
            icon: ShieldCheck,
            title: "Qualification RGE",
            desc: "Engagement pour la performance énergétique locale."
        },
        {
            icon: Mail,
            title: "Devis sous 48h",
            desc: "Une réactivité maximale pour tous vos projets."
        }
    ]

    return (
        <div className="max-w-7xl mx-auto px-6 mb-32 -mt-10 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {items.map((item, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="glass-card group"
                    >
                        <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 transition-colors group-hover:bg-premium-copper/20">
                            <item.icon className="text-premium-copper" size={28} />
                        </div>
                        <h3 className="text-xl font-extrabold mb-3 tracking-tight">{item.title}</h3>
                        <p className="text-sm opacity-50 leading-relaxed font-medium">
                            {item.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default TrustSection
