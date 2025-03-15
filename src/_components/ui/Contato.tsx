"use client"

import { ArrowRight } from 'lucide-react'
import { CardContact } from './CardContact'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export const Contato = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    })

    return (
        <section className="lg:mt-32 mt-[80px] w-full bg-[#101010] text-[#FAFAFA]" id="contato">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto">
                    <div className="space-y-2">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            className="flex items-center justify-center gap-2 text-blue-500">
                            <ArrowRight className="h-4 w-4" />
                            <h2>
                                Vamos Conversar
                            </h2>
                        </motion.div>
                        <motion.h3
                            ref={ref}
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, ease: 'easeOut' }}
                            className="text-3xl md:text-4xl font-bold tracking-tighter"
                        >
                            Faça contato comigo
                        </motion.h3>
                    </div>
                </div>
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
                    className="mt-12"
                >
                    <CardContact />
                </motion.div>
            </div>
        </section>
    )
}
