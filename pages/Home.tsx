import React from 'react';
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
  RefreshCw
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

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
                Pagamentos com a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">maior conversão</span> do mercado
              </h1>

              <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Aumente seu faturamento com nossa tecnologia de checkout transparente, antifraude integrado e as melhores taxas do mercado.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="h-14 px-8 rounded-xl bg-green-500 hover:bg-green-400 text-slate-900 font-bold text-lg shadow-lg shadow-green-500/20 hover:scale-105 transition-all flex items-center justify-center gap-2">
                  Criar conta grátis
                  <ArrowRight size={20} />
                </button>
                <button className="h-14 px-8 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-lg backdrop-blur-md border border-white/10 transition-all">
                  Falar com vendas
                </button>
              </div>

              <div className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-blue-200/60 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-green-400" />
                  <span>Setup gratuito</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-green-400" />
                  <span>Sem mensalidade</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-green-400" />
                  <span>Aprovação imediata</span>
                </div>
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

      {/* Pricing Overlay Card */}
      <section className="relative z-20 -mt-48 px-4 sm:px-6 lg:px-8 pb-24">
        <div className="max-w-5xl mx-auto bg-white dark:bg-slate-800 rounded-3xl shadow-2xl overflow-hidden border border-slate-100 dark:border-slate-700">

          {/* Card Header */}
          <div className="p-8 md:p-12 border-b border-slate-100 dark:border-slate-700 flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-700 dark:text-slate-200">Quer aumentar suas vendas?</h2>
              <p className="text-slate-500 dark:text-slate-400">Faça sua aplicação agora mesmo</p>
            </div>
            <div className="flex gap-4">
              <button className="h-12 px-6 rounded-lg bg-slate-900 text-white font-bold hover:bg-slate-800 transition-colors">
                Criar conta grátis
              </button>
              <button className="h-12 px-6 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                Fale com a equipe de vendas
              </button>
            </div>
          </div>

          {/* Pricing Rows */}
          <div className="p-8 md:p-12 space-y-8">

            {/* Credit Card */}
            <div className="p-6 rounded-2xl border border-slate-100 dark:border-slate-700 hover:border-primary/30 transition-colors">
              <div className="flex flex-col md:flex-row justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Pagamentos com Cartão</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                    Aceite as principais bandeiras de cartão com 99% de aprovação para a maioria dos clientes.
                  </p>
                  <div className="mt-2">
                    <img src="/card-flags.png" alt="Bandeiras de cartão" className="h-8 object-contain" />
                  </div>
                </div>
                <div className="flex flex-col gap-4 min-w-[200px]">
                  <div>
                    <span className="text-xs text-slate-500 uppercase font-bold">A partir de</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-black text-slate-900 dark:text-white">3,19%</span>
                      <span className="text-sm font-bold text-slate-500">D+30</span>
                    </div>
                    <span className="text-xs text-slate-400">Recebimento em trinta dias</span>
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 uppercase font-bold">A partir de</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-black text-slate-900 dark:text-white">3,49%</span>
                      <span className="text-sm font-bold text-slate-500">D+2</span>
                    </div>
                    <span className="text-xs text-slate-400">Recebimento em dois dias</span>
                  </div>
                </div>
              </div>
            </div>

            {/* PIX */}
            <div className="p-6 rounded-2xl border border-slate-100 dark:border-slate-700 hover:border-primary/30 transition-colors">
              <div className="flex flex-col md:flex-row justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Pagamentos com PIX</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                    O PIX da Bloopi tem média de 86% de conversão de pagamento para nossos clientes.
                  </p>
                  <Zap className="text-primary" size={24} />
                </div>
                <div className="min-w-[200px]">
                  <span className="text-xs text-slate-500 uppercase font-bold">A partir de</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-black text-slate-900 dark:text-white">0,99%</span>
                    <span className="text-sm font-bold text-slate-500">D+2</span>
                  </div>
                  <span className="text-xs text-slate-400">Recebimento em dois dias</span>
                </div>
              </div>
            </div>

            {/* Boleto */}
            <div className="p-6 rounded-2xl border border-slate-100 dark:border-slate-700 hover:border-primary/30 transition-colors">
              <div className="flex flex-col md:flex-row justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Pagamento por Boleto</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                    Com a Bloopi, você personaliza os campos do boleto para otimizar a conversão e reduzir o abandono.
                  </p>
                  <Barcode className="text-slate-400" size={24} />
                </div>
                <div className="min-w-[200px]">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-black text-slate-900 dark:text-white">R$ 3,49</span>
                    <span className="text-sm font-bold text-slate-500">D+2</span>
                  </div>
                  <span className="text-xs text-slate-400">Recebimento em dois dias</span>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
              <div className="p-4 rounded-xl border border-slate-100 dark:border-slate-700">
                <h4 className="font-bold text-slate-900 dark:text-white mb-1">Checkout</h4>
                <p className="text-xs text-slate-500">A partir de</p>
                <p className="text-xl font-black text-slate-900 dark:text-white">1,40%</p>
              </div>
              <div className="p-4 rounded-xl border border-slate-100 dark:border-slate-700">
                <h4 className="font-bold text-slate-900 dark:text-white mb-1">Gateway</h4>
                <p className="text-xs text-slate-500">A partir de</p>
                <p className="text-xl font-black text-slate-900 dark:text-white">R$ 0,00</p>
              </div>
              <div className="p-4 rounded-xl border border-slate-100 dark:border-slate-700">
                <h4 className="font-bold text-slate-900 dark:text-white mb-1">Antifraude</h4>
                <p className="text-xs text-slate-500">A partir de</p>
                <p className="text-xl font-black text-slate-900 dark:text-white">R$ 0,99</p>
              </div>
              <div className="p-4 rounded-xl border border-slate-100 dark:border-slate-700">
                <h4 className="font-bold text-slate-900 dark:text-white mb-1">Assinatura</h4>
                <p className="text-xs text-slate-500">A partir de</p>
                <p className="text-xl font-black text-slate-900 dark:text-white">R$ 0,00</p>
              </div>
            </div>

            {/* Footer Row */}
            <div className="flex flex-col md:flex-row gap-6 pt-4">
              <div className="flex-1 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">Pagamentos com Cartão</h4>
                  <p className="text-xs text-slate-500 mb-3">Aceite as principais bandeiras</p>
                  <img src="/card-flags.png" alt="Bandeiras de cartão" className="h-6 object-contain" />
                </div>
                <div className="text-right">
                  <span className="text-2xl font-black text-slate-900 dark:text-white">5,99%</span>
                  <p className="text-[10px] text-slate-400 max-w-[150px] leading-tight mt-1">
                    Possibilidade de receber cartão em 02 dias, R$ 2,49 por transação aprovada.
                  </p>
                </div>
              </div>

              <div className="flex-1 p-6 rounded-2xl bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-100 dark:border-yellow-900/30 flex items-start gap-4">
                <div className="bg-white dark:bg-slate-800 p-2 rounded-lg shadow-sm">
                  <Smartphone size={24} className="text-slate-900 dark:text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2">Saques Gratuitos</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    Na Bloopi, você tem liberdade total para movimentar o que é seu. Todos os saques são 100% gratuitos, sem taxas escondidas.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* High Volume Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
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
                <div className="w-12 h-12 rounded-lg bg-slate-100 dark:bg-slate-700"></div>
                <div className="space-y-2">
                  <div className="h-3 w-32 bg-slate-100 dark:bg-slate-700 rounded"></div>
                  <div className="h-2 w-20 bg-slate-100 dark:bg-slate-700 rounded"></div>
                </div>
              </div>
              {/* Mockup Grid */}
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="space-y-2">
                    <div className="aspect-[3/4] rounded-lg bg-slate-100 dark:bg-slate-700 overflow-hidden relative group">
                      <img
                        src={`https://images.unsplash.com/photo-${1500000000000 + i}?auto=format&fit=crop&w=200&q=80`}
                        alt="Product"
                        className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-500"
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
      </section>
    </div>
  );
};

export default Home;
