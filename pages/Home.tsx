import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Zap,
  TrendingUp,
  ShoppingCart,
  CreditCard,
  Smartphone,
  Globe,
  Lock,
  Barcode,
  FileText,
  Monitor,
  RefreshCw,
  ScanSearch,
  Link,
  BarChart3,
  Activity,
  Mail,
  CheckCircle,
  Plus,
  Users,
  DollarSign,
  MoreHorizontal,
  ArrowUpRight,
  Calendar,
  Bell,
  Search,
  ChevronDown,
  Wallet,
  Star,
  Quote,
  ArrowLeft
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'checkout' | 'dashboard'>('checkout');
  const [activeTheme, setActiveTheme] = useState('brutus');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      text: "Migrar pra Bloopi foi uma das melhores decisões que tomei. Meu checkout anterior era lento e confuso. Com a Bloopi, percebi a diferença já nos primeiros dias: mais velocidade, menos abandono e suporte que responde de verdade.",
      name: "Camila Rocha",
      stat: "+1 milhão",
      statLabel: "faturados com a Bloopi",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    },
    {
      text: "A facilidade de integração e a transparência nas taxas nos deram a segurança que precisávamos para escalar. O suporte exclusivo faz toda a diferença no dia a dia.",
      name: "Leonardo Martins",
      stat: "+5 milhões",
      statLabel: "processados mensalmente",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    },
    {
      text: "Desde que começamos com a Bloopi, nossa taxa de aprovação subiu drasticamente. O checkout transparente passa muito mais credibilidade para o nosso cliente final.",
      name: "Juliana Costa",
      stat: "+500 mil",
      statLabel: "em vendas no último mês",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="w-full bg-background-light dark:bg-background-dark overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-48 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Animated Background Lines */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ x: -1000, opacity: 0 }}
              animate={{ x: 2000, opacity: [0, 0.5, 0] }}
              transition={{
                duration: 10 + Math.random() * 10,
                repeat: Infinity,
                delay: i * 2,
                ease: "linear",
              }}
              className="absolute h-[1px] w-1/2 bg-gradient-to-r from-transparent via-blue-400 to-transparent blur-sm"
              style={{ top: `${20 + i * 15}%` }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left pt-10"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-blue-200 text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                Nova geração de pagamentos
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6 tracking-tight">
                Entregue seu produto digital de forma surpreendente!
              </h1>

              <div className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 space-y-4">
                <p>
                  O Bloopi conecta você a tudo que precisa para vender online, do checkout ao pós-venda, com tecnologia robusta e segurança de ponta a ponta.
                </p>
                <p>
                  Impulsione sua operação oferecendo uma experiência de pagamento eficaz, segura e intuitiva para seus clientes através de um ecossistema completo, que transforma seu infoproduto em vendas!
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="h-14 px-8 rounded-xl bg-green-500 hover:bg-green-400 text-slate-900 font-bold text-lg shadow-lg shadow-green-500/20 hover:scale-105 transition-all flex items-center justify-center gap-2">
                  Criar conta grátis
                  <ArrowRight size={20} />
                </button>
                <button className="h-14 px-8 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-lg backdrop-blur-md border border-white/10 transition-all">
                  Conhecer
                </button>
              </div>


            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative lg:h-[800px] flex items-end justify-center lg:justify-end"
            >
              <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent z-10 pointer-events-none"></div>
              <img
                src="/hero-woman.png"
                alt="Happy customer using laptop"
                className="relative z-0 object-contain max-h-[600px] lg:max-h-[850px] drop-shadow-2xl"
              />

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 right-10 bg-white/10 backdrop-blur-xl p-4 rounded-2xl border border-white/20 shadow-2xl z-20 hidden md:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-slate-900">
                    <TrendingUp size={24} />
                  </div>
                  <div>
                    <div className="text-xs text-blue-200">Conversão</div>
                    <div className="text-xl font-bold text-white">+32%</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="relative z-20 -mt-32 px-4 sm:px-6 lg:px-8 pb-24">
        <div className="max-w-7xl mx-auto bg-white dark:bg-slate-800 rounded-[2.5rem] shadow-xl border border-slate-100 dark:border-slate-700 p-8 md:p-12 lg:p-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Feature 1: Checkout */}
            <div className="space-y-6">
              <div className="w-14 h-14 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
                <ShoppingCart size={28} strokeWidth={2} />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-tight">
                  Converta mais com checkout otimizado e sem fricção
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  Taxa de conversão superior a 84% com fluxo direto. Processo simplificado para vendas avulsas e assinaturas recorrentes.
                </p>
              </div>
            </div>

            {/* Feature 2: Rastreamento */}
            <div className="space-y-6">
              <div className="w-14 h-14 rounded-full bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center text-purple-600 dark:text-purple-400">
                <ScanSearch size={28} strokeWidth={2} />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-tight">
                  Identifique o que funciona e elimine o que não converte
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  Acompanhe leads, vendas e ROI em tempo real com rastreamento completo de campanhas e métricas detalhadas de performance.
                </p>
              </div>
            </div>

            {/* Feature 3: Integrações */}
            <div className="space-y-6">
              <div className="w-14 h-14 rounded-full bg-indigo-50 dark:bg-indigo-900/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                <Link size={28} strokeWidth={2} />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-tight">
                  Integre tudo sem complexidade técnica ou desenvolvedores
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  +150 integrações nativas automatizam seu funil completo. Da captura de leads ao pós-venda sem complexidade técnica, em apenas alguns cliques.
                </p>
              </div>
            </div>

            {/* Feature 4: Métricas */}
            <div className="space-y-6">
              <div className="w-14 h-14 rounded-full bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                <BarChart3 size={28} strokeWidth={2} />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-tight">
                  Monitore performance com dados precisos em tempo real
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  Visão completa do negócio com métricas centralizadas em dashboard único. Vendas, assinaturas, clientes e campanhas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Checkout Preview Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block py-2 px-4 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-xs font-bold uppercase tracking-wider mb-6">
              CONHEÇA A BLOOPI
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white leading-tight mb-6">
              Com a Bloopi, o checkout não é o fim, é o começo do seu crescimento
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Transformamos seu checkout no maior diferencial da sua loja. Não somos apenas uma solução de pagamentos: aumentamos suas vendas, elevamos o ticket médio e tornamos sua operação mais profissional.
            </p>
          </div>

          {/* Interactive Component */}
          <div className="flex flex-col gap-8">
            {/* Tabs */}
            <div className="flex flex-col md:flex-row bg-white dark:bg-slate-800 p-2 rounded-2xl md:rounded-full border border-slate-200 dark:border-slate-700 w-full md:max-w-[520px] mx-auto shadow-sm">
              <button
                onClick={() => setActiveTab('checkout')}
                className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl md:rounded-full font-bold transition-all duration-300 ${activeTab === 'checkout'
                  ? 'bg-green-500 text-slate-900 shadow-lg shadow-green-500/20'
                  : 'text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700/50'
                  }`}
              >
                <ShoppingCart size={20} />
                Checkout Customizado
              </button>
              <button
                onClick={() => setActiveTab('dashboard')}
                className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl md:rounded-full font-bold transition-all duration-300 ${activeTab === 'dashboard'
                  ? 'bg-green-500 text-slate-900 shadow-lg shadow-green-500/20'
                  : 'text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700/50'
                  }`}
              >
                <BarChart3 size={20} />
                Dashboard Inteligente
              </button>
            </div>

            {/* Content Area */}
            <div className="bg-white dark:bg-slate-800 rounded-[2.5rem] border border-slate-200 dark:border-slate-700 overflow-hidden shadow-2xl flex flex-col md:flex-row min-h-[600px]">
              {activeTab === 'checkout' ? (
                <>
                  <div className="flex-1 bg-slate-100 dark:bg-slate-900/50 p-4 md:p-8 flex items-center justify-center overflow-hidden relative min-h-[700px]">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

                    {/* Mockup Container - Standalone & Centered */}
                    <div className="relative w-full max-w-4xl mx-auto bg-white dark:bg-slate-800 rounded-[2rem] shadow-2xl border-[8px] border-slate-900 overflow-hidden flex flex-col md:flex-row">

                      {/* Left Column - Product & Trust */}
                      <div className="w-full md:w-1/3 bg-slate-50 dark:bg-slate-900/50 p-6 border-b md:border-b-0 md:border-r border-slate-100 dark:border-slate-700 flex flex-col">

                        {/* Header Mockup */}
                        <div className="flex items-center gap-2 mb-8">
                          <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center text-slate-900 font-bold">B</div>
                          <span className="font-bold text-slate-900 dark:text-white text-sm">Bloopi Pay</span>
                        </div>

                        {/* Product Info */}
                        <div className="mb-8">
                          <div className="aspect-video rounded-xl bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 mb-4 flex items-center justify-center text-4xl shadow-inner">
                            🚀
                          </div>
                          <h4 className="font-bold text-slate-900 dark:text-white mb-1">Método Bloopi Pro</h4>
                          <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">Acesso Vitalício + Comunidade</p>
                          <div className="flex items-center justify-between">
                            <span className="font-black text-xl text-slate-900 dark:text-white">R$ 97,00</span>
                            <span className="text-xs font-bold bg-green-100 text-green-600 px-2 py-1 rounded-full">-50% OFF</span>
                          </div>
                        </div>

                        {/* Guarantee Badge */}
                        <div className="mt-auto bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center text-yellow-600">
                            <ShieldCheck size={20} />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-slate-900 dark:text-white">Garantia de 7 Dias</p>
                            <p className="text-[10px] text-slate-500 dark:text-slate-400">Risco zero para você</p>
                          </div>
                        </div>

                        {/* Testimonial */}
                        <div className="mt-4 flex gap-3 items-start">
                          <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden shrink-0">
                            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Jessica" alt="User" />
                          </div>
                          <div className="bg-white dark:bg-slate-800 p-3 rounded-tr-xl rounded-br-xl rounded-bl-xl border border-slate-100 dark:border-slate-700 shadow-sm">
                            <p className="text-[10px] text-slate-600 dark:text-slate-300 italic">"O checkout mais rápido que já vi. Minhas vendas aumentaram 30% na primeira semana!"</p>
                            <p className="text-[10px] font-bold text-slate-900 dark:text-white mt-1">- Jéssica M.</p>
                          </div>
                        </div>
                      </div>

                      {/* Right Column - Checkout Form */}
                      <div className="flex-1 p-6 md:p-8 bg-white dark:bg-slate-800 relative">
                        {/* Secure Header */}
                        <div className="flex justify-between items-center mb-6">
                          <h3 className="font-bold text-slate-900 dark:text-white">Finalizar Pagamento</h3>
                          <div className="flex items-center gap-1 text-green-600 bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded-full text-[10px] font-bold">
                            <Lock size={10} />
                            Ambiente Seguro
                          </div>
                        </div>

                        {/* Form Fields */}
                        <div className="space-y-4 mb-6">
                          <div className="space-y-1.5">
                            <label className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Dados Pessoais</label>
                            <div className="relative">
                              <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                              <div className="w-full h-10 pl-9 pr-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 text-sm flex items-center text-slate-600 dark:text-slate-300">
                                angelo@exemplo.com
                              </div>
                              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500">
                                <CheckCircle2 size={16} />
                              </div>
                            </div>
                          </div>

                          <div className="space-y-1.5">
                            <label className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Cartão de Crédito</label>
                            <div className="space-y-3">
                              <div className="relative">
                                <CreditCard size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                                <div className="w-full h-10 pl-9 pr-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 text-sm flex items-center text-slate-600 dark:text-slate-300">
                                  4582 •••• •••• 9012
                                </div>
                              </div>
                              <div className="grid grid-cols-2 gap-3">
                                <div className="w-full h-10 px-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 text-sm flex items-center text-slate-600 dark:text-slate-300">
                                  Angelo Garcia
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                  <div className="w-full h-10 px-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 text-sm flex items-center text-slate-600 dark:text-slate-300">
                                    12/28
                                  </div>
                                  <div className="w-full h-10 px-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 text-sm flex items-center text-slate-600 dark:text-slate-300">
                                    123
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Order Bump */}
                        <div className="mb-6 p-3 bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30 rounded-xl flex gap-3 items-start cursor-pointer hover:bg-red-100/50 transition-colors">
                          <div className="mt-1 w-4 h-4 rounded border-2 border-red-500 flex items-center justify-center bg-red-500">
                            <CheckCircle2 size={12} className="text-white" />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-slate-900 dark:text-white"><span className="text-red-500">SIM!</span> Adicionar E-book Exclusivo</p>
                            <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight mt-1">Leve também o guia completo de estratégias por apenas <span className="font-bold text-slate-900 dark:text-white">R$ 19,90</span>.</p>
                          </div>
                        </div>

                        {/* Pay Button */}
                        <div className="h-14 w-full rounded-xl bg-green-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-green-600/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer animate-pulse-slow">
                          Pagar R$ 116,90 Agora
                        </div>

                        <div className="mt-4 flex justify-center gap-4 opacity-50 grayscale">
                          {/* Generic Card Icons Mockup */}
                          <div className="h-4 w-8 bg-slate-300 rounded"></div>
                          <div className="h-4 w-8 bg-slate-300 rounded"></div>
                          <div className="h-4 w-8 bg-slate-300 rounded"></div>
                          <div className="h-4 w-8 bg-slate-300 rounded"></div>
                        </div>

                        {/* Sales Notification Popup */}
                        <motion.div
                          initial={{ x: 100, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 3, duration: 0.5, type: "spring" }}
                          className="absolute bottom-4 right-4 bg-white dark:bg-slate-800 rounded-xl shadow-2xl border border-slate-100 dark:border-slate-700 p-3 flex items-center gap-3 z-20 max-w-[240px]"
                        >
                          <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 shrink-0">
                            <CheckCircle2 size={20} />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-slate-900 dark:text-white">Nova venda!</p>
                            <p className="text-[10px] text-slate-500 dark:text-slate-400">Pedro acabou de comprar o Método Bloopi Pro</p>
                          </div>
                        </motion.div>

                      </div>
                    </div>
                  </div>
                </>
              ) : (
                /* Dashboard Preview - High Fidelity */
                <div className="w-full h-full flex items-center justify-center p-4 md:p-8 bg-slate-50 dark:bg-slate-900/50">
                  <div className="w-full max-w-5xl bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden flex flex-col h-full max-h-[600px]">

                    {/* Dashboard Header */}
                    <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-700 flex justify-between items-center bg-white dark:bg-slate-800 z-10">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-600/20">
                          <span className="font-bold text-lg">B</span>
                        </div>
                        <div>
                          <h3 className="font-bold text-slate-900 dark:text-white text-sm">Visão Geral</h3>
                          <p className="text-xs text-slate-500 dark:text-slate-400">Bem-vindo de volta, Angelo</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-slate-50 dark:bg-slate-700/50 rounded-lg border border-slate-100 dark:border-slate-700">
                          <Calendar size={14} className="text-slate-500" />
                          <span className="text-xs font-medium text-slate-600 dark:text-slate-300">Últimos 30 dias</span>
                          <ChevronDown size={14} className="text-slate-400" />
                        </div>
                        <div className="w-8 h-8 rounded-full bg-slate-50 dark:bg-slate-700/50 flex items-center justify-center border border-slate-100 dark:border-slate-700 relative">
                          <Bell size={16} className="text-slate-500 dark:text-slate-400" />
                          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-800"></span>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 p-[2px]">
                          <div className="w-full h-full rounded-full bg-white dark:bg-slate-800 p-[2px]">
                            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" className="w-full h-full rounded-full" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Dashboard Content */}
                    <div className="p-6 overflow-y-auto custom-scrollbar space-y-6 bg-slate-50/50 dark:bg-slate-900/20 flex-1">

                      {/* Stats Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* Card 1 */}
                        <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
                          <div className="absolute top-0 right-0 w-24 h-24 bg-green-500/5 rounded-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                          <div className="flex justify-between items-start mb-4">
                            <div className="p-2 bg-green-50 dark:bg-green-900/20 rounded-lg text-green-600 dark:text-green-400">
                              <DollarSign size={20} />
                            </div>
                            <span className="flex items-center text-xs font-bold text-green-600 bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded-full">
                              +15% <ArrowUpRight size={12} className="ml-1" />
                            </span>
                          </div>
                          <div className="space-y-1">
                            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Faturamento Total</p>
                            <h4 className="text-2xl font-black text-slate-900 dark:text-white">R$ 124.500</h4>
                          </div>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
                          <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                          <div className="flex justify-between items-start mb-4">
                            <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-blue-600 dark:text-blue-400">
                              <ShoppingCart size={20} />
                            </div>
                            <span className="flex items-center text-xs font-bold text-blue-600 bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded-full">
                              +8% <ArrowUpRight size={12} className="ml-1" />
                            </span>
                          </div>
                          <div className="space-y-1">
                            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Vendas Realizadas</p>
                            <h4 className="text-2xl font-black text-slate-900 dark:text-white">1.432</h4>
                          </div>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
                          <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/5 rounded-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                          <div className="flex justify-between items-start mb-4">
                            <div className="p-2 bg-purple-50 dark:bg-purple-900/20 rounded-lg text-purple-600 dark:text-purple-400">
                              <Users size={20} />
                            </div>
                            <span className="flex items-center text-xs font-bold text-purple-600 bg-purple-50 dark:bg-purple-900/20 px-2 py-1 rounded-full">
                              +12% <ArrowUpRight size={12} className="ml-1" />
                            </span>
                          </div>
                          <div className="space-y-1">
                            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Clientes Ativos</p>
                            <h4 className="text-2xl font-black text-slate-900 dark:text-white">854</h4>
                          </div>
                        </div>
                      </div>

                      {/* Main Chart Section */}
                      <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm">
                        <div className="flex justify-between items-center mb-6">
                          <div>
                            <h4 className="font-bold text-slate-900 dark:text-white">Performance de Vendas</h4>
                            <p className="text-xs text-slate-500 dark:text-slate-400">Comparativo com mês anterior</p>
                          </div>
                          <button className="p-2 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg transition-colors">
                            <MoreHorizontal size={20} className="text-slate-400" />
                          </button>
                        </div>

                        {/* CSS Chart Mockup */}
                        <div className="relative h-48 w-full mt-4">
                          {/* Grid Lines */}
                          <div className="absolute inset-0 flex flex-col justify-between text-xs text-slate-400">
                            <div className="border-b border-slate-100 dark:border-slate-700/50 w-full h-0"></div>
                            <div className="border-b border-slate-100 dark:border-slate-700/50 w-full h-0"></div>
                            <div className="border-b border-slate-100 dark:border-slate-700/50 w-full h-0"></div>
                            <div className="border-b border-slate-100 dark:border-slate-700/50 w-full h-0"></div>
                          </div>

                          {/* Chart Path */}
                          <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none">
                            <defs>
                              <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#22c55e" stopOpacity="0.2" />
                                <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
                              </linearGradient>
                            </defs>
                            <path
                              d="M0,150 C50,140 100,100 150,110 C200,120 250,60 300,70 C350,80 400,30 450,40 C500,50 550,10 600,20 L600,200 L0,200 Z"
                              fill="url(#chartGradient)"
                              className="text-green-500"
                            />
                            <path
                              d="M0,150 C50,140 100,100 150,110 C200,120 250,60 300,70 C350,80 400,30 450,40 C500,50 550,10 600,20"
                              fill="none"
                              stroke="#22c55e"
                              strokeWidth="3"
                              strokeLinecap="round"
                            />

                            {/* Hover Point Mockup */}
                            <circle cx="450" cy="40" r="6" fill="#22c55e" className="animate-pulse" />
                            <circle cx="450" cy="40" r="12" fill="#22c55e" fillOpacity="0.2" />
                          </svg>

                          {/* Tooltip Mockup */}
                          <div className="absolute top-0 left-[70%] transform -translate-x-1/2 -translate-y-full bg-slate-900 text-white text-xs py-1 px-3 rounded-lg shadow-xl mb-2">
                            R$ 4.250,00
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-slate-900"></div>
                          </div>
                        </div>

                        {/* X Axis */}
                        <div className="flex justify-between mt-2 text-xs text-slate-400 font-medium">
                          <span>Seg</span>
                          <span>Ter</span>
                          <span>Qua</span>
                          <span>Qui</span>
                          <span>Sex</span>
                          <span>Sáb</span>
                          <span>Dom</span>
                        </div>
                      </div>

                      {/* Recent Transactions */}
                      <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm">
                        <h4 className="font-bold text-slate-900 dark:text-white mb-4">Transações Recentes</h4>
                        <div className="space-y-4">
                          {[
                            { name: 'Sofia Oliveira', status: 'Aprovado', value: 'R$ 197,00', time: '2 min atrás', img: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sofia' },
                            { name: 'Pedro Santos', status: 'Pendente', value: 'R$ 497,00', time: '15 min atrás', img: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Pedro' },
                            { name: 'Ana Costa', status: 'Aprovado', value: 'R$ 97,00', time: '32 min atrás', img: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ana' }
                          ].map((item, i) => (
                            <div key={i} className="flex items-center justify-between p-3 hover:bg-slate-50 dark:hover:bg-slate-700/50 rounded-xl transition-colors cursor-pointer group">
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-700 overflow-hidden">
                                  <img src={item.img} alt={item.name} className="w-full h-full" />
                                </div>
                                <div>
                                  <p className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">{item.name}</p>
                                  <p className="text-xs text-slate-500 dark:text-slate-400">{item.time}</p>
                                </div>
                              </div>
                              <div className="text-right">
                                <p className="text-sm font-bold text-slate-900 dark:text-white">{item.value}</p>
                                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${item.status === 'Aprovado'
                                  ? 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400'
                                  : 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400'
                                  }`}>
                                  {item.status}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Intelligent Features Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block py-2 px-4 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 text-xs font-bold uppercase tracking-wider mb-6">
              RECURSOS INTELIGENTES
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white leading-tight mb-6">
              Venda até 30% mais com as ferramentas certas
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Tenha acesso às soluções que grandes lojistas utilizam para aumentar ticket médio, recuperar carrinhos abandonados e vender mais, sem esforço adicional.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Card 1: Order Bump */}
            <div className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700 p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="h-48 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 rounded-2xl mb-8 flex items-center justify-center relative overflow-hidden">
                {/* Mockup Placeholder */}
                <div className="w-64 bg-white dark:bg-slate-800 rounded-xl shadow-lg p-4 border border-slate-100 dark:border-slate-700">
                  <div className="flex gap-3 mb-3">
                    <div className="w-12 h-12 bg-slate-100 dark:bg-slate-700 rounded-lg"></div>
                    <div className="flex-1 space-y-2">
                      <div className="h-3 w-20 bg-slate-100 dark:bg-slate-700 rounded"></div>
                      <div className="h-3 w-12 bg-slate-100 dark:bg-slate-700 rounded"></div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-100 dark:border-red-800">
                    <div className="w-4 h-4 border-2 border-red-500 rounded flex items-center justify-center">
                      <div className="w-2 h-2 bg-red-500 rounded-sm"></div>
                    </div>
                    <span className="text-xs font-bold text-red-600 dark:text-red-400">ADICIONAR OFERTA</span>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Aumente o ticket médio com Order Bump</h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                Aumente seu ticket médio oferecendo produtos complementares diretamente no checkout Bloopi.
              </p>
            </div>

            {/* Card 2: Upsell */}
            <div className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700 p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="h-48 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 rounded-2xl mb-8 flex items-center justify-center relative overflow-hidden">
                {/* Mockup Placeholder */}
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto text-green-600">
                    <CheckCircle size={24} />
                  </div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">COMPRA APROVADA!</div>
                  <div className="w-64 bg-white dark:bg-slate-800 rounded-xl shadow-lg p-3 border border-slate-100 dark:border-slate-700 mx-auto transform scale-90">
                    <div className="text-xs font-bold text-blue-600 mb-2">OFERTA ESPECIAL</div>
                    <div className="h-2 w-full bg-slate-100 dark:bg-slate-700 rounded mb-2"></div>
                    <div className="h-8 w-full bg-blue-600 rounded text-white text-xs font-bold flex items-center justify-center">COMPRAR AGORA</div>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Venda novamente após o pagamento</h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                Venda novamente após o pagamento, com apenas um clique, sem atrito, ainda na página de obrigado.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Card 3: Anti-Fraude */}
            <div className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700 p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="h-40 bg-slate-50 dark:bg-slate-900/50 rounded-2xl mb-6 flex items-center justify-center">
                <div className="relative">
                  <ShieldCheck size={48} className="text-slate-300 dark:text-slate-600" />
                  <div className="absolute -top-2 -right-2 bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">IA+</div>
                </div>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Evite fraudes com nosso Anti-Fraude IA+</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Nosso anti-fraude com inteligência artificial detecta riscos com precisão e mantém sua aprovação lá no alto.
              </p>
            </div>

            {/* Card 4: Tracking */}
            <div className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700 p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="h-40 bg-slate-50 dark:bg-slate-900/50 rounded-2xl mb-6 flex items-center justify-center">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600"><Activity size={16} /></div>
                  <div className="h-px w-8 bg-slate-300 border-t border-dashed"></div>
                  <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold text-xl">B</div>
                  <div className="h-px w-8 bg-slate-300 border-t border-dashed"></div>
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600"><BarChart3 size={16} /></div>
                </div>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Trackeamento avançado em cada etapa</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Monitore cada etapa da jornada do consumidor com dados claros, precisos e em tempo real.
              </p>
            </div>

            {/* Card 5: Recovery */}
            <div className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700 p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="h-40 bg-slate-50 dark:bg-slate-900/50 rounded-2xl mb-6 flex items-center justify-center">
                <div className="bg-white dark:bg-slate-800 p-3 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 flex items-center gap-3">
                  <div className="w-8 h-8 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center">
                    <Mail size={16} className="text-slate-500" />
                  </div>
                  <div className="space-y-1">
                    <div className="h-2 w-20 bg-slate-100 dark:bg-slate-700 rounded"></div>
                    <div className="h-2 w-12 bg-green-100 dark:bg-green-900/30 rounded"></div>
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Traga de volta quem quase comprou</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Recupere vendas com nosso e-mail inteligente de remarketing para quem abandonou o checkout.
              </p>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold py-4 px-8 rounded-full hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200">
              Criar conta grátis
            </button>
          </div>
        </div>
      </section>

      {/* Fast Payout Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Column - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            {/* Decorative Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-blue-100/50 dark:bg-blue-900/10 rounded-full blur-3xl -z-10"></div>

            {/* Phone Frame */}
            <div className="relative w-[300px] h-[600px] bg-slate-900 rounded-[3rem] p-4 shadow-2xl border-4 border-slate-800">
              {/* Screen Content */}
              <div className="w-full h-full bg-blue-600 rounded-[2.5rem] overflow-hidden relative flex flex-col">

                {/* Status Bar Mockup */}
                <div className="h-8 w-full flex justify-between items-center px-6 pt-2">
                  <div className="text-[10px] font-bold text-white">9:41</div>
                  <div className="flex gap-1">
                    <div className="w-3 h-3 bg-white rounded-full opacity-20"></div>
                    <div className="w-3 h-3 bg-white rounded-full opacity-20"></div>
                  </div>
                </div>

                {/* App Header */}
                <div className="px-6 pt-4 pb-6">
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm">
                        <img
                          src="/bloopi-logo-blue.png"
                          alt="Bloopi Logo"
                          className="w-5 h-5 object-contain"
                        />
                      </div>
                      <span className="font-bold text-white">Olá, Lucas</span>
                    </div>
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white font-bold text-xs">L</div>
                  </div>

                  <div className="space-y-1 mb-6">
                    <p className="text-xs font-medium text-blue-100 opacity-80">Saldo total em conta</p>
                    <div className="flex items-center gap-2">
                      <h3 className="text-3xl font-black text-white">R$ 10.342,00</h3>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="flex-1 bg-white/10 rounded-xl p-3 backdrop-blur-sm">
                      <p className="text-[10px] font-bold text-blue-100 mb-1">Saldo a receber</p>
                      <p className="text-sm font-bold text-white">R$ 5.588,90</p>
                    </div>
                    <div className="flex-1 bg-white text-blue-600 rounded-xl p-3 flex items-center justify-center font-bold text-sm shadow-lg shadow-black/10">
                      Solicitar saque
                    </div>
                  </div>
                </div>

                {/* Transactions List (White Card) */}
                <div className="flex-1 bg-white rounded-t-[2.5rem] p-6 space-y-6">
                  <h4 className="font-bold text-slate-900 text-sm">Últimas transações</h4>

                  <div className="space-y-4">
                    {[
                      { val: 'R$ 24.400,50', status: 'Pendente', color: 'bg-yellow-100 text-yellow-700' },
                      { val: 'R$ 35.000,00', status: 'Concluído', color: 'bg-green-100 text-green-700' },
                      { val: 'R$ 800.520,89', status: 'Concluído', color: 'bg-green-100 text-green-700' },
                      { val: 'R$ 15.080,00', status: 'Concluído', color: 'bg-green-100 text-green-700' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 font-bold text-xs">$</div>
                          <div className="space-y-1">
                            <div className="h-2 w-16 bg-slate-100 rounded"></div>
                            <div className="h-2 w-10 bg-slate-100 rounded"></div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className={`text-[8px] font-bold px-1.5 py-0.5 rounded-full inline-block mb-1 ${item.color}`}>{item.status}</div>
                          <p className="text-xs font-bold text-slate-900">{item.val}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating Notification - Bottom to Top Animation */}
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
                  className="absolute bottom-8 left-4 right-4 bg-slate-900 p-4 rounded-xl shadow-2xl border border-slate-800 z-20"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-slate-900 mb-0 shrink-0">
                      <DollarSign size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">Saque efetuado</p>
                      <p className="text-[10px] text-green-400 font-bold">Concluído agora mesmo</p>
                    </div>
                    <div className="ml-auto">
                      <p className="text-sm font-black text-white">R$ 35k</p>
                    </div>
                  </div>
                </motion.div>

              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-2 px-4 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">
              Bloopi Pay
            </span>

            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white leading-tight mb-6">
              Receba seu dinheiro em até 2 dias úteis
            </h2>

            <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
              Chega de esperar prazos longos ou burocracias. Tenha previsibilidade financeira, melhor fluxo de caixa e crescimento acelerado com saques rápidos, sem custo e descomplicados.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
              {/* Feature 1 */}
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-700 dark:text-blue-400">
                  <DollarSign size={20} />
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white">Saque gratuito, ágil e eficiente</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400">Saques realizados com agilidade em até <span className="font-bold text-slate-900 dark:text-white">2 dias úteis</span> sem taxas ocultas.</p>
              </div>

              {/* Feature 2 */}
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-700 dark:text-blue-400">
                  <ShieldCheck size={20} />
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white">Segurança total na Bloopi Pay</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400">Criptografia de ponta avançada e proteção total dos seus dados.</p>
              </div>

              {/* Feature 3 */}
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-700 dark:text-blue-400">
                  <Wallet size={20} />
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white">Controle total do seu dinheiro</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400">Elimine a burocracia e os prazos longos para acessar o que é seu.</p>
              </div>

              {/* Feature 4 */}
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-700 dark:text-blue-400">
                  <Users size={20} />
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white">Gerente de contas exclusivo</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400">Conte com um gerente exclusivo só seu, disponível em hora comercial.</p>
              </div>
            </div>

            <button className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold py-4 px-8 rounded-xl hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200">
              Fale com a equipe de vendas
            </button>
          </motion.div>

        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Column - Stats & CTA */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-2 px-4 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">
              VEM SER BLOOPI VOCÊ TAMBÉM!
            </span>

            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight mb-6">
              +2.000 e-commerces
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              já tem a Bloopi como Gateway e Checkout para pagamentos. Nossos clientes vendem mais e se preocupam menos com burocracia.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button className="h-14 px-8 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-lg shadow-lg hover:bg-slate-800 dark:hover:bg-slate-100 transition-all transform hover:-translate-y-1">
                Criar conta grátis
              </button>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-white p-2 rounded-lg shadow-sm">
                <img src="https://logodownload.org/wp-content/uploads/2014/06/reclame-aqui-logo-1.png" alt="Reclame Aqui" className="h-8" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase">Nota no Reclame Aqui</p>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-black text-slate-900 dark:text-white">9.1</span>
                  <div className="flex text-yellow-400">
                    {[1, 2, 3, 4, 5].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Testimonials Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl -z-10"></div>

            <div className="relative bg-white dark:bg-slate-800 rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-700 p-8 md:p-10 min-h-[400px] flex flex-col justify-between">
              <Quote size={48} className="text-blue-100 dark:text-blue-900/30 absolute top-8 right-8" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="mb-8"
                >
                  <div className="flex text-yellow-400 mb-6">
                    {[1, 2, 3, 4, 5].map((_, i) => (
                      <Star key={i} size={20} fill="currentColor" />
                    ))}
                  </div>

                  <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 font-medium leading-relaxed italic">
                    "{testimonials[currentTestimonial].text}"
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="flex items-center gap-4 border-t border-slate-100 dark:border-slate-700 pt-6 mt-auto">
                <div className="w-14 h-14 rounded-full bg-slate-200 overflow-hidden shrink-0">
                  <img src={testimonials[currentTestimonial].image} alt={testimonials[currentTestimonial].name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-lg">{testimonials[currentTestimonial].name}</h4>
                  <p className="text-blue-600 dark:text-blue-400 font-bold text-sm">{testimonials[currentTestimonial].stat} <span className="text-slate-500 dark:text-slate-400 font-normal">{testimonials[currentTestimonial].statLabel}</span></p>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex gap-2 absolute bottom-8 right-8 z-10">
                <button
                  onClick={prevTestimonial}
                  className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-blue-600 hover:text-white transition-colors"
                >
                  <ArrowLeft size={20} />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-blue-600 hover:text-white transition-colors"
                >
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </div >
  );
};

export default Home;
