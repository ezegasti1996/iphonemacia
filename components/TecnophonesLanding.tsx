
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { Phone, MapPin, ChevronRight, ArrowRight, Star, Truck, RefreshCw, Zap, Instagram, Facebook, ShieldCheck, Smartphone, Gamepad2, Play } from 'lucide-react';

/* 
  Reusable Animated Components
  ----------------------------
*/
const FadeIn = ({ children, delay = 0, yOffset = 30, className = "" }) => (
    <motion.div
        initial={{ opacity: 0, y: yOffset }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay, ease: "easeOut" }}
        className={className}
    >
        {children}
    </motion.div>
);

const GlassCard = ({ children, className = "" }) => (
    <motion.div
        whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(255, 255, 255, 0.05)" }}
        className={`glass-card p-8 rounded-3xl transition-all duration-500 border border-white/5 bg-zinc-900/40 backdrop-blur-md overflow-hidden relative group ${className}`}
    >
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        {children}
    </motion.div>
);

const InfiniteMarquee = ({ text }) => (
    <div className="overflow-hidden whitespace-nowrap py-4 border-y border-white/5 bg-black/50 backdrop-blur-sm">
        <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="flex gap-8"
        >
            {[...Array(6)].map((_, i) => (
                <span key={i} className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-900 uppercase tracking-tighter select-none">
                    {text}
                </span>
            ))}
        </motion.div>
    </div>
);

