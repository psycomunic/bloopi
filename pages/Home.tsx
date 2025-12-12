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
  Lock
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: "Aumente as vendas",
      desc: "Checkout transparente que converte até 30% mais.",
      icon: TrendingUp
    },
    {
      title: "Recuperação de carrinhos",
      desc: "E-mails automáticos para recuperar vendas perdidas.",
      icon: ShoppingCart
    },
    {
      title: "Antifraude integrado",
      desc: "Segurança máxima com análise em tempo real.",
      icon: ShieldCheck
    }
  ];

  const rates = [
    {
      title: "Pagamentos com Cartão",
      rate: "3,19%",
      detail: "D+30",
      desc: "Aceite as principais bandeiras com 99% de aprovação.",
      icons: ["visa", "master", "elo", "amex"]
    },
    {
      title: "Pagamentos com PIX",
      rate: "0,99%",
      detail: "D+2",
      desc: "Recebimento instantâneo e baixa taxa de conversão.",
      icon: Zap
    },
    {
      title: "Pagamento por Boleto",
      rate: "R$ 3,49",
      detail: "D+2",
      desc: "Personalize seu boleto para otimizar a conversão.",
      icon: FileText
    }
  ];

  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-primary/10 dark:bg-slate-900 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/20 rounded-l-full blur-3xl opacity-30 transform translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-yellow-200/20 dark:bg-yellow-900/20 rounded-r-full blur-3xl opacity-30 transform -translate-x-1/3"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-primary/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span className="text-sm font-bold text-slate-800 dark:text-slate-200">A plataforma completa para seu negócio</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white leading-tight mb-6">
                Aumente as vendas do seu <span className="text-primary">e-commerce</span>
              </h1>

              <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed max-w-lg">
                Através da melhor experiência de pagamentos online. O checkout não é o fim, é o começo do seu crescimento.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="h-14 px-8 rounded-xl bg-primary text-slate-900 font-black text-lg shadow-xl shadow-primary/30 hover:scale-105 hover:shadow-2xl hover:shadow-primary/40 transition-all flex items-center justify-center gap-2">
                  Criar conta agora
                  <ArrowRight size={20} />
                </button>
                <button className="h-14 px-8 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-white font-bold text-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">
                  Falar com vendas
                </button>
              </div>

              <div className="mt-12 flex items-center gap-8 text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={20} className="text-primary" />
                  <span className="font-medium">Setup grátis</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={20} className="text-primary" />
                  <span className="font-medium">Sem mensalidade</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 glass-panel p-6 rounded-3xl shadow-2xl bg-white/40 dark:bg-slate-900/40 border border-white/50 dark:border-slate-700/50 backdrop-blur-xl">
                {/* Mockup of Checkout UI */}
                <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-inner p-6">
                  <div className="flex justify-between items-center mb-6 border-b border-slate-100 dark:border-slate-700 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center">
                        <ShoppingCart size={20} className="text-slate-400" />
                      </div>
                      <div>
                        <div className="h-4 w-24 bg-slate-200 dark:bg-slate-600 rounded mb-1"></div>
                        <div className="h-3 w-16 bg-slate-100 dark:bg-slate-700 rounded"></div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-slate-400">Total</div>
                      <div className="text-xl font-bold text-slate-900 dark:text-white">R$ 197,90</div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 rounded-xl border-2 border-primary bg-primary/5 flex justify-between items-center cursor-pointer">
                      <div className="flex items-center gap-3">
                        <CreditCard size={20} className="text-primary" />
                        <span className="font-bold text-slate-900 dark:text-white">Cartão de Crédito</span>
                      </div>
                      <div className="w-5 h-5 rounded-full border-2 border-primary flex items-center justify-center">
                        <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>
                      </div>
                    </div>
                    <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 flex justify-between items-center opacity-60">
                      <div className="flex items-center gap-3">
                        <Zap size={20} className="text-slate-400" />
                        <span className="font-medium text-slate-700 dark:text-slate-300">PIX</span>
                      </div>
                      <div className="w-5 h-5 rounded-full border-2 border-slate-300"></div>
                    </div>
                  </div>

                  <button className="w-full mt-6 h-12 rounded-xl bg-green-500 text-white font-bold text-lg shadow-lg shadow-green-500/20">
                    Pagar Agora
                  </button>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-10 glass p-4 rounded-2xl shadow-xl flex items-center gap-3 z-20"
              >
                <div className="p-2 rounded-lg bg-green-100 text-green-600">
                  <TrendingUp size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold">Conversão</p>
                  <p className="text-lg font-black text-slate-900">+32%</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-10 -left-10 glass p-4 rounded-2xl shadow-xl flex items-center gap-3 z-20"
              >
                <div className="p-2 rounded-lg bg-blue-100 text-blue-600">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold">Segurança</p>
                  <p className="text-lg font-black text-slate-900">100%</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-bold tracking-wider uppercase text-sm">Por que Bloopi?</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mt-4 mb-6">
              Venda até 30% mais com as ferramentas certas
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Nossa tecnologia foi projetada para eliminar fricção e maximizar sua taxa de aprovação.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 hover:border-primary/50 transition-colors group"
              >
                <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-800 shadow-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{feature.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Rates Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-6">
                Taxas transparentes para impulsionar seu negócio
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
                Sem letras miúdas. Você sabe exatamente quanto vai pagar e quando vai receber.
              </p>

              <div className="space-y-6">
                {rates.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-lg">{item.title}</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{item.desc}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-3xl font-black text-slate-900 dark:text-white">{item.rate}</div>
                      <div className="text-xs font-bold text-primary uppercase tracking-wide mt-1">{item.detail}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full opacity-30"></div>
              <div className="relative bg-slate-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl overflow-hidden">
                <div className="absolute top-0 right-0 p-32 bg-primary/10 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2"></div>

                <h3 className="text-2xl font-bold mb-2">Saques Gratuitos</h3>
                <p className="text-slate-300 mb-8">Liberdade total para movimentar seu dinheiro.</p>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 mb-8">
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-sm text-slate-300">Saldo Disponível</span>
                    <Zap size={20} className="text-primary" />
                  </div>
                  <div className="text-4xl font-black text-white">R$ 14.250,00</div>
                </div>

                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <div className="p-1 rounded-full bg-green-500/20 text-green-400">
                      <CheckCircle2 size={16} />
                    </div>
                    <span className="font-medium">Transferência instantânea</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="p-1 rounded-full bg-green-500/20 text-green-400">
                      <CheckCircle2 size={16} />
                    </div>
                    <span className="font-medium">Sem taxa de saque</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="p-1 rounded-full bg-green-500/20 text-green-400">
                      <CheckCircle2 size={16} />
                    </div>
                    <span className="font-medium">Aprovação automática</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-500 font-medium mb-8">Confiado por mais de 2.000 e-commerces em todo o Brasil</p>
          <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Placeholders for logos */}
            <div className="h-8 w-32 bg-slate-200 dark:bg-slate-700 rounded"></div>
            <div className="h-8 w-32 bg-slate-200 dark:bg-slate-700 rounded"></div>
            <div className="h-8 w-32 bg-slate-200 dark:bg-slate-700 rounded"></div>
            <div className="h-8 w-32 bg-slate-200 dark:bg-slate-700 rounded"></div>
            <div className="h-8 w-32 bg-slate-200 dark:bg-slate-700 rounded"></div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
            Pronto para escalar suas vendas?
          </h2>
          <p className="text-xl text-slate-800/80 mb-10 max-w-2xl mx-auto">
            Junte-se a milhares de empreendedores que escolheram a Bloopi para processar seus pagamentos.
          </p>
          <button className="h-16 px-10 rounded-xl bg-slate-900 text-white font-black text-xl shadow-2xl hover:scale-105 transition-transform flex items-center justify-center gap-3 mx-auto">
            Criar conta grátis
            <ArrowRight size={24} />
          </button>
        </div>
      </section>
    </div>
  );
};

// Helper component for icons (since I used strings in the array)
const FileText = ({ size, className }: { size?: number, className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size || 24}
    height={size || 24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" x2="8" y1="13" y2="13" />
    <line x1="16" x2="8" y1="17" y2="17" />
    <line x1="10" x2="8" y1="9" y2="9" />
  </svg>
);

export default Home;
