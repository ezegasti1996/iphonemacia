
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { Phone, MapPin, ChevronRight, ArrowRight, Star, Truck, RefreshCw, Zap } from 'lucide-react';

// Reusable Components
const Section = ({ children, className = "" }) => (
    <section className={`relative w-full min-h-screen px-6 py-24 flex flex-col justify-center items-center overflow-hidden ${className}`}>
        {children}
    </section>
);

const GlassCard = ({ children, className = "" }) => (
    <motion.div
        whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.4)" }}
        className={`glass-card p-8 rounded-3xl transition-all duration-300 ${className}`}
    >
        {children}
    </motion.div>
);

const FadeIn = ({ children, delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay, ease: "easeOut" }}
    >
        {children}
    </motion.div>
);

// Main Landing Component
export default function TecnophonesLanding({ onOpenModal }) {
    const [scrolled, setScrolled] = useState(false);
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
    const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="bg-black text-white selection:bg-brand-purple selection:text-white font-sans overflow-x-hidden">

            {/* Navbar */}
            <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-4' : 'bg-transparent py-8'}`}>
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-2"
                    >
                        {/* Logo Concept */}
                        <div className="w-8 h-8 bg-gradient-to-br from-brand-accent to-brand-purple rounded-lg flex items-center justify-center">
                            <span className="font-serif font-bold text-lg">T</span>
                        </div>
                        <span className="font-serif text-2xl font-bold tracking-tight">
                            Tecnophones<span className="text-brand-purple">Maciá</span>
                        </span>
                    </motion.div>

                    <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
                        {['Inicio', 'Productos', 'Canje', 'Contacto'].map((item) => (
                            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors">
                                {item}
                            </a>
                        ))}
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={onOpenModal}
                        className="bg-white text-black px-5 py-2 rounded-full font-semibold text-sm hover:bg-gray-200 transition-colors"
                    >
                        Comprar Ahora
                    </motion.button>
                </div>
            </nav>

            {/* Hero Section */}
            <div ref={targetRef} className="relative h-screen flex flex-col items-center justify-center text-center px-4 pt-20">
                {/* Background Effects */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-accent/20 rounded-full blur-[128px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-purple/20 rounded-full blur-[128px] animate-pulse delay-1000" />

                <motion.div style={{ opacity, scale, y }} className="relative z-10 max-w-5xl mx-auto space-y-8">
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight font-serif"
                    >
                        Tecnología que <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-purple">
                            Inspira.
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto"
                    >
                        Descubre el ecosistema Apple en su máxima expresión. Calidad, garantía y la elegancia que mereces.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex gap-4 justify-center"
                    >
                        <button onClick={onOpenModal} className="px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-gray-100 transition-all flex items-center gap-2 group">
                            Ver Catálogo
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button onClick={onOpenModal} className="px-8 py-4 glass text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all">
                            Cotizar Usado
                        </button>
                    </motion.div>
                </motion.div>

                {/* Hero Image Parallax */}
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 1.2 }}
                    style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
                    className="absolute bottom-[-10%] md:bottom-[-20%] z-0 w-full max-w-4xl opacity-80 pointer-events-none"
                >
                    <img src="/assets/hero_iphone.png" alt="iPhone 15 Pro" className="w-full h-auto object-contain drop-shadow-2xl" />
                </motion.div>
            </div>

            {/* Features Grid */}
            <section className="py-32 px-6 bg-brand-gray/30 relative">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { icon: Star, title: "Calidad Premium", desc: "Solo productos seleccionados y certificados." },
                        { icon: Truck, title: "Envíos a todo el país", desc: "Llevamos tu nuevo iPhone a donde estés, seguro y rápido." },
                        { icon: Zap, title: "Garantía Oficial", desc: "Respaldo total en cada compra que realices." }
                    ].map((feature, i) => (
                        <FadeIn key={i} delay={i * 0.2}>
                            <GlassCard className="h-full group hover:bg-white/5">
                                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-gray-800 to-black flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <feature.icon className="w-6 h-6 text-brand-purple" />
                                </div>
                                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
                            </GlassCard>
                        </FadeIn>
                    ))}
                </div>
            </section>

            {/* Trade In Section */}
            <Section className="bg-black">
                <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="order-2 md:order-1 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-brand-accent to-brand-purple blur-[80px] opacity-30" />
                            <img src="/assets/trade_in.png" alt="Trade In" className="relative z-10 w-full rounded-3xl border border-white/10 shadow-2xl" />

                            {/* Floating Badge */}
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-10 -right-10 glass p-6 rounded-full w-40 h-40 flex flex-col items-center justify-center text-center z-20 border border-brand-purple/30 backdrop-blur-xl"
                            >
                                <RefreshCw className="w-8 h-8 text-brand-purple mb-2" />
                                <span className="text-sm font-bold leading-tight">Actualizate<br />Facil</span>
                            </motion.div>
                        </motion.div>
                    </div>

                    <div className="order-1 md:order-2 space-y-8">
                        <FadeIn>
                            <h2 className="text-5xl md:text-7xl font-bold font-serif leading-tight">
                                Recibimos <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-brand-accent">
                                    tu usado.
                                </span>
                            </h2>
                        </FadeIn>
                        <FadeIn delay={0.2}>
                            <p className="text-xl text-gray-400 border-l-4 border-brand-accent pl-6 py-2">
                                No lo guardes en un cajón. Úsalo como parte de pago y llévate el modelo que siempre quisiste. Cotización inmediata y transparente.
                            </p>
                        </FadeIn>
                        <FadeIn delay={0.4}>
                            <button className="flex items-center gap-3 text-brand-accent font-bold hover:gap-5 transition-all group text-lg">
                                Cotizar mi equipo <ChevronRight className="w-5 h-5 group-hover:text-white" />
                            </button>
                        </FadeIn>
                    </div>
                </div>
            </Section>

            {/* Location Section */}
            <section className="py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1496449903678-68ddcb1d99b4?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20" />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />

                <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
                    <FadeIn>
                        <h2 className="text-4xl md:text-5xl font-bold mb-12 font-serif">Visítanos en Maciá</h2>
                    </FadeIn>

                    <GlassCard className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-8 text-left bg-black/40">
                        <div className="p-4 bg-white/10 rounded-full">
                            <MapPin className="w-8 h-8 text-brand-purple" />
                        </div>
                        <div className="flex-1 space-y-2">
                            <h3 className="text-2xl font-bold">Oficina Comercial</h3>
                            <p className="text-gray-300 text-lg">Magnasco 105 | MACIA - VILLAGUAY / E. RÍOS</p>
                            <p className="text-brand-accent text-sm font-medium">Lunes a Sábado: 9:00 - 13:00 / 17:00 - 21:00</p>
                        </div>
                        <button className="px-6 py-3 bg-white text-black rounded-xl font-bold hover:bg-gray-200 transition-colors">
                            Ver Mapa
                        </button>
                    </GlassCard>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 border-t border-white/10 bg-black text-center text-gray-500 text-sm">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2">
                        <span className="font-serif font-bold text-white text-lg">Tecnophones<span className="text-brand-purple">Maciá</span></span>
                    </div>
                    <div>
                        © {new Date().getFullYear()} Todos los derechos reservados.
                    </div>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Instagram</a>
                        <a href="#" className="hover:text-white transition-colors">Facebook</a>
                        <a href="#" className="hover:text-white transition-colors">WhatsApp</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
