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
                <div className="backdrop-blur-xl bg-white/80 dark:bg-slate-800/80 rounded-3xl shadow-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-white/20 dark:border-slate-700/50 relative overflow-hidden">

                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>

                    <div className="flex-1 text-center md:text-left z-10">
                        <img src="/logo_dark_new.png" alt="Bloopi" className="h-8 mx-auto md:mx-0 mb-6 block dark:hidden" />
                        <img src="/logo_white_new.png" alt="Bloopi" className="h-8 mx-auto md:mx-0 mb-6 hidden dark:block" />
                        <p className="text-slate-600 dark:text-slate-300 mb-6 font-medium">Acompanhe nossas redes:</p>
                        <div className="flex justify-center md:justify-start gap-4">
                            <a href="#" className="p-3 rounded-xl bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-primary hover:text-white shadow-sm hover:shadow-md transition-all">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="p-3 rounded-xl bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-primary hover:text-white shadow-sm hover:shadow-md transition-all">
                                <Linkedin size={20} />
                            </a>
                            <a href="#" className="p-3 rounded-xl bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-primary hover:text-white shadow-sm hover:shadow-md transition-all">
                                <Youtube size={20} />
                            </a>
                            <a href="#" className="p-3 rounded-xl bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-primary hover:text-white shadow-sm hover:shadow-md transition-all">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>

                    <div className="flex-1 text-center md:text-right z-10">
                        <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-3">
                            Pronto para escalar suas vendas?
                        </h3>
                        <p className="text-slate-600 dark:text-slate-300 text-base mb-6 max-w-md ml-auto">
                            Junte-se a milhares de empreendedores que já transformaram seus negócios com a Bloopi.
                        </p>
                        <a href="https://app.bloopicheckout.com.br/signup" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary-dark hover:shadow-lg hover:-translate-y-1 transition-all shadow-blue-500/20 shadow-lg">
                            Criar conta grátis <ArrowRight size={20} />
                        </a>
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
                            <li><Link to="/privacy" className="hover:text-primary transition-colors">Política de Privacidade</Link></li>
                            <li><Link to="/terms" className="hover:text-primary transition-colors">Termos de Uso</Link></li>
                        </ul>
                    </div>

                    {/* Column 2 */}
                    <div>
                        <h4 className="font-bold text-slate-900 dark:text-white mb-6">Recursos</h4>
                        <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400">
                            <li><Link to="/resources" className="hover:text-primary transition-colors">Bloopi Pay</Link></li>
                            <li><Link to="/features" className="hover:text-primary transition-colors">Funcionalidades</Link></li>
                            <li><Link to="/integrations" className="hover:text-primary transition-colors">Integrações</Link></li>
                            <li><Link to="/checkout-3-1" className="hover:text-primary transition-colors">Checkout 3.1</Link></li>
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
                                <span className="block font-bold text-slate-900 dark:text-white">WhatsApp</span>
                                <a href="https://wa.me/5531971905758" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">(31) 9 7190-5758</a>
                            </li>
                            <li>
                                <span className="block font-bold text-slate-900 dark:text-white">Email Geral</span>
                                <a href="mailto:contato@bloopi.com.br" className="hover:text-primary transition-colors">contato@bloopi.com.br</a>
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
                        Bloopi © 2025 | Todos os Direitos Reservados | Bloopi Tecnologia - CNPJ: 13.021.496/0001-21
                    </p>
                    <button
                        onClick={scrollToTop}
                        className="p-3 rounded-lg bg-slate-900 text-white hover:bg-primary transition-colors"
                    >
                        <ArrowUp size={20} />
                    </button>
                </div>
            </div>
        </footer >
    );
};

export default Footer;
