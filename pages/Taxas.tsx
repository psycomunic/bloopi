import React from 'react';
import { CheckCircle2, DollarSign, Zap, TrendingUp, ArrowRight, ShieldCheck, Smartphone, CreditCard } from 'lucide-react';
import { PixIcon } from '../components/icons/PixIcon';
import FeeCalculator from '../components/FeeCalculator';
import { motion } from 'framer-motion';

const Taxas = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-slate-900 overflow-x-hidden">

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-4">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[120px] -z-10"></div>

                <div className="max-w-7xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 mb-8"
                    >
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        <span className="text-sm font-bold text-slate-700 dark:text-slate-300">As menores taxas do mercado</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-8 leading-tight tracking-tight"
                    >
                        Lucro é o que sobra <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">depois das taxas.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed"
                    >
                        Não deixe seu faturamento ir embora em taxas escondidas. <br className="hidden md:block" />
                        Na Bloopi, entregamos transparência total e o melhor custo-benefício.
                    </motion.p>
                </div>
            </section>

            {/* Calculator Section */}
            <section className="py-10 px-4 relative z-20">
                <div className="max-w-7xl mx-auto transform hover:scale-[1.01] transition-transform duration-500">
                    <FeeCalculator />
                </div>
            </section>

            {/* Cards Grid */}
            <section className="py-24 px-4 bg-slate-50 dark:bg-slate-900/50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4">Escolha como quer vender</h2>
                        <p className="text-slate-500 dark:text-slate-400 text-lg">Opções flexíveis para cada momento do seu negócio.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* PIX Card */}
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="bg-white dark:bg-slate-800 p-8 rounded-[2rem] shadow-xl border-2 border-primary/20 relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 bg-primary/10 text-primary text-xs font-black px-4 py-2 rounded-bl-2xl">MAIS POPULAR</div>
                            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                <PixIcon size={32} />
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                                Pix <PixIcon size={24} className="text-primary" />
                            </h3>
                            <div className="flex items-baseline gap-1 mb-6">
                                <span className="text-5xl font-black text-slate-900 dark:text-white tracking-tighter">0,99</span>
                                <span className="text-xl font-bold text-slate-500">%</span>
                            </div>
                            <p className="text-slate-500 dark:text-slate-400 mb-8 font-medium">Receba em segundos, 24/7. A maior conversão do mercado.</p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-3">
                                    <div className="p-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600">
                                        <CheckCircle2 size={16} />
                                    </div>
                                    <span className="text-slate-700 dark:text-slate-300 font-bold">Aprovação imediata</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="p-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600">
                                        <CheckCircle2 size={16} />
                                    </div>
                                    <span className="text-slate-700 dark:text-slate-300 font-bold">QR Code Dinâmico</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="p-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600">
                                        <CheckCircle2 size={16} />
                                    </div>
                                    <span className="text-slate-700 dark:text-slate-300 font-bold">Baixa automática</span>
                                </li>
                            </ul>
                            <a href="https://app.bloopicheckout.com.br/signup" target="_blank" rel="noopener noreferrer" className="block w-full py-4 text-center rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold hover:opacity-90 transition-opacity">
                                Começar com Pix
                            </a>
                        </motion.div>

                        {/* Credit Card */}
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="bg-white dark:bg-slate-800 p-8 rounded-[2rem] shadow-xl border border-slate-100 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-700 transition-colors group"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                                <CreditCard size={32} />
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2">Cartão de Crédito</h3>
                            <div className="flex items-baseline gap-1 mb-6">
                                <span className="text-5xl font-black text-slate-900 dark:text-white tracking-tighter">3,19</span>
                                <span className="text-xl font-bold text-slate-500">%</span>
                            </div>
                            <p className="text-slate-500 dark:text-slate-400 mb-8 font-medium">Para recebimento em 30 dias. Opção de antecipação disponível.</p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-3">
                                    <div className="p-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600">
                                        <CheckCircle2 size={16} />
                                    </div>
                                    <span className="text-slate-700 dark:text-slate-300 font-bold">Antifraude Grátis</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="p-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600">
                                        <CheckCircle2 size={16} />
                                    </div>
                                    <span className="text-slate-700 dark:text-slate-300 font-bold">Até 12x no cartão</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="p-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600">
                                        <CheckCircle2 size={16} />
                                    </div>
                                    <span className="text-slate-700 dark:text-slate-300 font-bold">Retentativa Inteligente</span>
                                </li>
                            </ul>
                            <a href="https://app.bloopicheckout.com.br/signup" target="_blank" rel="noopener noreferrer" className="block w-full py-4 text-center rounded-xl border-2 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                                Vender no Crédito
                            </a>
                        </motion.div>

                        {/* Boleto */}
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="bg-white dark:bg-slate-800 p-8 rounded-[2rem] shadow-xl border border-slate-100 dark:border-slate-700 hover:border-purple-300 dark:hover:border-purple-700 transition-colors group"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-6 group-hover:bg-purple-500 group-hover:text-white transition-colors duration-300">
                                <ScanBarcodeIcon size={32} />
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2">Boleto</h3>
                            <div className="flex items-baseline gap-1 mb-6">
                                <span className="text-xl font-bold text-slate-500">R$</span>
                                <span className="text-5xl font-black text-slate-900 dark:text-white tracking-tighter">3,49</span>
                            </div>
                            <p className="text-slate-500 dark:text-slate-400 mb-8 font-medium">Boleto híbrido com QR Code Pix. Paga só se compensar.</p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-3">
                                    <div className="p-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600">
                                        <CheckCircle2 size={16} />
                                    </div>
                                    <span className="text-slate-700 dark:text-slate-300 font-bold">Registro Automático</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="p-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600">
                                        <CheckCircle2 size={16} />
                                    </div>
                                    <span className="text-slate-700 dark:text-slate-300 font-bold">Recuperação de Boleto</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="p-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600">
                                        <CheckCircle2 size={16} />
                                    </div>
                                    <span className="text-slate-700 dark:text-slate-300 font-bold">Sem taxa de emissão</span>
                                </li>
                            </ul>
                            <a href="https://app.bloopicheckout.com.br/signup" target="_blank" rel="noopener noreferrer" className="block w-full py-4 text-center rounded-xl border-2 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                                Configurar Boletos
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* D+1 Section */}
            <section className="py-24 px-4 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>

                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
                    <div>
                        <div className="inline-block py-2 px-4 rounded-full bg-blue-500/20 text-blue-400 font-bold mb-6 backdrop-blur-md border border-blue-500/30">
                            ANTECIPAÇÃO AUTOMÁTICA
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                            Receba tudo em <br /><span className="text-blue-400">um dia útil.</span>
                        </h2>
                        <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                            Esqueça o fluxo de caixa travado. Na Bloopi, você tem a opção de receber suas vendas no crédito à vista ou parcelado já no dia seguinte.
                        </p>
                        <ul className="space-y-4 mb-10">
                            <li className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400">
                                    <TrendingUp size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-white">Fluxo de Caixa Turbinado</h4>
                                    <p className="text-slate-400 text-sm">Dinheiro na mão para reinvestir.</p>
                                </div>
                            </li>
                            <li className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400">
                                    <ShieldCheck size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-white">Sem burocracia</h4>
                                    <p className="text-slate-400 text-sm">Aprovação automática baseada em volume.</p>
                                </div>
                            </li>
                        </ul>
                        <a href="https://app.bloopicheckout.com.br/signup" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-bold transition-all transform hover:scale-105 shadow-lg shadow-blue-500/25">
                            Quero receber em D+1
                        </a>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl"></div>
                        <div className="bg-slate-800/80 backdrop-blur-xl border border-white/10 p-8 rounded-3xl relative">
                            {/* Abstract Graphic representing speed/money */}
                            <div className="flex flex-col gap-4">
                                <div className="flex justify-between items-center bg-slate-700/50 p-4 rounded-xl border border-white/5">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                                            <DollarSign size={20} />
                                        </div>
                                        <div>
                                            <div className="font-bold text-white">Venda Aprovada</div>
                                            <div className="text-xs text-slate-400">Hoje, 14:30</div>
                                        </div>
                                    </div>
                                    <div className="font-bold text-green-400">+ R$ 1.250,00</div>
                                </div>
                                <div className="ml-8 border-l-2 border-dashed border-slate-600 h-8"></div>
                                <div className="flex justify-between items-center bg-blue-500/20 border border-blue-500/30 p-4 rounded-xl">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
                                            <Zap size={20} />
                                        </div>
                                        <div>
                                            <div className="font-bold text-white">Disponível para Saque</div>
                                            <div className="text-xs text-blue-200">Amanhã, 09:00</div>
                                        </div>
                                    </div>
                                    <div className="font-bold text-white">R$ 1.210,00</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Bloopi Section - 3 Grid */}
            <section className="py-24 px-4 bg-white dark:bg-slate-900">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">Por que nossas taxas valem a pena?</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700/80 transition-colors">
                            <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-900/30 text-orange-600 mb-6 flex items-center justify-center">
                                <ShieldCheck size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Antifraude Incluso</h3>
                            <p className="text-slate-500 leading-relaxed">Não cobramos extra pelo sistema de segurança. Sua proteção já está incluída na taxa.</p>
                        </div>
                        <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700/80 transition-colors">
                            <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 text-purple-600 mb-6 flex items-center justify-center">
                                <Smartphone size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Gateway Resiliente</h3>
                            <p className="text-slate-500 leading-relaxed">Multi-adquirente. Se uma operadora falhar, tentamos outra automaticamente.</p>
                        </div>
                        <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700/80 transition-colors">
                            <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 mb-6 flex items-center justify-center">
                                <TrendingUp size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Dashboard em Tempo Real</h3>
                            <p className="text-slate-500 leading-relaxed">Acompanhe suas vendas, chargebacks e conversão ao vivo, sem pagar nada a mais.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="py-20 px-4">
                <div className="max-w-5xl mx-auto bg-gradient-to-r from-primary to-blue-600 rounded-[3rem] p-12 md:p-20 text-center text-white shadow-2xl shadow-blue-500/30 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-6xl font-black mb-8">Pare de perder dinheiro hoje.</h2>
                        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                            Crie sua conta gratuita em menos de 2 minutos e comece a vender com a tecnologia de pagamentos mais avançada do Brasil.
                        </p>
                        <a href="https://app.bloopicheckout.com.br/signup" target="_blank" rel="noopener noreferrer" className="inline-block px-10 py-5 bg-white text-primary text-xl font-black rounded-2xl hover:bg-slate-100 transition-all transform hover:scale-105 shadow-xl">
                            CRIAR CONTA GRÁTIS
                        </a>
                        <p className="mt-6 text-sm text-blue-200 opacity-80">Sem mensalidade. Sem fidelidade. Cancele quando quiser.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

// Icon component needed for the layout not in standard set
const ScanBarcodeIcon = ({ size = 24, className = "" }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M3 7V5a2 2 0 0 1 2-2h2" />
        <path d="M17 3h2a2 2 0 0 1 2 2v2" />
        <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
        <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
        <rect width="14" height="14" x="5" y="5" rx="2" />
    </svg>
);

export default Taxas;
