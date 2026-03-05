import React from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react'

const Contact = () => {
    return (
        <section id="contact" className="py-32 px-6 relative">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

                    {/* Contact Info */}
                    <div>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-8">
                            Parlons de votre <span className="premium-gradient-text">Projet</span>
                        </h2>
                        <p className="text-lg md:text-xl opacity-60 mb-12 font-medium">
                            Besoin d'un devis ou d'un conseil expert ? Notre équipe est à votre écoute pour tous vos travaux de toiture à Treillières et Morlaix.
                        </p>

                        <div className="space-y-8">
                            <div className="flex gap-6 items-start">
                                <div className="w-12 h-12 glass rounded-xl flex items-center justify-center shrink-0">
                                    <Phone className="text-premium-copper" size={20} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-widest opacity-40 mb-1">Téléphone</p>
                                    <p className="text-xl font-bold">06 34 48 56 85</p>
                                    <p className="text-sm opacity-50">02 40 76 17 21</p>
                                </div>
                            </div>

                            <div className="flex gap-6 items-start">
                                <div className="w-12 h-12 glass rounded-xl flex items-center justify-center shrink-0">
                                    <Mail className="text-premium-copper" size={20} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-widest opacity-40 mb-1">Email</p>
                                    <p className="text-xl font-bold underline decoration-premium-copper/30">corniou.renov@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex gap-6 items-start">
                                <div className="w-12 h-12 glass rounded-xl flex items-center justify-center shrink-0">
                                    <MapPin className="text-premium-copper" size={20} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-widest opacity-40 mb-1">Nos Adresses</p>
                                    <p className="text-sm font-bold">43 rue de Suce, 44119 Treillières</p>
                                    <p className="text-sm font-bold">Rte du Parc Hamon, 29600 Morlaix</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 p-6 glass rounded-3xl border-premium-copper/10 inline-flex flex-col gap-4">
                            <p className="text-sm font-bold">Préferez-vous discuter sur WhatsApp ?</p>
                            <button className="flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-bold hover:scale-105 transition-transform">
                                <MessageCircle size={20} /> Discuter avec nous
                            </button>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="glass-card !p-10 border-premium-copper/10 bg-gradient-to-br from-white/5 to-transparent">
                        <h3 className="text-2xl font-bold mb-8 tracking-tight">Demande de Devis Gratuit</h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest opacity-40 ml-1">Nom Complet</label>
                                    <input type="text" className="w-full h-14 bg-white/5 border border-white/10 rounded-xl px-4 focus:border-premium-copper/50 outline-none transition-colors" placeholder="Jean Dupont" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest opacity-40 ml-1">Téléphone</label>
                                    <input type="tel" className="w-full h-14 bg-white/5 border border-white/10 rounded-xl px-4 focus:border-premium-copper/50 outline-none transition-colors" placeholder="06 .. .. .. .." />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold uppercase tracking-widest opacity-40 ml-1">Type de Projet</label>
                                <select className="w-full h-14 bg-white/5 border border-white/10 rounded-xl px-4 focus:border-premium-copper/50 outline-none transition-colors appearance-none">
                                    <option className="bg-premium-dark">Toiture Neuve / Rénovation</option>
                                    <option className="bg-premium-dark">Zinguerie & Étanchéité</option>
                                    <option className="bg-premium-dark">Pose de Velux</option>
                                    <option className="bg-premium-dark">Isolation Thermique</option>
                                    <option className="bg-premium-dark">Entretien / Nettoyage</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold uppercase tracking-widest opacity-40 ml-1">Votre Message</label>
                                <textarea className="w-full h-32 bg-white/5 border border-white/10 rounded-xl p-4 focus:border-premium-copper/50 outline-none transition-colors resize-none" placeholder="Détaillez votre besoin..."></textarea>
                            </div>
                            <button className="btn-premium w-full h-14 flex items-center justify-center gap-2">
                                Envoyer ma demande <Send size={18} />
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Contact
