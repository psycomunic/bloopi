import React from 'react';
import { Briefcase, MapPin, DollarSign, Clock, CheckCircle, ArrowRight, Heart, Zap, Coffee } from 'lucide-react';
import { motion } from 'framer-motion';

const Careers = () => {
  return (
    <div className="w-full flex flex-col">
      {/* Hero */}
      <div className="relative w-full py-20 bg-background-light dark:bg-background-dark overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6">
              Junte-se ao time
            </span>
            <h1 className="text-slate-900 dark:text-white text-4xl md:text-6xl font-black leading-tight tracking-tight mb-6">
              Construa o futuro dos <br /> <span className="text-primary">pagamentos digitais</span>
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
              Estamos procurando mentes brilhantes que queiram desafiar o status quo e criar produtos que impactam milhões de pessoas.
            </p>
            <button className="h-12 px-8 rounded-full bg-primary hover:bg-blue-600 text-white font-bold shadow-lg shadow-blue-500/30 transition-all hover:-translate-y-1">
              Ver vagas abertas
            </button>
          </motion.div>
        </div>
      </div>

      {/* Benefits */}
      <div className="w-full py-20 px-4 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-slate-900 dark:text-white text-3xl font-bold mb-4">Por que a Bloopi?</h2>
            <p className="text-slate-600 dark:text-slate-400">Cuidamos de quem constrói o nosso sonho.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Heart, title: 'Saúde & Bem-estar', desc: 'Plano de saúde e odontológico premium, além de auxílio academia e terapia.' },
              { icon: Zap, title: 'Autonomia', desc: 'Horário flexível e trabalho 100% remoto ou híbrido. Você escolhe onde produz melhor.' },
              { icon: DollarSign, title: 'Remuneração Competitiva', desc: 'Salários acima do mercado, PLR semestral e stock options para todos.' },
              { icon: Coffee, title: 'Benefícios Flexíveis', desc: 'Cartão Caju com saldo generoso para alimentação, cultura e mobilidade.' },
              { icon: Clock, title: 'Work-Life Balance', desc: 'Respeitamos seu tempo. Sem reuniões desnecessárias e incentivo a férias.' },
              { icon: CheckCircle, title: 'Crescimento', desc: 'Orçamento anual para cursos, livros e eventos. Queremos ver você evoluir.' }
            ].map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass p-8 rounded-2xl hover:bg-white/60 dark:hover:bg-slate-800/60 transition-colors"
              >
                <div className="size-12 rounded-xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white mb-6 shadow-lg shadow-blue-500/20">
                  <benefit.icon size={24} />
                </div>
                <h3 className="text-slate-900 dark:text-white text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Open Positions */}
      <div className="w-full py-20 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm px-4 md:px-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-slate-900 dark:text-white text-3xl font-bold mb-10 text-center">Vagas Abertas</h2>

          <div className="flex flex-col gap-4">
            {[
              { role: 'Senior Frontend Engineer', team: 'Engenharia', type: 'Remoto', location: 'Brasil' },
              { role: 'Product Designer', team: 'Produto', type: 'Híbrido', location: 'São Paulo' },
              { role: 'Backend Developer (Go)', team: 'Engenharia', type: 'Remoto', location: 'Brasil' },
              { role: 'Customer Success Manager', team: 'CX', type: 'Remoto', location: 'Brasil' },
              { role: 'Tech Recruiter', team: 'People', type: 'Híbrido', location: 'São Paulo' }
            ].map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass p-6 rounded-xl flex flex-col md:flex-row items-center justify-between gap-4 group hover:border-primary/50 transition-colors cursor-pointer"
              >
                <div className="flex flex-col gap-1 text-center md:text-left">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">{job.role}</h3>
                  <div className="flex items-center justify-center md:justify-start gap-4 text-sm text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1"><Briefcase size={14} /> {job.team}</span>
                    <span className="flex items-center gap-1"><Clock size={14} /> {job.type}</span>
                    <span className="flex items-center gap-1"><MapPin size={14} /> {job.location}</span>
                  </div>
                </div>
                <button className="px-6 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-bold text-sm group-hover:bg-primary group-hover:text-white transition-all">
                  Aplicar
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
