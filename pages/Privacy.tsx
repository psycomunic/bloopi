import React from 'react';
import { Shield, EyeOff, Lock, FileText, Download } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="dark bg-[#0f172a] min-h-screen text-slate-200">
      {/* Background Ambient Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute bg-primary w-[500px] h-[500px] top-[-100px] left-[-100px] rounded-full filter blur-[100px] opacity-20 animate-pulse"></div>
        <div className="absolute bg-blue-600 w-[600px] h-[600px] bottom-[-100px] right-[-100px] rounded-full filter blur-[100px] opacity-20"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center pt-12 pb-24 px-4 sm:px-6">
        {/* Hero */}
        <div className="w-full max-w-4xl text-center mb-16 space-y-6">
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-2">
             <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
             Atualizado em Outubro de 2023
           </div>
           <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.1]">
             Política de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-primary">Privacidade</span>
           </h1>
           <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
             Sua privacidade é nossa prioridade. Entenda de forma clara e transparente como protegemos seus dados enquanto você foca em crescer seu negócio.
           </p>
           <div className="flex justify-center gap-4 pt-4">
             <button className="bg-slate-800/80 hover:bg-slate-700 transition-all text-white px-6 py-3 rounded-xl font-medium flex items-center gap-2 text-sm border border-slate-700 backdrop-blur-md">
               <Download size={20} /> Baixar PDF Completo
             </button>
           </div>
        </div>

        {/* Layout */}
        <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-8 items-start">
           
           {/* Sidebar */}
           <aside className="hidden lg:block w-64 sticky top-24 shrink-0">
             <div className="bg-[#1e293b]/70 backdrop-blur-md rounded-2xl p-6 border border-white/5 shadow-lg">
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">Navegação</h3>
                <ul className="space-y-1">
                  {[
                    { label: 'Introdução', icon: FileText, active: true },
                    { label: 'Coleta de Dados', icon: Shield, active: false },
                    { label: 'Uso das Informações', icon: EyeOff, active: false },
                    { label: 'Segurança', icon: Lock, active: false },
                  ].map((item, i) => (
                    <li key={i}>
                      <a href={`#section-${i}`} className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${item.active ? 'bg-primary/10 text-primary border-l-2 border-primary' : 'text-slate-400 hover:text-white hover:bg-slate-800/50'}`}>
                        <item.icon size={18} />
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
             </div>
           </aside>

           {/* Content */}
           <div className="flex-1 space-y-6 w-full">
              {/* Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                 <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-md p-5 rounded-xl border border-white/5">
                    <div className="flex items-start justify-between mb-2">
                       <Shield className="text-primary" size={32} />
                       <span className="text-xs font-bold text-slate-500 border border-slate-700 rounded px-2 py-0.5">LGPD Compliant</span>
                    </div>
                    <h3 className="text-white font-bold text-lg">Proteção Total</h3>
                    <p className="text-slate-400 text-sm mt-1">Criptografia de ponta a ponta em todas as transações.</p>
                 </div>
                 <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-md p-5 rounded-xl border border-white/5">
                    <div className="flex items-start justify-between mb-2">
                       <EyeOff className="text-green-400" size={32} />
                    </div>
                    <h3 className="text-white font-bold text-lg">Dados Anonimizados</h3>
                    <p className="text-slate-400 text-sm mt-1">Seus dados sensíveis nunca são expostos ou vendidos.</p>
                 </div>
              </div>

              {/* Text Content */}
              <div className="bg-[#1e293b]/60 backdrop-blur-md rounded-2xl p-6 sm:p-8 space-y-8 border border-white/5 shadow-2xl">
                 <div className="border-b border-slate-700/50 pb-8">
                    <h2 className="text-2xl font-bold text-white mb-4">1. Introdução e Escopo</h2>
                    <p className="text-slate-300 leading-relaxed">
                       Bem-vindo à Bloopi. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações pessoais ao utilizar nosso gateway de pagamentos. Estamos comprometidos em manter a transparência e a segurança em todas as nossas operações, em conformidade com a Lei Geral de Proteção de Dados (LGPD) e outras regulamentações aplicáveis.
                    </p>
                 </div>

                 <div className="space-y-4">
                    <h2 className="text-xl font-bold text-white flex items-center gap-2">
                       <span className="size-8 rounded-full bg-slate-800 flex items-center justify-center text-sm text-primary">2</span>
                       Coleta de Dados
                    </h2>
                    <div className="grid gap-3">
                       {['Dados de Identificação Pessoal', 'Dados Financeiros e de Transações', 'Dados de Navegação e Dispositivo'].map((title, i) => (
                          <details key={i} className="group bg-slate-800/30 rounded-lg border border-slate-700/50 open:bg-slate-800/60 transition-colors">
                             <summary className="flex cursor-pointer items-center justify-between p-4 font-medium text-sm text-white">
                                {title}
                             </summary>
                             <div className="px-4 pb-4 text-sm text-slate-400 leading-relaxed border-t border-slate-700/30 pt-3 mt-1">
                                Coletamos informações necessárias para a prestação dos serviços com segurança.
                             </div>
                          </details>
                       ))}
                    </div>
                 </div>

                 <div className="glass-panel p-8 rounded-2xl border border-blue-500/20 text-center relative overflow-hidden bg-gradient-to-b from-slate-800 to-slate-900">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-transparent pointer-events-none"></div>
                    <h2 className="text-2xl font-bold text-white mb-3 relative z-10">Ainda tem dúvidas sobre seus dados?</h2>
                    <p className="text-slate-300 max-w-xl mx-auto mb-6 text-sm relative z-10">
                       Nossa equipe especializada e nosso DPO (Data Protection Officer) estão à disposição para esclarecer qualquer ponto desta política.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 relative z-10">
                       <button className="bg-primary hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-lg shadow-blue-500/30">
                          Contatar DPO
                       </button>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
