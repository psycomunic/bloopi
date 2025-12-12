import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MessageCircle, Package, Plus, Minus, ChevronRight, HelpCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HelpCenter = () => {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "Quanto tempo é necessário para realizar um saque?",
      a: "Os saques na Bloopi são processados instantaneamente via PIX, 24 horas por dia, 7 dias por semana. Assim que você solicita, o dinheiro cai na sua conta cadastrada em poucos segundos."
    },
    {
      q: "Não possuo CNPJ, posso me inscrever?",
      a: "Sim! Aceitamos cadastros tanto de Pessoa Física (CPF) quanto de Pessoa Jurídica (CNPJ). O processo de verificação é simples e rápido para ambos."
    },
    {
      q: "Quanto pago de mensalidade ou adesão?",
      a: "Zero. A Bloopi não cobra taxa de adesão nem mensalidade. Você paga apenas uma pequena taxa sobre cada venda aprovada. Se não vender, não paga nada."
    },
    {
      q: "Posso ter mais de uma loja em uma conta?",
      a: "Com certeza. Nossa plataforma permite gerenciar múltiplos checkouts e lojas dentro do mesmo painel, facilitando a gestão do seu império de e-commerce."
    },
    {
      q: "Vou ter um gerente de conta?",
      a: "Clientes com volume de processamento acima de R$ 50k/mês têm acesso a um gerente de contas exclusivo para auxiliar em estratégias de crescimento e suporte prioritário."
    }
  ];

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      {/* Hero Section */}
      <section className="bg-primary py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="text-slate-900 font-bold tracking-wider text-sm uppercase mb-4 block">Central de Ajuda</span>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
            O que você precisa fazer no seu dia hoje?
          </h1>
          <p className="text-slate-800/80 text-lg max-w-2xl mx-auto mb-10">
            Se precisar de nossa ajuda, tiver dúvidas sobre como usar a plataforma ou estiver enfrentando dificuldades técnicas, não hesite em nos contatar.
          </p>

          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="text"
              placeholder="Busque por sua dúvida..."
              className="w-full h-14 pl-12 pr-4 rounded-xl border-0 shadow-xl text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-slate-900"
            />
          </div>
        </div>
      </section>

      {/* Action Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700 hover:border-primary/50 transition-all group cursor-pointer"
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Consultar meu pedido</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm">Consulte o status do seu pedido a qualquer hora.</p>
              </div>
              <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 group-hover:bg-primary group-hover:text-slate-900 transition-colors">
                <Package size={24} />
              </div>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900/50 rounded-xl p-4 mb-6">
              {/* Mockup lines */}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded bg-slate-200 dark:bg-slate-700"></div>
                <div className="flex-1 h-2 bg-slate-200 dark:bg-slate-700 rounded"></div>
                <div className="w-12 h-4 bg-green-100 text-green-600 text-[10px] font-bold flex items-center justify-center rounded">PAGO</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-slate-200 dark:bg-slate-700"></div>
                <div className="flex-1 h-2 bg-slate-200 dark:bg-slate-700 rounded"></div>
                <div className="w-12 h-4 bg-yellow-100 text-yellow-600 text-[10px] font-bold flex items-center justify-center rounded">ENVIO</div>
              </div>
            </div>
            <button className="w-full h-12 rounded-xl border border-slate-200 dark:border-slate-700 font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
              Consultar pedido
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            onClick={() => navigate('/contact')}
            className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700 hover:border-primary/50 transition-all group cursor-pointer"
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Falar conosco</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm">Não achou o que queria? Entre em contato.</p>
              </div>
              <div className="p-3 rounded-xl bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 group-hover:bg-primary group-hover:text-slate-900 transition-colors">
                <MessageCircle size={24} />
              </div>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900/50 rounded-xl p-4 mb-6 relative overflow-hidden">
              {/* Chat Mockup */}
              <div className="space-y-3">
                <div className="flex gap-2">
                  <div className="w-6 h-6 rounded-full bg-slate-300 dark:bg-slate-600"></div>
                  <div className="bg-white dark:bg-slate-700 p-2 rounded-lg rounded-tl-none text-xs shadow-sm w-3/4">
                    Olá! Como posso ajudar você hoje?
                  </div>
                </div>
                <div className="flex gap-2 flex-row-reverse">
                  <div className="w-6 h-6 rounded-full bg-primary/50"></div>
                  <div className="bg-primary/20 p-2 rounded-lg rounded-tr-none text-xs w-3/4">
                    Preciso de ajuda com meu cadastro.
                  </div>
                </div>
              </div>
            </div>
            <button className="w-full h-12 rounded-xl border border-slate-200 dark:border-slate-700 font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
              Entrar em contato
            </button>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block py-1 px-3 rounded-full bg-yellow-100 text-yellow-800 text-xs font-bold uppercase tracking-wider mb-4">Suporte</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4">
              Dúvidas comuns que recebemos com frequência
            </h2>
            <p className="text-slate-500 dark:text-slate-400">
              Esclarecendo suas dúvidas sobre a Bloopi e nossos serviços.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left font-bold text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
                >
                  <span className="text-lg">{faq.q}</span>
                  {openFaq === i ? <Minus size={20} className="text-primary" /> : <Plus size={20} className="text-slate-400" />}
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/50">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="inline-flex items-center gap-2 font-bold text-slate-900 dark:text-white hover:text-primary transition-colors">
              Falar com um atendente <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HelpCenter;
