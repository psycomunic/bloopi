import React, { useState } from 'react';
import { Search, HelpCircle, FileText, MessageCircle, ChevronDown, ChevronUp, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const HelpCenter = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    { q: 'Como faço para criar uma conta na Bloopi?', a: 'O processo é 100% digital. Basta clicar em "Cadastre-se" no topo da página, preencher seus dados básicos e enviar os documentos da sua empresa. A aprovação geralmente ocorre em até 24 horas úteis.' },
    { q: 'Quais são as taxas para vendas no crédito?', a: 'Nossas taxas variam de acordo com o volume de vendas e o plano escolhido. Para o plano padrão, a taxa é de 3.99% + R$ 0,40 por transação no crédito à vista. Consulte nossa tabela completa na página de Preços.' },
    { q: 'A Bloopi oferece antecipação de recebíveis?', a: 'Sim! Oferecemos antecipação automática (D+1) ou pontual. Você pode configurar suas preferências diretamente no dashboard.' },
    { q: 'Como funciona a integração com minha loja virtual?', a: 'Possuímos plugins oficiais para WooCommerce, Magento, VTEX e Shopify. Além disso, nossa API RESTful permite integração com qualquer plataforma proprietária.' },
    { q: 'É seguro usar a Bloopi?', a: 'Segurança é nossa prioridade. Somos certificados PCI DSS Level 1, utilizamos criptografia de ponta a ponta e possuímos um sistema proprietário de antifraude com IA.' }
  ];

  return (
    <div className="w-full flex flex-col">
      {/* Hero Search */}
      <div className="relative w-full py-24 bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background-light dark:from-background-dark to-transparent"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white text-3xl md:text-5xl font-black mb-6"
          >
            Como podemos ajudar?
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="relative max-w-2xl mx-auto"
          >
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Busque por dúvidas, tutoriais ou termos..."
              className="w-full h-14 pl-12 pr-4 rounded-full bg-white text-slate-900 shadow-2xl focus:outline-none focus:ring-4 focus:ring-white/30 text-lg"
            />
          </motion.div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="w-full py-12 px-4 md:px-10 -mt-10 relative z-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: FileText, title: 'Documentação', desc: 'Guias técnicos e referência da API' },
            { icon: MessageCircle, title: 'Chat Online', desc: 'Fale com nosso suporte em tempo real' },
            { icon: HelpCircle, title: 'Tutoriais', desc: 'Passo a passo para configurar sua conta' }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 + 0.2 }}
              className="glass p-8 rounded-2xl text-center hover:-translate-y-1 transition-transform cursor-pointer"
            >
              <div className="size-14 rounded-full bg-blue-50 dark:bg-slate-800 mx-auto flex items-center justify-center text-primary mb-4">
                <item.icon size={28} />
              </div>
              <h3 className="text-slate-900 dark:text-white text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="w-full py-16 px-4 md:px-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-slate-900 dark:text-white text-3xl font-bold mb-10 text-center">Perguntas Frequentes</h2>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-white/50 dark:hover:bg-slate-800/50 transition-colors"
                >
                  <span className="font-bold text-slate-900 dark:text-white text-lg pr-4">{faq.q}</span>
                  {openFaq === i ? <ChevronUp className="text-primary shrink-0" /> : <ChevronDown className="text-slate-400 shrink-0" />}
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
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="w-full py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-slate-900 dark:text-white text-2xl font-bold mb-8">Ainda precisa de ajuda?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white dark:bg-slate-800 shadow-sm hover:shadow-md transition-all text-slate-900 dark:text-white font-bold border border-slate-200 dark:border-slate-700">
              <Phone size={20} className="text-primary" />
              0800 123 4567
            </button>
            <button className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white dark:bg-slate-800 shadow-sm hover:shadow-md transition-all text-slate-900 dark:text-white font-bold border border-slate-200 dark:border-slate-700">
              <Mail size={20} className="text-primary" />
              suporte@bloopi.com.br
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
