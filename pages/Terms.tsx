import React from 'react';
import { FileText, Download, CheckCircle, List, ArrowRight, LifeBuoy } from 'lucide-react';

const Terms = () => {
  return (
    <div className="dark bg-[#0f172a] min-h-screen text-slate-200">
      <div className="fixed inset-0 pointer-events-none">
         <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-primary/10 to-transparent"></div>
         <div className="absolute top-20 right-[-100px] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 px-4 py-12 md:py-20 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center md:text-left">
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4 backdrop-blur-sm">
             <span className="size-2 rounded-full bg-primary animate-pulse"></span>
             <span className="text-primary text-xs font-bold uppercase tracking-wider">Legal</span>
           </div>
           <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-4 drop-shadow-lg">
               Termos de Uso
           </h1>
           <p className="text-slate-400 text-lg max-w-2xl font-normal leading-normal">
               Última atualização: <span className="text-primary font-medium">24 de Outubro de 2023</span>. Leia atentamente nossas regras e diretrizes para o uso do gateway.
           </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Sidebar */}
          <aside className="w-full lg:w-72 flex-shrink-0 lg:sticky lg:top-24">
             <div className="bg-[#1c232d]/80 backdrop-blur-md rounded-xl p-6 border border-white/5 shadow-2xl">
                <div className="mb-4 pb-4 border-b border-white/10">
                   <h3 className="text-white font-semibold flex items-center gap-2">
                     <List className="text-primary" size={20} />
                     Índice
                   </h3>
                </div>
                <nav className="flex flex-col space-y-1">
                  {['Aceitação', 'Serviços', 'Responsabilidades', 'Privacidade', 'Pagamentos', 'Cancelamento'].map((item, i) => (
                    <a key={item} href={`#section-${i+1}`} className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${i === 0 ? 'bg-primary/20 text-primary border border-primary/20' : 'text-slate-400 hover:bg-white/5 hover:text-white'}`}>
                       <span>{i+1}. {item}</span>
                       {i === 0 && <ArrowRight size={16} />}
                    </a>
                  ))}
                </nav>
                <div className="mt-8 p-4 rounded-lg bg-gradient-to-br from-primary/20 to-transparent border border-primary/10">
                  <p className="text-xs text-slate-300 mb-3">Precisa de ajuda com os termos?</p>
                  <button className="w-full py-2 px-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-xs font-bold text-white transition-colors flex items-center justify-center gap-2 group">
                    <LifeBuoy size={16} className="group-hover:scale-110 transition-transform" />
                    Falar com Suporte
                  </button>
                </div>
             </div>
          </aside>

          {/* Content */}
          <div className="flex-1 bg-[#1c232d]/60 backdrop-blur-md rounded-xl p-6 md:p-10 border border-white/5 shadow-2xl">
             <div className="mb-10">
                <p className="text-base font-normal leading-relaxed text-slate-300 pb-3">
                   Bem-vindo ao <strong className="text-white">Bloopi</strong>. Ao acessar ou usar nossa plataforma de gateway de pagamentos, você concorda em cumprir e estar vinculado a estes Termos de Uso. Nossa missão é facilitar transações seguras e rápidas, garantindo transparência para todos os usuários.
                </p>
             </div>

             <div className="flex flex-col gap-4">
                {[
                  { title: 'Aceitação dos Termos', content: 'Ao criar uma conta no Bloopi, você confirma que tem pelo menos 18 anos de idade e capacidade legal para celebrar contratos vinculativos.', open: true },
                  { title: 'Descrição dos Serviços', content: 'O Bloopi oferece serviços de gateway de pagamento que permitem a comerciantes aceitar pagamentos online via cartão de crédito, débito, Pix e boleto.', open: false },
                  { title: 'Responsabilidades do Usuário', content: 'Você é o único responsável por manter a confidencialidade de suas credenciais de acesso.', open: false },
                  { title: 'Política de Privacidade e Dados', content: 'A proteção dos seus dados é nossa prioridade. Coletamos informações conforme descrito em nossa Política de Privacidade.', open: false }
                ].map((section, idx) => (
                   <details key={idx} open={section.open} className="group border border-[#3b4754] rounded-lg bg-[#111418]/50 overflow-hidden">
                      <summary className="flex cursor-pointer items-center justify-between gap-4 p-4 hover:bg-white/5 transition-colors">
                         <h3 className="text-white text-sm font-medium flex items-center gap-3">
                           <span className={`flex items-center justify-center size-6 rounded-full text-xs font-bold ${section.open ? 'bg-primary/20 text-primary' : 'bg-slate-700 text-slate-400 border border-white/10'}`}>{idx + 1}</span>
                           {section.title}
                         </h3>
                      </summary>
                      <div className="px-4 pb-4 pt-0 text-slate-400 text-sm font-normal leading-relaxed space-y-4">
                         <div className="h-px w-full bg-[#3b4754] mb-4 opacity-50"></div>
                         <p>{section.content}</p>
                      </div>
                   </details>
                ))}
             </div>

             <div className="mt-12 pt-8 border-t border-white/10 flex flex-col items-center justify-center gap-4 text-center">
                <p className="text-slate-400 text-sm">Ao continuar, você concorda que leu e aceita todos os termos acima.</p>
                <div className="flex flex-wrap justify-center gap-4">
                   <button className="bg-white/5 hover:bg-white/10 text-white border border-white/10 font-bold py-2.5 px-6 rounded-lg transition-colors flex items-center gap-2">
                      <Download size={18} /> Baixar PDF
                   </button>
                   <button className="bg-primary hover:bg-blue-600 text-white font-bold py-2.5 px-8 rounded-lg shadow-lg shadow-blue-500/20 transition-all flex items-center gap-2">
                      <CheckCircle size={18} /> Eu concordo
                   </button>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
