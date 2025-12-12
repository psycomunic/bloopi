import React from 'react';
import { Search, Receipt, User, HelpCircle, Code2, ChevronDown, MessageCircle, ExternalLink, ArrowRight, CheckCircle, Clock } from 'lucide-react';

const HelpCenter = () => {
  const faqs = [
    {
      category: 'Sobre a Bloopi',
      icon: HelpCircle,
      questions: [
        { q: 'O que é a Bloopi e para quem ela serve?', a: 'A Bloopi é um gateway de pagamentos inteligente projetado para maximizar a conversão de vendas online. Atendemos desde pequenos empreendedores e dropshippers até grandes e-commerces que buscam estabilidade e tecnologia de ponta em suas transações.' },
        { q: 'Não possuo CNPJ, posso me inscrever?', a: 'Sim! A Bloopi aceita cadastros de Pessoa Física (CPF). Você terá acesso às mesmas ferramentas de checkout e gestão.' }
      ]
    },
    {
      category: 'Uso da Plataforma',
      icon: Receipt,
      questions: [
        { q: 'Quanto tempo é necessário para realizar um saque?', a: 'Na Bloopi, prezamos pela agilidade. Para contas verificadas, os saques solicitados até às 14h são processados no mesmo dia útil. Solicitações após este horário são liquidadas no próximo dia útil bancário.' },
        { q: 'Como acesso meus relatórios de vendas?', a: 'Todos os relatórios estão disponíveis no seu Dashboard. Acesse a aba "Transações" para ver em tempo real ou "Extrato Financeiro" para consolidar seus ganhos.' }
      ]
    },
    {
      category: 'Segurança e Taxas',
      icon: User, // Replacing with generic user/shield icon for this context as generic
      questions: [
        { q: 'Quais são as taxas de transação?', a: 'Trabalhamos com transparência total. Nossa taxa padrão é de 2.99% + R$ 0,50 por transação aprovada no cartão de crédito. Para PIX, a taxa é de 0.99%. Não cobramos mensalidade ou taxa de adesão.' },
        { q: 'Como funciona o sistema Antifraude?', a: 'Utilizamos uma tecnologia proprietária com Inteligência Artificial que analisa mais de 200 pontos de dados em cada transação em milissegundos.' }
      ]
    },
    {
      category: 'Integração e Suporte',
      icon: Code2,
      questions: [
        { q: 'Posso integrar com minha loja Shopify ou WooCommerce?', a: 'Perfeitamente. Temos plugins oficiais e documentados para Shopify, WooCommerce, VTEX, Nuvemshop e Magento.' },
        { q: 'Onde encontro a documentação da API?', a: 'Nossa documentação completa para desenvolvedores está disponível em docs.bloopi.com.br.' }
      ]
    }
  ];

  return (
    <div className="relative pt-32 pb-20">
      {/* Background Blobs */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute bg-blue-400 dark:bg-blue-600 w-96 h-96 rounded-full top-[-100px] left-[-100px] mix-blend-multiply dark:mix-blend-soft-light opacity-20 animate-pulse"></div>
        <div className="absolute bg-cyan-300 dark:bg-cyan-700 w-80 h-80 rounded-full top-[20%] right-[-50px] mix-blend-multiply dark:mix-blend-soft-light opacity-20"></div>
      </div>

      {/* Header */}
      <section className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <span className="inline-block py-1 px-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-primary dark:text-blue-300 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-200 dark:border-blue-800">
          Central de Ajuda
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
          Como podemos ajudar <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500">você hoje?</span>
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-10">
          Encontre respostas para suas dúvidas sobre pagamentos, integrações e segurança. Tudo o que você precisa para impulsionar suas vendas com a Bloopi.
        </p>
        
        <div className="relative max-w-xl mx-auto group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative flex items-center">
            <span className="absolute left-4 text-slate-400">
              <Search size={20} />
            </span>
            <input className="w-full py-4 pl-12 pr-4 text-slate-700 dark:text-white bg-white dark:bg-slate-800 rounded-xl border-0 ring-1 ring-slate-200 dark:ring-slate-700 shadow-lg focus:ring-2 focus:ring-primary placeholder:text-slate-400 transition-all" placeholder="Busque por 'taxas', 'checkout' ou 'integração'..." type="text"/>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass-panel p-8 rounded-2xl hover:shadow-xl hover:scale-[1.01] transition-all duration-300 border border-white/40 dark:border-slate-700/50 bg-white/60 dark:bg-slate-800/60">
            <div className="flex items-start justify-between mb-6">
              <div>
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/40 rounded-xl flex items-center justify-center text-primary mb-4">
                  <Receipt size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Consultar transações</h3>
                <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm leading-relaxed">
                  Verifique o status de pagamentos, chargebacks ou saques em tempo real através do nosso painel simplificado.
                </p>
              </div>
            </div>
            <div className="bg-white/50 dark:bg-slate-900/50 rounded-lg p-4 mb-6 border border-slate-100 dark:border-slate-700">
               <div className="flex items-center justify-between mb-3 pb-3 border-b border-slate-100 dark:border-slate-700">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                       <CheckCircle size={14} />
                    </div>
                    <div>
                      <div className="h-2 w-20 bg-slate-200 dark:bg-slate-600 rounded mb-1"></div>
                      <div className="h-1.5 w-12 bg-slate-100 dark:bg-slate-700 rounded"></div>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded">Pago</span>
               </div>
               <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center text-yellow-600 dark:text-yellow-400">
                       <Clock size={14} />
                    </div>
                    <div>
                      <div className="h-2 w-24 bg-slate-200 dark:bg-slate-600 rounded mb-1"></div>
                      <div className="h-1.5 w-16 bg-slate-100 dark:bg-slate-700 rounded"></div>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-yellow-600 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-900/20 px-2 py-1 rounded">Pendente</span>
               </div>
            </div>
            <a href="#" className="inline-flex items-center text-primary font-semibold text-sm hover:underline group">
               Acessar Dashboard <ArrowRight className="ml-1 transform group-hover:translate-x-1 transition-transform" size={16} />
            </a>
          </div>

          <div className="glass-panel p-8 rounded-2xl hover:shadow-xl hover:scale-[1.01] transition-all duration-300 border border-white/40 dark:border-slate-700/50 bg-white/60 dark:bg-slate-800/60">
            <div className="flex items-start justify-between mb-6">
              <div>
                <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900/40 rounded-xl flex items-center justify-center text-cyan-600 dark:text-cyan-400 mb-4">
                  <MessageCircle size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Suporte Humanizado</h3>
                <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm leading-relaxed">
                   Não encontrou o que precisava? Nossa equipe de especialistas está pronta para te atender via chat ou email.
                </p>
              </div>
            </div>
            <div className="bg-white/50 dark:bg-slate-900/50 rounded-lg p-4 mb-6 border border-slate-100 dark:border-slate-700 relative overflow-hidden h-[100px] flex flex-col justify-center">
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-cyan-400"></div>
               <div className="flex gap-3 mb-3">
                 <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-600 flex-shrink-0"></div>
                 <div className="bg-slate-100 dark:bg-slate-700 rounded-tr-lg rounded-br-lg rounded-bl-lg p-2 w-3/4">
                   <div className="h-2 w-full bg-slate-200 dark:bg-slate-600 rounded mb-1"></div>
                   <div className="h-2 w-2/3 bg-slate-200 dark:bg-slate-600 rounded"></div>
                 </div>
               </div>
               <div className="flex gap-3 flex-row-reverse">
                 <div className="w-8 h-8 rounded-full bg-primary flex-shrink-0 flex items-center justify-center text-white text-[10px] font-bold">B</div>
                 <div className="bg-blue-50 dark:bg-blue-900/30 rounded-tl-lg rounded-bl-lg rounded-br-lg p-2 w-3/4">
                   <div className="h-2 w-full bg-blue-200 dark:bg-blue-800 rounded mb-1"></div>
                 </div>
               </div>
            </div>
            <a href="#" className="inline-flex items-center text-primary font-semibold text-sm hover:underline group">
               Iniciar Chat <MessageCircle className="ml-1 transform group-hover:translate-x-1 transition-transform" size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" id="faq-section">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold tracking-wider text-sm uppercase">Dúvidas Frequentes</span>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-2">Perguntas comuns na Bloopi</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Sidebar */}
          <div className="hidden lg:block lg:col-span-4 xl:col-span-3 sticky top-32">
            <div className="glass-panel rounded-2xl p-4 border border-white/50 dark:border-slate-700/50 shadow-sm bg-white/60 dark:bg-slate-800/60">
              <nav className="space-y-1">
                {faqs.map((faq, i) => (
                  <a key={i} href={`#cat-${i}`} className={`flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl transition-colors ${i === 0 ? 'bg-blue-50 dark:bg-blue-900/30 text-primary' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700'}`}>
                    <faq.icon size={20} />
                    {faq.category}
                  </a>
                ))}
              </nav>
              <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-700 px-2">
                <p className="text-xs text-slate-500 mb-3">Precisa de ajuda urgente?</p>
                <a href="#" className="flex items-center justify-center w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 text-sm font-medium hover:bg-white dark:hover:bg-slate-700 transition-colors shadow-sm">
                   Entrar em contato
                </a>
              </div>
            </div>
          </div>

          {/* Questions */}
          <div className="lg:col-span-8 xl:col-span-9 space-y-12">
            {faqs.map((faq, idx) => (
              <div key={idx} id={`cat-${idx}`} className="scroll-mt-32">
                <h3 className="font-bold text-2xl text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-primary">
                    <faq.icon size={20} />
                  </div>
                  {faq.category}
                </h3>
                <div className="space-y-4">
                  {faq.questions.map((q, qIdx) => (
                    <details key={qIdx} className="group glass-panel rounded-xl overflow-hidden border border-white/50 dark:border-slate-700/50 transition-all duration-300 bg-white/40 dark:bg-slate-800/40">
                      <summary className="flex items-center justify-between p-6 cursor-pointer select-none">
                        <span className="text-lg font-medium text-slate-800 dark:text-slate-200">{q.q}</span>
                        <ChevronDown className="text-slate-400 group-open:rotate-180 transition-transform duration-300" size={20} />
                      </summary>
                      <div className="px-6 pb-6 text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-700/50 pt-4 animate-in slide-in-from-top-2">
                        <p>{q.a}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 mb-10 relative z-10">
        <div className="relative overflow-hidden rounded-3xl bg-primary shadow-2xl">
           <div className="relative z-10 px-6 py-16 md:py-20 text-center md:text-left flex flex-col md:flex-row items-center justify-between">
              <div className="mb-8 md:mb-0 md:pr-10 max-w-2xl text-white">
                 <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    Pronto para escalar suas vendas?
                 </h2>
                 <p className="mt-4 text-lg text-blue-100">
                    Junte-se a mais de 5.000 lojistas que usam a Bloopi para processar pagamentos com segurança e alta conversão.
                 </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
                 <button className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-primary bg-white hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl">
                    Criar conta grátis
                 </button>
                 <button className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-lg text-white hover:bg-white/10 transition-all">
                    Ver Documentação
                 </button>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default HelpCenter;
