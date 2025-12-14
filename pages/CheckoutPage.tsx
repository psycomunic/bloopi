import React from 'react';
import { motion } from 'framer-motion';
import {
    ShoppingCart,
    Zap,
    ShieldCheck,
    Smartphone,
    ArrowRight,
    CheckCircle2,
    MousePointer2,
    Lock,
    Timer,
    CreditCard,
    DollarSign
} from 'lucide-react';
import { Link } from 'react-router-dom';

const CheckoutPage = () => {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-4 overflow-hidden">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-green-500/10 rounded-full blur-[120px] -mr-40 -mt-60"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] -ml-40 -mb-40"></div>

                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block py-2 px-4 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold uppercase tracking-wider mb-6 border border-green-200 dark:border-green-800 flex items-center gap-2 w-fit mx-auto">
                            <img src="/logo.png" alt="Bloopi" className="h-4" />
                            NOVO CHECKOUT 3.1
                        </span>
                        <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-8 leading-tight">
                            Checkout Bloopi: <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                                O mais rápido do Mercado.
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                            Aumente sua conversão em até 30% com um checkout transparente, otimizado para mobile e desenhado para eliminar qualquer atrito.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                            <button className="h-16 px-10 rounded-full bg-green-600 text-white font-bold text-lg shadow-xl shadow-green-600/20 hover:bg-green-700 hover:scale-105 transition-all flex items-center gap-2">
                                Ativar Checkout 3.1 <ArrowRight size={20} />
                            </button>
                            <button className="h-16 px-10 rounded-full bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-bold text-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">
                                Ver demonstração
                            </button>
                        </div>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto border-t border-slate-200 dark:border-slate-800 pt-12"
                    >
                        <div>
                            <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-1">0.8s</h3>
                            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Carregamento Ultra-rápido</p>
                        </div>
                        <div>
                            <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-1">+32%</h3>
                            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Aumento de Conversão</p>
                        </div>
                        <div>
                            <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-1">1-Click</h3>
                            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Compra Instantânea</p>
                        </div>
                        <div>
                            <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-1">99.9%</h3>
                            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Uptime Garantido</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Interactive Preview Section */}
            <section className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="bg-slate-900 rounded-[3rem] p-4 md:p-20 overflow-hidden relative shadow-2xl">
                        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-green-500/20 rounded-full blur-[120px]"></div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
                            <div className="space-y-8">
                                <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
                                    Menos cliques.<br />
                                    <span className="flex items-center gap-2">
                                        Mais vendas. <DollarSign className="text-green-400" size={32} />
                                    </span>
                                </h2>
                                <p className="text-lg text-slate-400 leading-relaxed">
                                    O Checkout 3.1 foi reescrito do zero. Removemos campos desnecessários, otimizamos o preenchimento automático e integramos as melhores carteiras digitais.
                                </p>

                                <ul className="space-y-4">
                                    {[
                                        'Identificação automática do cliente',
                                        'Checkout com a garantia Bloopi',
                                        'Google Pay e Apple Pay nativos',
                                        'Recuperação de carrinho integrada',
                                        'Layout mobile-first'
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-white font-medium">
                                            <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                                                <CheckCircle2 size={14} />
                                            </div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Checkout Graphic */}
                            <div className="relative mx-auto w-full max-w-sm">
                                <div className="absolute inset-0 bg-gradient-to-b from-green-500/20 to-transparent blur-2xl rounded-[2.5rem]"></div>
                                <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl relative">
                                    {/* Mock Header */}
                                    <div className="h-16 bg-slate-50 border-b border-slate-100 flex items-center justify-between px-6">
                                        <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center">
                                            <span className="text-white font-bold text-xs">B</span>
                                        </div>
                                        <div className="flex gap-1">
                                            <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                            <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                                        </div>
                                    </div>

                                    {/* Mock Body */}
                                    <div className="p-6 space-y-4">
                                        <div className="flex gap-4 p-3 bg-slate-50 rounded-xl border border-slate-100">
                                            <div className="w-12 h-12 bg-slate-200 rounded-lg shrink-0"></div>
                                            <div>
                                                <div className="w-24 h-3 bg-slate-200 rounded mb-2"></div>
                                                <div className="w-16 h-3 bg-slate-200 rounded"></div>
                                            </div>
                                            <div className="ml-auto font-bold text-slate-900">R$ 97</div>
                                        </div>

                                        <div className="space-y-3">
                                            <label className="text-xs font-bold text-slate-400 uppercase">Pagamento</label>
                                            <div className="grid grid-cols-2 gap-3">
                                                <div className="h-12 border-2 border-green-500 bg-green-50 text-green-700 font-bold rounded-xl flex items-center justify-center text-sm gap-2">
                                                    <CreditCard size={16} /> Cartão
                                                </div>
                                                <div className="h-12 border border-slate-200 rounded-xl flex items-center justify-center text-sm font-bold text-slate-500 gap-2">
                                                    <Zap size={16} /> Pix
                                                </div>
                                            </div>
                                        </div>

                                        <div className="h-12 bg-slate-100 rounded-xl border border-slate-200"></div>
                                        <div className="flex gap-3">
                                            <div className="h-12 flex-1 bg-slate-100 rounded-xl border border-slate-200"></div>
                                            <div className="h-12 w-20 bg-slate-100 rounded-xl border border-slate-200"></div>
                                        </div>

                                        <button className="w-full h-14 bg-green-600 text-white font-bold rounded-xl shadow-lg shadow-green-600/20 mt-4 animate-pulse">
                                            Pagar Agora
                                        </button>
                                    </div>
                                </div>

                                {/* Floating Badge */}
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute top-1/2 -right-12 bg-white text-slate-900 p-4 rounded-2xl shadow-xl flex items-center gap-3"
                                >
                                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                        <Timer size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 font-bold uppercase">Tempo médio</p>
                                        <p className="text-lg font-black">45 seg</p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-24 px-4 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-4">Por que migrar para o 3.1?</h2>
                    <p className="text-xl text-slate-500 dark:text-slate-400">Tecnologia de ponta para quem não aceita perder vendas.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: <Zap size={24} />,
                            title: 'Order Bump 2.0',
                            desc: 'Ofereça produtos complementares com um clique, direto no fluxo de pagamento.',
                            color: 'text-yellow-600',
                            bg: 'bg-yellow-100 dark:bg-yellow-900/30'
                        },
                        {
                            icon: <Smartphone size={24} />,
                            title: 'Mobile First Exremo',
                            desc: 'Inteface desenhada para dedões. Inputs maiores, menos digitação.',
                            color: 'text-blue-600',
                            bg: 'bg-blue-100 dark:bg-blue-900/30'
                        },
                        {
                            icon: <ShieldCheck size={24} />,
                            title: 'Retentativa Inteligente',
                            desc: 'Se o cartão falhar, nosso sistema tenta automaticamente outra adquirente.',
                            color: 'text-green-600',
                            bg: 'bg-green-100 dark:bg-green-900/30'
                        },
                        {
                            icon: <MousePointer2 size={24} />,
                            title: 'Recuperação de Carrinho',
                            desc: 'Capture o e-mail enquanto o cliente digita e recupere 20% das vendas perdidas.',
                            color: 'text-purple-600',
                            bg: 'bg-purple-100 dark:bg-purple-900/30'
                        },
                        {
                            icon: <Lock size={24} />,
                            title: 'Antifraude Híbrido',
                            desc: 'Mecanismo duplo de verificação que barra fraudes sem barrar vendas reais.',
                            color: 'text-red-600',
                            bg: 'bg-red-100 dark:bg-red-900/30'
                        },
                        {
                            icon: <CheckCircle2 size={24} />,
                            title: 'Pixels API',
                            desc: 'Servidor para Servidor (CAPI) com Facebook e TikTok para rastreamento perfeito.',
                            color: 'text-indigo-600',
                            bg: 'bg-indigo-100 dark:bg-indigo-900/30'
                        }
                    ].map((feature, i) => (
                        <div key={i} className="p-8 rounded-3xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                            <div className={`w-14 h-14 rounded-2xl ${feature.bg} flex items-center justify-center ${feature.color} mb-6`}>
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{feature.title}</h3>
                            <p className="text-slate-500 dark:text-slate-400 leading-relaxed">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-4">
                <div className="max-w-4xl mx-auto bg-green-600 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl shadow-green-900/50">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-3xl -ml-20 -mb-20"></div>

                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
                            Sua loja merece vender mais.
                        </h2>
                        <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto">
                            Não deixe dinheiro na mesa por causa de um checkout lento. Migre hoje para o padrão ouro do mercado.
                        </p>
                        <button className="bg-white text-green-700 font-bold py-5 px-12 rounded-full text-xl shadow-xl hover:bg-green-50 transition-all transform hover:-translate-y-1">
                            Criar Conta Grátis
                        </button>
                        <p className="mt-6 text-sm text-green-200 font-medium">Sem cartão de crédito • Setup em 2 minutos</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CheckoutPage;
