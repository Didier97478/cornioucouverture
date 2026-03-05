import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import roof1 from '../assets/roof-1.png'
import roof2 from '../assets/roof-2.png'
import roof3 from '../assets/roof-3.png'

const Gallery = () => {
    const projects = [
        {
            title: "Rénovation Ardoise",
            location: "Morlaix",
            image: roof1,
            size: "md:col-span-2"
        },
        {
            title: "Pose de Velux",
            location: "Treillières",
            image: roof3,
            size: "md:col-span-1"
        },
        {
            title: "Extension Contemporaine",
            location: "Nantes Area",
            image: roof2,
            size: "md:col-span-3"
        }
    ]

    return (
        <section id="galerie" className="py-32 px-6 bg-premium-slate/20">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
                        Nos <span className="premium-gradient-text">Réalisations</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-lg md:text-xl opacity-50 font-medium">
                        Découvrez nos derniers projets de toiture et zinguerie, où chaque détail compte pour la durabilité de votre habitat.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: idx * 0.1 }}
                            className={`relative group overflow-hidden rounded-[2rem] aspect-[16/10] md:aspect-auto ${project.size} h-[400px]`}
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-premium-dark via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                                <p className="text-premium-copper text-xs font-bold uppercase tracking-widest mb-2">{project.location}</p>
                                <h3 className="text-2xl font-bold tracking-tight mb-4">{project.title}</h3>
                                <div className="w-10 h-10 rounded-full glass flex items-center justify-center">
                                    <ExternalLink size={16} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Gallery
