import React from 'react';
import { Link } from 'react-router-dom';
import {
    Facebook,
    Linkedin,
    Youtube,
    Instagram,
    ArrowRight,
    ArrowUp
} from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-slate-50 dark:bg-slate-900 pt-20 pb-10 border-t border-slate-100 dark:border-slate-800 relative">

            {/* Top Banner */}
            <div className="max-w-5xl mx-auto px-4 relative -mt-32 mb-16 z-20">
                <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-slate-100 dark:border-slate-700 relative overflow-hidden">

                    {/* Decorative Circle */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-50 dark:bg-blue-900/20 rounded-full blur-3xl -z-10"></div>

                    <div className="flex-1 text-center md:text-left z-10">
                        <img src="/logo.png" alt="Bloopi" className="h-8 mx-auto md:mx-0 mb-4" />
                        <p className="text-slate-500 dark:text-slate-400 mb-6">Acompanhe nossas redes:</p>
                        <div className="flex justify-center md:justify-start gap-4">
                            <a href="#" className="p-3 rounded-full bg-slate-50 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-primary hover:text-white transition-all">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="p-3 rounded-full bg-slate-50 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-primary hover:text-white transition-all">
                                <Linkedin size={20} />
                            </a>
                            <a href="#" className="p-3 rounded-full bg-slate-50 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-primary hover:text-white transition-all">
                                <Youtube size={20} />
                            </a>
                            <a href="#" className="p-3 rounded-full bg-slate-50 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-primary hover:text-white transition-all">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Center Image */}
                    <div className="relative z-10 -my-20">
                        <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-primary/10 flex items-end justify-center overflow-hidden border-4 border-white dark:border-slate-800 shadow-lg">
                            <img
                                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                                alt="Support"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="flex-1 text-center md:text-right z-10">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Fez uma compra? Veja o seu Pedido!</h3>
                        <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">Acompanhe o seu pedido em tempo real.</p>
                        <Link to="/help" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
                            Consultar Pedido <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                    {/* Column 1 */}
                    <div>
                        <h4 className="font-bold text-slate-900 dark:text-white mb-6">Home</h4>
                        <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400">
                            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
                            <li><Link to="/taxas" className="hover:text-primary transition-colors">Taxas</Link></li>
                            <li><Link to="/about" className="hover:text-primary transition-colors">Somos Bloopi</Link></li>
                            <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
                            <li><Link to="/privacy" className="hover:text-primary transition-colors">Política de Privacidade e Termos de Uso</Link></li>
                        </ul>
                    </div>

                    {/* Column 2 */}
                    <div>
                        <h4 className="font-bold text-slate-900 dark:text-white mb-6">Recursos</h4>
                        <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400">
                            <li><Link to="/resources" className="hover:text-primary transition-colors">Bloopi Pay</Link></li>
                            <li><Link to="/resources" className="hover:text-primary transition-colors">Funcionalidades</Link></li>
                            <li><Link to="/resources" className="hover:text-primary transition-colors">Integrações</Link></li>
                            <li><Link to="/resources" className="hover:text-primary transition-colors">Checkout 3.1</Link></li>
                            <li><Link to="/developers" className="hover:text-primary transition-colors">Documentação - API</Link></li>
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div>
                        <h4 className="font-bold text-slate-900 dark:text-white mb-6">Ajuda</h4>
                        <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400">
                            <li><Link to="/help" className="hover:text-primary transition-colors">Central de ajuda</Link></li>
                            <li><Link to="/testimonials" className="hover:text-primary transition-colors">Depoimentos</Link></li>
                            <li><Link to="/contact" className="hover:text-primary transition-colors">Atendimento</Link></li>
                            <li><Link to="/about" className="hover:text-primary transition-colors">Institucional</Link></li>
                        </ul>
                    </div>

                    {/* Column 4 */}
                    <div>
                        <h4 className="font-bold text-slate-900 dark:text-white mb-6">Contato</h4>
                        <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400">
                            <li>
                                <span className="block font-bold text-slate-900 dark:text-white">Proposta e Atendimento</span>
                                <a href="mailto:comercial@bloopi.com.br" className="hover:text-primary transition-colors">comercial@bloopi.com.br</a>
                            </li>
                            <li>
                                <span className="block font-bold text-slate-900 dark:text-white">Ajuda e Soluções</span>
                                <a href="mailto:suporte@bloopi.com.br" className="hover:text-primary transition-colors">suporte@bloopi.com.br</a>
                            </li>
                            <li>
                                <span className="block font-bold text-slate-900 dark:text-white">Formulário de contato</span>
                                <Link to="/contact" className="text-primary hover:underline">Entrar em contato</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-200 dark:border-slate-700 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-slate-400">
                        Bloopi © 2025 | Todos os Direitos Reservados | Bloopi Tecnologia - CNPJ: 00.000.000/0001-00
                    </p>
                    <button
                        onClick={scrollToTop}
                        className="p-3 rounded-lg bg-slate-900 text-white hover:bg-primary transition-colors"
                    >
                        <ArrowUp size={20} />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