/*
  Main Component
  --------------
*/
export default function TecnophonesLanding({ onOpenModal }) {
    const [scrolled, setScrolled] = useState(false);
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: targetRef });

    const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="bg-black text-white selection:bg-brand-accent selection:text-white font-sans overflow-x-hidden">

            {/* Navbar - Apple Style */}
            <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-3">
                        <img src="/assets/logo_gold.png" alt="Logo" className="w-10 h-10 object-contain hover:rotate-12 transition-transform duration-500" />
                        <span className="font-medium text-lg tracking-tight">Tecnophones</span>
                    </motion.div>

                    <div className="hidden md:flex gap-8 text-xs font-medium text-gray-400 tracking-wide uppercase">
                        {['Home', 'iPhones', 'PlayStation', 'Diego Ramos', 'Contacto'].map(item => (
                            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="hover:text-white transition-colors duration-300">
                                {item}
                            </a>
                        ))}
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={onOpenModal}
                        className="bg-white text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors"
                    >
                        Comprar
                    </motion.button>
                </div>
            </nav>

            {/* Hero Section - Super Innovation */}
            <div ref={targetRef} className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
                <motion.div style={{ scale: heroScale, opacity: heroOpacity }} className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black z-10" />
                    <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-60">
                        {/* Placeholder for a high-end tech video background if user had one, referencing static image for now */}
                    </video>
                    <img src="/assets/shop_interior.png" className="w-full h-full object-cover opacity-50" alt="Hero Background" />
                </motion.div>

                <div className="relative z-10 text-center max-w-5xl px-6 space-y-8">
                    <FadeIn>
                        <span className="px-4 py-1.5 rounded-full border border-brand-accent/30 bg-brand-accent/10 text-brand-accent text-xs font-bold tracking-widest uppercase mb-6 inline-block">
                            Authorized Reseller Experience
                        </span>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none bg-clip-text text-transparent bg-gradient-to-br from-white via-gray-200 to-gray-500">
                            THE NEW<br />STANDARD.
                        </h1>
                    </FadeIn>

                    <FadeIn delay={0.4}>
                        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
                            La tecnología más avanzada del mundo, en tus manos.
                            <span className="text-white font-medium"> 1500+ iPhones vendidos.</span> Exclusividad garantizada por Diego Ramos.
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.6}>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                            <button onClick={onOpenModal} className="px-8 py-4 bg-brand-accent text-white rounded-full font-bold text-lg hover:bg-brand-accent/90 transition-all shadow-[0_0_40px_rgba(41,151,255,0.3)] hover:shadow-[0_0_60px_rgba(41,151,255,0.5)] flex items-center justify-center gap-2">
                                Ver Catálogo <ArrowRight className="w-5 h-5" />
                            </button>
                            <button onClick={onOpenModal} className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/10 text-white rounded-full font-bold text-lg hover:bg-white/20 transition-all">
                                Conocer Más
                            </button>
                        </div>
                    </FadeIn>
                </div>
            </div>

            <InfiniteMarquee text="IPHONE • PLAYSTATION • MACBOOK • AIRPODS • " />

            {/* Featured Products - Grid & Parallax */}
            <section id="iphones" className="py-32 bg-black relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex justify-between items-end mb-16">
                        <FadeIn>
                            <h2 className="text-5xl md:text-7xl font-bold tracking-tight">Iconic.<br /><span className="text-gray-600">Design.</span></h2>
                        </FadeIn>
                        <FadeIn delay={0.2}>
                            <p className="text-right text-gray-400 max-w-xs">Colección curada de los dispositivos más deseados del planeta.</p>
                        </FadeIn>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-auto">
                        <GlassCard className="lg:col-span-2 min-h-[500px] flex items-end p-0 overflow-hidden relative group">
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
                            <img src="https://images.unsplash.com/photo-1696446701796-da61225697cc?q=80&w=2070&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="iPhone 15 Pro" />
                            <div className="relative z-20 p-10 w-full">
                                <div className="flex justify-between items-end">
                                    <div>
                                        <h3 className="text-4xl font-bold mb-2">iPhone 15 Pro</h3>
                                        <p className="text-gray-300">Titanium. So strong. So light. So Pro.</p>
                                    </div>
                                    <button onClick={onOpenModal} className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform">
                                        <ArrowRight className="w-6 h-6" />
                                    </button>
                                </div>
                            </div>
                        </GlassCard>

                        <GlassCard className="min-h-[500px] flex flex-col justify-between relative group overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-purple/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-purple/40 transition-colors duration-500" />
                            <div>
                                <span className="text-brand-purple font-bold tracking-widest text-xs uppercase">Gaming</span>
                                <h3 className="text-3xl font-bold mt-2">PS5 Slim</h3>
                            </div>
                            <img src="https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=2070&auto=format&fit=crop" className="absolute bottom-0 right-0 w-3/4 object-contain translate-y-10 group-hover:translate-y-0 transition-transform duration-500" alt="PS5" />
                            <button onClick={onOpenModal} className="mt-auto text-sm font-bold border-b border-white/20 pb-1 w-max hover:border-white transition-colors z-10">Ver Precios</button>
                        </GlassCard>
                    </div>
                </div>
            </section>

            {/* Founder Section - The "Diego Ramos" Brand */}
            <section id="diego-ramos" className="py-32 bg-zinc-950 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <FadeIn>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-brand-accent to-brand-purple rounded-[2rem] opacity-30 blur-2xl rotate-3" />
                            <img src="/assets/owner_diego.png" alt="Diego Ramos" className="relative rounded-[2rem] shadow-2xl w-full grayscale hover:grayscale-0 transition-all duration-700" />

                            <div className="absolute bottom-8 left-8 bg-black/80 backdrop-blur-xl p-6 rounded-2xl border border-white/10">
                                <img src="/assets/logo_gold.png" className="w-12 h-12 mb-4 opacity-80" alt="Seal" />
                                <p className="font-serif italic text-2xl text-white">"La confianza no se compra,<br />se construye con cada entrega."</p>
                            </div>
                        </div>
                    </FadeIn>

                    <div className="space-y-8">
                        <FadeIn delay={0.2}>
                            <h2 className="text-6xl font-bold tracking-tighter">DIEGO RAMOS.</h2>
                            <p className="text-xl text-gray-400 font-light mt-6 leading-relaxed">
                                El nombre detrás de la marca líder en tecnología de Entre Ríos.
                                No es solo una tienda, es una garantía personal de calidad.
                            </p>
                        </FadeIn>

                        <div className="grid grid-cols-2 gap-8 py-8 border-y border-white/5">
                            <div className="space-y-2">
                                <span className="text-4xl font-bold text-white block">1.5K+</span>
                                <span className="text-sm text-gray-500 uppercase tracking-widest">iPhones Vendidos</span>
                            </div>
                            <div className="space-y-2">
                                <span className="text-4xl font-bold text-white block">300+</span>
                                <span className="text-sm text-gray-500 uppercase tracking-widest">PS5 Entregadas</span>
                            </div>
                        </div>

                        <FadeIn delay={0.4}>
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center">
                                    <Play className="w-5 h-5 text-black fill-current ml-1" />
                                </div>
                                <div>
                                    <p className="font-bold text-white">Ver Historia</p>
                                    <p className="text-xs text-gray-500">Conoce el detrás de escena.</p>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Trade In - Dark Glass Aesthetic */}
            <section className="py-24 px-6 relative">
                <div className="max-w-5xl mx-auto bg-gradient-to-br from-zinc-900 to-black rounded-[3rem] border border-white/10 overflow-hidden relative">
                    <div className="absolute inset-0 bg-[url('/assets/shop_interior.png')] bg-cover opacity-20 mix-blend-overlay" />
                    <div className="relative z-10 p-12 md:p-24 text-center space-y-8">
                        <FadeIn>
                            <RefreshCw className="w-16 h-16 text-brand-accent mx-auto mb-6" />
                            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">Upgrade Program.</h2>
                        </FadeIn>
                        <FadeIn delay={0.2}>
                            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                                Trae tu dispositivo actual y úsalo como parte de pago.
                                Cotización inmediata, justa y transparente.
                            </p>
                        </FadeIn>
                        <FadeIn delay={0.4}>
                            <button onClick={onOpenModal} className="px-10 py-5 bg-white text-black rounded-full font-bold text-lg hover:scale-105 transition-transform">
                                Cotizar mi Equipo
                            </button>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Clients & Location Combined */}
            <section id="contacto" className="py-32 bg-black relative">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Social Proof Column */}
                    <div className="space-y-12">
                        <FadeIn>
                            <h3 className="text-4xl font-bold mb-8">What People Say.</h3>
                        </FadeIn>

                        <GlassCard className="relative">
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />)}
                            </div>
                            <p className="text-xl italic text-gray-300 mb-6">"Increíble la atención de Diego. Me asesoró en todo momento y el iPhone 15 Pro Max es una locura. Recomendadísimo."</p>
                            <div className="flex items-center gap-4">
                                <img src="/assets/happy_client.png" className="w-12 h-12 rounded-full object-cover border border-white/20" alt="Client" />
                                <div>
                                    <p className="font-bold text-white">Martín G.</p>
                                    <p className="text-xs text-brand-accent">Cliente Verificado</p>
                                </div>
                            </div>
                        </GlassCard>

                        {/* Map Card */}
                        <GlassCard className="p-0 overflow-hidden h-64 md:h-80 relative group cursor-pointer">
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10 pointer-events-none" />
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3377.130483450403!2d-59.400896259139174!3d-32.17375593338221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b169439ddc1151%3A0xc09f29e0ea491f28!2sMagnasco%20105%2C%20E3177%20Macia%2C%20Entre%20R%C3%ADos!5e0!3m2!1ses-419!2sar!4v1767812299375!5m2!1ses-419!2sar"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Tecnophones Maciá Location"
                                className="grayscale group-hover:grayscale-0 transition-all duration-700"
                            ></iframe>
                        </GlassCard>
                    </div>

                    {/* Visit Us Column */}
                    <div className="flex flex-col justify-center space-y-10">
                        <FadeIn delay={0.2}>
                            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-right">
                                VISIT<br />US.
                            </h2>
                        </FadeIn>
                        <GlassCard className="bg-zinc-900 border-none text-right">
                            <MapPin className="w-12 h-12 text-white mb-6 ml-auto" />
                            <h3 className="text-3xl font-bold mb-2">Maciá, Entre Ríos</h3>
                            <p className="text-xl text-gray-400 mb-8">Magnasco 105</p>

                            <div className="flex flex-col gap-4">
                                <p className="text-sm text-gray-500 uppercase tracking-widest">Opening Hours</p>
                                <p className="text-white">Lun - Sáb: 9:00 - 13:00 / 17:00 - 21:00</p>
                            </div>

                            <a
                                href="https://maps.app.goo.gl/U6q2NBsws4zL9Q7t7"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-10 inline-flex items-center gap-2 text-brand-accent font-bold hover:gap-4 transition-all"
                            >
                                Get Directions <ArrowRight className="w-5 h-5" />
                            </a>
                        </GlassCard>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 border-t border-white/5 bg-black text-center text-gray-600 text-sm">
                <div className="flex justify-center items-center gap-6 mb-8">
                    <Instagram className="w-6 h-6 hover:text-white transition-colors cursor-pointer" />
                    <Facebook className="w-6 h-6 hover:text-white transition-colors cursor-pointer" />
                    <Smartphone className="w-6 h-6 hover:text-white transition-colors cursor-pointer" />
                </div>
                <p>© {new Date().getFullYear()} Tecnophones Maciá. Powered by Diego Ramos.</p>
            </footer>
        </div>
    );
}
