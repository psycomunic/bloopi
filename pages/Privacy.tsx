import React, { useState } from 'react';
import { Shield, Lock, Eye, FileText, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Privacy = () => {
   const [activeSection, setActiveSection] = useState('intro');
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

   const sections = [
      { id: 'intro', title: 'Introdução', icon: FileText },
      { id: 'collection', title: 'Coleta de Dados', icon: Eye },
      { id: 'usage', title: 'Uso das Informações', icon: Shield },
      { id: 'security', title: 'Segurança', icon: Lock },
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
                     <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4 px-2">Navegação</h3>
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
                     <h1 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4">Política de Privacidade</h1>
                     <p className="text-slate-500 dark:text-slate-400">Última atualização: 12 de Dezembro de 2024</p>
                  </div>

                  <div className="flex flex-col gap-16">
                     {/* Introduction */}
                     <section id="intro" className="scroll-mt-28">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                           <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-primary">
                              <FileText size={24} />
                           </div>
                           1. Introdução
                        </h2>
                        <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 leading-relaxed">
                           <p className="mb-4">
                              A Bloopi Pagamentos S.A. ("Bloopi", "nós") valoriza a privacidade de seus usuários ("você"). Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações pessoais ao utilizar nossa plataforma, site e serviços.
                           </p>
                           <p>
                              Ao utilizar nossos serviços, você concorda com as práticas descritas nesta política. Se você não concordar com estes termos, por favor, não utilize nossos serviços. Estamos comprometidos em ser transparentes sobre nossas práticas de dados e em manter suas informações seguras.
                           </p>
                        </div>
                     </section>

                     {/* Data Collection */}
                     <section id="collection" className="scroll-mt-28">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                           <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-primary">
                              <Eye size={24} />
                           </div>
                           2. Coleta de Dados
                        </h2>
                        <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 leading-relaxed">
                           <p className="mb-4">Coletamos diferentes tipos de informações para fornecer e melhorar nossos serviços:</p>
                           <ul className="list-disc pl-6 space-y-2 mb-4">
                              <li><strong>Informações de Cadastro:</strong> Nome, e-mail, CPF/CNPJ, endereço e telefone fornecidos ao criar uma conta.</li>
                              <li><strong>Informações Financeiras:</strong> Dados bancários, histórico de transações e chaves Pix para processamento de pagamentos.</li>
                              <li><strong>Dados de Uso:</strong> Informações sobre como você interage com nossa plataforma, incluindo endereço IP, tipo de navegador, páginas visitadas e horários de acesso.</li>
                              <li><strong>Cookies e Tecnologias Similares:</strong> Utilizamos cookies para autenticação, preferências e análise de desempenho.</li>
                           </ul>
                        </div>
                     </section>

                     {/* Usage */}
                     <section id="usage" className="scroll-mt-28">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                           <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-primary">
                              <Shield size={24} />
                           </div>
                           3. Uso das Informações
                        </h2>
                        <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 leading-relaxed">
                           <p className="mb-4">Utilizamos seus dados para as seguintes finalidades:</p>
                           <ul className="list-disc pl-6 space-y-2">
                              <li>Processar transações e pagamentos com segurança.</li>
                              <li>Verificar sua identidade e prevenir fraudes (KYC/AML).</li>
                              <li>Enviar notificações sobre transações, atualizações de segurança e alterações nos termos.</li>
                              <li>Melhorar e personalizar nossa plataforma com base no seu uso.</li>
                              <li>Cumprir obrigações legais e regulatórias junto ao Banco Central do Brasil.</li>
                           </ul>
                        </div>
                     </section>

                     {/* Security */}
                     <section id="security" className="scroll-mt-28">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                           <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-primary">
                              <Lock size={24} />
                           </div>
                           4. Segurança
                        </h2>
                        <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 leading-relaxed">
                           <p className="mb-4">
                              A segurança dos seus dados é nossa prioridade máxima. Implementamos medidas técnicas e organizacionais robustas, incluindo:
                           </p>
                           <ul className="list-disc pl-6 space-y-2 mb-4">
                              <li>Criptografia de ponta a ponta (TLS 1.3) para todos os dados em trânsito.</li>
                              <li>Armazenamento seguro com criptografia AES-256.</li>
                              <li>Monitoramento contínuo de ameaças e testes de intrusão regulares.</li>
                              <li>Controles de acesso estritos e autenticação de dois fatores (2FA) para acesso administrativo.</li>
                           </ul>
                           <p>
                              Embora nos esforcemos para proteger suas informações, nenhum método de transmissão pela Internet ou armazenamento eletrônico é 100% seguro. Em caso de incidente de segurança, notificaremos você e as autoridades competentes conforme exigido por lei.
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

export default Privacy;
