import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
  Plus
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'checkout' | 'dashboard'>('checkout');
  const [activeTheme, setActiveTheme] = useState('brutus');

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
                  {/* Sidebar - Theme Selection */}
                  <div className="w-full md:w-72 border-b md:border-b-0 md:border-r border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 p-6 flex flex-col">
                    <p className="text-sm font-bold text-slate-900 dark:text-white mb-6 uppercase tracking-wider">
                      Selecione um Checkout:
                    </p>
                    <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-visible pb-4 md:pb-0 scrollbar-hide">
                      {[
                        { id: 'brutus', name: 'Brutus', color: 'bg-slate-900' },
                        { id: 'run', name: 'Run', color: 'bg-blue-600' },
                        { id: 'pink', name: 'Pink', color: 'bg-pink-500' },
                        { id: 'amaro', name: 'Amaro', color: 'bg-amber-700' },
                        { id: 'flexis', name: 'Flexis', color: 'bg-emerald-600' }
                      ].map((theme) => (
                        <button
                          key={theme.id}
                          onClick={() => setActiveTheme(theme.id)}
                          className={`relative group flex items-center gap-4 p-4 rounded-xl transition-all duration-300 text-left min-w-[160px] ${activeTheme === theme.id
                            ? 'bg-white dark:bg-slate-700 shadow-md ring-2 ring-green-500 ring-offset-2 dark:ring-offset-slate-800'
                            : 'hover:bg-white/50 dark:hover:bg-slate-700/50'
                            }`}
                        >
                          <div className={`w-8 h-8 rounded-lg ${theme.color} flex items-center justify-center text-white font-bold text-xs`}>
                            {theme.name[0]}
                          </div>
                          <span className={`font-bold ${activeTheme === theme.id ? 'text-slate-900 dark:text-white' : 'text-slate-500'}`}>
                            {theme.name}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Preview Area */}
                  <div className="flex-1 bg-slate-100 dark:bg-slate-900/50 p-8 md:p-12 flex items-center justify-center overflow-hidden relative">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

                    {/* Mockup Container */}
                    <div className="relative w-full max-w-md mx-auto bg-white dark:bg-slate-800 rounded-[2rem] shadow-2xl border-[8px] border-slate-900 overflow-hidden">
                      {/* Mockup Header */}
                      <div className="bg-slate-900 p-4 flex justify-between items-center">
                        <div className="w-16 h-1 bg-slate-700 rounded-full"></div>
                        <div className="w-2 h-2 rounded-full bg-slate-700"></div>
                      </div>

                      {/* Mockup Content - Simulating Checkout */}
                      <div className="p-6 space-y-6 bg-white dark:bg-slate-800">
                        {/* Theme Header */}
                        <div className="flex justify-center mb-8">
                          <div className={`h-8 w-32 rounded-lg ${activeTheme === 'brutus' ? 'bg-slate-900' :
                            activeTheme === 'run' ? 'bg-blue-600' :
                              activeTheme === 'pink' ? 'bg-pink-500' :
                                activeTheme === 'amaro' ? 'bg-amber-700' :
                                  'bg-emerald-600'
                            } opacity-90`}></div>
                        </div>

                        {/* Form Fields */}
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <div className="h-3 w-20 bg-slate-100 dark:bg-slate-700 rounded"></div>
                            <div className="h-10 w-full bg-slate-50 dark:bg-slate-700/50 rounded-lg border border-slate-200 dark:border-slate-700"></div>
                          </div>
                          <div className="space-y-2">
                            <div className="h-3 w-24 bg-slate-100 dark:bg-slate-700 rounded"></div>
                            <div className="h-10 w-full bg-slate-50 dark:bg-slate-700/50 rounded-lg border border-slate-200 dark:border-slate-700"></div>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="h-10 w-full bg-slate-50 dark:bg-slate-700/50 rounded-lg border border-slate-200 dark:border-slate-700"></div>
                            <div className="h-10 w-full bg-slate-50 dark:bg-slate-700/50 rounded-lg border border-slate-200 dark:border-slate-700"></div>
                          </div>
                        </div>

                        {/* Pay Button */}
                        <div className={`h-12 w-full rounded-xl mt-8 ${activeTheme === 'brutus' ? 'bg-slate-900' :
                          activeTheme === 'run' ? 'bg-blue-600' :
                            activeTheme === 'pink' ? 'bg-pink-500' :
                              activeTheme === 'amaro' ? 'bg-amber-700' :
                                'bg-emerald-600'
                          } flex items-center justify-center text-white font-bold shadow-lg`}>
                          Pagar Agora
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                /* Dashboard Preview */
                <div className="w-full h-full flex items-center justify-center p-8 md:p-12 bg-slate-50 dark:bg-slate-900/50">
                  <div className="w-full max-w-4xl bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-6 space-y-6">
                    <div className="flex justify-between items-center mb-8">
                      <div className="h-8 w-48 bg-slate-100 dark:bg-slate-700 rounded-lg"></div>
                      <div className="flex gap-2">
                        <div className="h-8 w-8 bg-slate-100 dark:bg-slate-700 rounded-full"></div>
                        <div className="h-8 w-8 bg-slate-100 dark:bg-slate-700 rounded-full"></div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="h-32 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-800 p-4">
                        <div className="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-800 mb-4"></div>
                        <div className="h-4 w-24 bg-blue-200 dark:bg-blue-800/50 rounded mb-2"></div>
                        <div className="h-8 w-32 bg-blue-200 dark:bg-blue-800/50 rounded"></div>
                      </div>
                      <div className="h-32 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-100 dark:border-green-800 p-4">
                        <div className="h-8 w-8 rounded-full bg-green-100 dark:bg-green-800 mb-4"></div>
                        <div className="h-4 w-24 bg-green-200 dark:bg-green-800/50 rounded mb-2"></div>
                        <div className="h-8 w-32 bg-green-200 dark:bg-green-800/50 rounded"></div>
                      </div>
                      <div className="h-32 bg-purple-50 dark:bg-purple-900/20 rounded-xl border border-purple-100 dark:border-purple-800 p-4">
                        <div className="h-8 w-8 rounded-full bg-purple-100 dark:bg-purple-800 mb-4"></div>
                        <div className="h-4 w-24 bg-purple-200 dark:bg-purple-800/50 rounded mb-2"></div>
                        <div className="h-8 w-32 bg-purple-200 dark:bg-purple-800/50 rounded"></div>
                      </div>
                    </div>
                    <div className="h-64 bg-slate-50 dark:bg-slate-700/20 rounded-xl border border-slate-100 dark:border-slate-700"></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Intelligent Features Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
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
            <div className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-slate-50 dark:bg-slate-900/50 rounded-2xl mb-8 flex items-center justify-center relative overflow-hidden">
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
            <div className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-slate-50 dark:bg-slate-900/50 rounded-2xl mb-8 flex items-center justify-center relative overflow-hidden">
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
            <div className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 p-8 shadow-sm hover:shadow-md transition-shadow">
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
            <div className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 p-8 shadow-sm hover:shadow-md transition-shadow">
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
            <div className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 p-8 shadow-sm hover:shadow-md transition-shadow">
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

      {/* High Volume Section */}
      < section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900" >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Column - Image Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Background decorative blob */}
            <div className="absolute -top-10 -left-10 w-full h-full bg-slate-50 dark:bg-slate-800 rounded-[3rem] -z-10 transform -rotate-3"></div>

            {/* Main UI Mockup */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-700 p-6 relative overflow-hidden">
              {/* Mockup Header */}
              <div className="flex items-center gap-4 mb-6 border-b border-slate-100 dark:border-slate-700 pb-4">
                <div className="w-12 h-12 rounded-full relative flex items-center justify-center overflow-hidden bg-slate-900 shadow-lg shadow-blue-500/30">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-400 to-cyan-300 animate-spin-slow opacity-80"></div>
                  <div className="absolute inset-[2px] bg-slate-900 rounded-full z-10 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/50 to-transparent"></div>
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-400/30 blur-md rounded-full animate-pulse"></div>
                  </div>
                  <div className="absolute inset-0 z-20 bg-gradient-to-br from-transparent via-transparent to-blue-500/20 rounded-full"></div>
                </div>
                <div className="space-y-2">
                  <div className="h-3 w-32 bg-slate-100 dark:bg-slate-700 rounded"></div>
                  <div className="h-2 w-20 bg-slate-100 dark:bg-slate-700 rounded"></div>
                </div>
              </div>
              {/* Mockup Grid */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  "/product-shoe.jpg",
                  "/product-2.jpg",
                  "/product-3.jpg",
                  "/product-4.jpg",
                  "/product-6.jpg",
                  "/product-7.jpg"
                ].map((src, i) => (
                  <div key={i} className="space-y-2">
                    <div className="aspect-[3/4] rounded-lg bg-slate-100 dark:bg-slate-700 overflow-hidden relative group">
                      <img
                        src={src}
                        alt="Fashion Product"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="h-2 w-16 bg-slate-100 dark:bg-slate-700 rounded mx-auto"></div>
                  </div>
                ))}
              </div>

              {/* Floating Revenue Card */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="absolute top-10 right-10 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 text-center z-20"
              >
                <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-3">
                  <span className="font-bold text-xl">$</span>
                </div>
                <div className="text-2xl font-black text-slate-900 dark:text-white mb-1">
                  +R$ 750.000,00
                </div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Faturamento Mensal
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-2 px-4 rounded-full bg-blue-50 dark:bg-blue-900/20 text-primary text-xs font-bold uppercase tracking-wider mb-6">
              Temos as melhores soluções para seu e-commerce
            </span>

            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight mb-6">
              Seu e-commerce fatura mais de R$200 mil por mês?
            </h2>

            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              Entre em contato com nosso time comercial e descubra as taxas especiais que temos reservadas para você.
            </p>

            <button className="h-14 px-8 rounded-xl bg-primary text-white font-bold text-lg shadow-lg shadow-primary/30 hover:bg-primary-dark hover:scale-105 transition-all flex items-center gap-2">
              Falar com o comercial
              <ArrowRight size={20} />
            </button>
          </motion.div>

        </div>
      </section >
    </div >
  );
};

export default Home;
