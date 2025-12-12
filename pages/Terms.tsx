import React, { useState } from 'react';
import { FileCheck, CreditCard, AlertTriangle, Scale, Menu, X, Ban } from 'lucide-react';

const Terms = () => {
   const [activeSection, setActiveSection] = useState('acceptance');
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

   const sections = [
      { id: 'acceptance', title: 'Aceitação', icon: FileCheck },
      { id: 'usage', title: 'Uso do Serviço', icon: Scale },
      { id: 'payments', title: 'Pagamentos', icon: CreditCard },
      { id: 'cancellation', title: 'Cancelamento', icon: Ban },
      { id: 'liability', title: 'Responsabilidade', icon: AlertTriangle },
   ];

   const scrollToSection = (id: string) => {
      setActiveSection(id);
      setIsMobileMenuOpen(false);
      const element = document.getElementById(id);
      if (element) {
         element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
   };

   return (
      <div className="w-full min-h-screen bg-background-light dark:bg-background-dark pt-20 pb-10 px-4 md:px-10">
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">

            {/* Sidebar Navigation */}
            <div className="w-full md:w-64 shrink-0">
               <div className="sticky top-24">
                  <div className="md:hidden mb-4">
                     <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-slate-800 shadow-sm w-full font-bold text-slate-700 dark:text-white"
                     >
                        {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                        Navegação
                     </button>
                  </div>

                  <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:block glass-panel p-4 rounded-2xl bg-slate-900/5 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800`}>
                     <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4 px-2">Termos de Uso</h3>
                     <nav className="flex flex-col gap-1">
                        {sections.map((section) => (
                           <button
                              key={section.id}
                              onClick={() => scrollToSection(section.id)}
                              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${activeSection === section.id
                                    ? 'bg-primary text-white shadow-lg shadow-blue-500/30 translate-x-1'
                                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
                                 }`}
                           >
                              <section.icon size={18} />
                              {section.title}
                           </button>
                        ))}
                     </nav>
                  </div>
               </div>
            </div>

            {/* Content */}
            <div className="flex-1">
               <div className="glass-panel p-8 md:p-12 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl">
                  <div className="mb-10 border-b border-slate-100 dark:border-slate-800 pb-8">
                     <h1 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4">Termos de Serviço</h1>
                     <p className="text-slate-500 dark:text-slate-400">Última atualização: 12 de Dezembro de 2024</p>
                  </div>

                  <div className="flex flex-col gap-16">
                     {/* Acceptance */}
                     <section id="acceptance" className="scroll-mt-28">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                           <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-primary">
                              <FileCheck size={24} />
                           </div>
                           1. Aceitação dos Termos
                        </h2>
                        <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 leading-relaxed">
                           <p className="mb-4">
                              Ao acessar ou utilizar a plataforma da Bloopi Pagamentos S.A., você concorda em cumprir estes Termos de Serviço e todas as leis e regulamentos aplicáveis. Se você não concordar com algum destes termos, está proibido de usar ou acessar este site e nossos serviços.
                           </p>
                           <p>
                              Estes termos constituem um acordo legal vinculativo entre você e a Bloopi. Recomendamos que você leia este documento com atenção.
                           </p>
                        </div>
                     </section>

                     {/* Usage */}
                     <section id="usage" className="scroll-mt-28">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                           <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-primary">
                              <Scale size={24} />
                           </div>
                           2. Uso do Serviço
                        </h2>
                        <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 leading-relaxed">
                           <p className="mb-4">Você concorda em usar nossos serviços apenas para fins legais e de acordo com estes termos. É estritamente proibido:</p>
                           <ul className="list-disc pl-6 space-y-2 mb-4">
                              <li>Utilizar a plataforma para atividades ilícitas, fraudulentas ou lavagem de dinheiro.</li>
                              <li>Tentar violar a segurança ou integridade de nossa infraestrutura tecnológica.</li>
                              <li>Vender ou transferir sua conta para terceiros sem autorização prévia.</li>
                              <li>Utilizar engenharia reversa ou tentar copiar nosso software.</li>
                           </ul>
                        </div>
                     </section>

                     {/* Payments */}
                     <section id="payments" className="scroll-mt-28">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                           <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-primary">
                              <CreditCard size={24} />
                           </div>
                           3. Pagamentos e Taxas
                        </h2>
                        <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 leading-relaxed">
                           <p className="mb-4">
                              Nossas taxas são transparentes e estão descritas na página de Preços. Ao realizar transações, você concorda com as taxas vigentes no momento da operação.
                           </p>
                           <ul className="list-disc pl-6 space-y-2">
                              <li>As taxas são descontadas automaticamente do valor de cada transação.</li>
                              <li>Reservamo-nos o direito de alterar as taxas mediante aviso prévio de 30 dias.</li>
                              <li>Chargebacks e disputas podem incorrer em custos adicionais conforme tabela vigente.</li>
                           </ul>
                        </div>
                     </section>

                     {/* Cancellation */}
                     <section id="cancellation" className="scroll-mt-28">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                           <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-primary">
                              <Ban size={24} />
                           </div>
                           4. Cancelamento e Suspensão
                        </h2>
                        <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 leading-relaxed">
                           <p className="mb-4">
                              Você pode encerrar sua conta a qualquer momento através do painel de controle, desde que não haja pendências financeiras.
                           </p>
                           <p>
                              A Bloopi reserva-se o direito de suspender ou encerrar sua conta imediatamente em caso de violação destes termos, suspeita de fraude ou exigência legal, sem necessidade de aviso prévio.
                           </p>
                        </div>
                     </section>

                     {/* Liability */}
                     <section id="liability" className="scroll-mt-28">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                           <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-primary">
                              <AlertTriangle size={24} />
                           </div>
                           5. Limitação de Responsabilidade
                        </h2>
                        <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 leading-relaxed">
                           <p>
                              Em nenhuma circunstância a Bloopi será responsável por danos indiretos, incidentais, especiais ou consequentes decorrentes do uso ou incapacidade de uso de nossos serviços. Nossa responsabilidade total é limitada ao valor das taxas pagas por você nos últimos 3 meses.
                           </p>
                        </div>
                     </section>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Terms;
