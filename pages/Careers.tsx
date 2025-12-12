import React from 'react';
import { Search, Filter, ArrowRight, Eye, Zap, Heart, Code, MapPin, Clock, Palette, Shield, Laptop, Apple, Briefcase, GraduationCap } from 'lucide-react';

const Careers = () => {
  return (
    <div className="w-full flex justify-center py-8 px-4 md:px-10 lg:px-40">
      <div className="max-w-[1024px] w-full flex flex-col gap-16">
        
        {/* Hero */}
        <section className="mt-8">
          <div className="relative overflow-hidden rounded-3xl glass-panel p-2 shadow-xl border border-white/50 dark:border-slate-700 bg-white/30 dark:bg-slate-800/30">
            <div className="flex min-h-[520px] flex-col gap-8 rounded-2xl bg-cover bg-center bg-no-repeat p-8 items-center justify-center text-center relative group" style={{backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.4), rgba(15, 23, 42, 0.7)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCzrYv-VKxgekRujebI8LlUP8WcIF8l_I05mXtripKlxPw9TbNk-s3PedjLjnolKzbAA625VagVqfpDyPq7CFyHZXDmMSuyPxgMi83OKSvx3C4W16zImEZkp46u7SB0liluCUlrrgUgkZyy94TlokQbRZrVqNg8nt_nZ5sLfGnZ6PE_L1Cm2NDGgGaHRziSPhkpZY2JckkE3sUNuiEsx_YT2mss-LP5i2-iPJ42NOFwwb-M8CB0evV0eCm1td05zTz4ulQ5VWNfjWoK")`}}>
              <div className="relative z-10 flex flex-col gap-4 max-w-2xl">
                <span className="inline-block mx-auto px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-bold tracking-wider border border-white/20 uppercase">
                  Carreiras Bloopi
                </span>
                <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tight drop-shadow-sm">
                  Construa o futuro dos pagamentos
                </h1>
                <p className="text-slate-100 text-lg md:text-xl font-medium leading-relaxed max-w-lg mx-auto drop-shadow-sm">
                  Junte-se à revolução financeira. Buscamos mentes inovadoras para criar soluções modernas, rápidas e transparentes.
                </p>
              </div>
              <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full justify-center mt-4">
                <button className="flex items-center justify-center rounded-xl h-12 px-8 bg-primary text-white text-base font-bold shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:bg-blue-600 transition-all transform hover:-translate-y-0.5">
                  Ver Vagas Abertas
                </button>
                <button className="flex items-center justify-center rounded-xl h-12 px-8 bg-white/10 backdrop-blur-md border border-white/30 text-white text-base font-bold hover:bg-white/20 transition-all">
                  Conheça nossa cultura
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Culture */}
        <section className="flex flex-col gap-10 py-10">
          <div className="flex flex-col gap-4 text-center items-center">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 dark:text-white">
              Nossa Cultura & Valores
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl">
              Transparência, inovação e velocidade são os pilares que sustentam nosso crescimento e nossa tecnologia.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Eye, title: 'Transparência Radical', desc: 'Comunicação aberta e honesta em todos os níveis. Acreditamos que a verdade nos move mais rápido.' },
              { icon: Zap, title: 'Agilidade', desc: 'Entregas rápidas e iterações constantes. Erramos rápido para aprender ainda mais rápido.' },
              { icon: Heart, title: 'Obsessão pelo Cliente', desc: 'O cliente está no centro de todas as decisões. Construímos produtos que resolvem problemas reais.' }
            ].map((item, i) => (
              <div key={i} className="glass-panel flex flex-col gap-4 rounded-2xl p-6 bg-white/60 dark:bg-slate-800/60 border border-white/50 dark:border-slate-700">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <item.icon size={24} />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{item.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="glass-panel rounded-3xl p-8 md:p-10 shadow-lg bg-white/70 dark:bg-slate-800/70 border border-white/50 dark:border-slate-700">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              Benefícios de ser um Blooper
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Trabalho Remoto', desc: 'Trabalhe de onde se sentir mais produtivo.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAOmVQ33sRjF0_j3jJDeYY8MeuKi9j0kmJwrA2Ao8v0_ajGE4IjcTOqbJKQ83yROawvzxx7ZJMrw7q67lL4EMdRkix3NonhykiC0gbAwQZKrd2RrwD1lDogVD_lL2N2fd0VUS4cQCutdoYD9h3GR0ihXc57IU51tPYKf_meBJLiLGPn8qp-c3zRrBNwViuIztvmi07klvawXgrJccg14PeG12Z3UntymvpJiJjjF5PqjJkJwfXUv6FbM0gLiRV5oz3DXG0K_j1wk4bC', icon: Laptop },
              { title: 'Saúde Integral', desc: 'Planos de saúde e auxílio bem-estar.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAvDteCiU9-2BrTiPPfY3CG-cQN2iZJLrbUl4Kl37kblOaAZsTI7_m6EFY8ssAtNtjto09bmmsvlSUOMvt8D8CXiaKky1Iog4WMsiTctGyUzP5uJ-XJI0yo7rwuKliuNOiG9L-tq2KnfH2350_HBi2HcJJuJRdQw8ImfDSz62fSNzTeCGsF79yK6sLXV0zyWh5F572Go2y5tRGsoNY9g0z3DxcKFnHmsYk2YH79YcaOGnzZ8KKeKlhIx91cLnofU2sT5vwgxHSf2TYm', icon: Apple },
              { title: 'Stock Options', desc: 'Seja sócio do nosso sucesso.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDs-PNaY2S6Xrm1ntav9MunXz30HY_iFwPuJXcWHDn7RZdWdUsiPr9FQJIEjJDGfVCXdg6Iknhnz0TmqYtE3I5NE6DmC9lKuc-RUujjA__28PGQG_0C8NWs-FdFe3Zzc81u4a1zj5GUb2tnTMOu5uuKi4jdcvj0yYv-yvCipDhWsv6rRGYtIQ9swv0AWL-zPREchPgf9B0pEKXpKTcLidTfIIXkOLxgT4da8Oq38KnfYpC4QO4v8xKkVq4OrdPnE7KE9K_Ny5rRK9V1', icon: Briefcase },
              { title: 'Educação', desc: 'Orçamento anual para cursos e livros.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBc2diA6LfG4CPVdpBE2pjrnjFxBxOBdzrfjbk4QPk5p4HAICh2_99Lb47SForCpvQRoyD0SocC215uv31dfVnOBkVIVmKG26nBjOZgm5OhO8XhQFsB3a188H04yGEEJc40JVx4Dx785mFkvYfL1DkdygEqBl5DSbFuOBXPqGLOLoSfuHh_7ZwJUycYlNXnYK_jYAyQU6ugKta2hh1wDi0HoyBiF9t1GkPZkqLz22d74luSmMntbHeGsi870DSbaEMZsVofiYRIdipT', icon: GraduationCap },
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-4 h-full group">
                <div className="w-full aspect-video rounded-xl bg-cover bg-center shadow-md relative overflow-hidden" style={{backgroundImage: `url(${item.img})`}}>
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors"></div>
                  <div className="absolute top-2 right-2 bg-white/90 p-1.5 rounded-lg text-primary">
                    <item.icon size={16} />
                  </div>
                </div>
                <div>
                  <h3 className="text-slate-900 dark:text-white text-lg font-bold">{item.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Jobs */}
        <section className="flex flex-col gap-8 py-10">
          <div className="flex flex-col md:flex-row justify-between items-end gap-4 border-b border-slate-200 dark:border-slate-700 pb-4">
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Vagas Abertas</h2>
              <p className="text-slate-500 dark:text-slate-400">Encontre o seu próximo desafio.</p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <div className="relative w-full md:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 py-2 pl-10 pr-4 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 text-slate-900 dark:text-white" placeholder="Buscar cargo..." type="text" />
              </div>
              <button className="flex items-center justify-center rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-4 py-2 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-white transition-colors">
                <Filter size={18} className="mr-2" /> Filtros
              </button>
            </div>
          </div>
          
          <div className="flex flex-col gap-3">
            {[
              { title: 'Senior Full Stack Engineer', dept: 'Engenharia', loc: 'Remoto (Brasil)', type: 'Tempo Integral', icon: Code },
              { title: 'Product Designer (UI/UX)', dept: 'Produto', loc: 'São Paulo (Híbrido)', type: 'Tempo Integral', icon: Palette },
              { title: 'Analista de Risco e Fraude', dept: 'Operações', loc: 'Remoto', type: 'Tempo Integral', icon: Shield },
              { title: 'Tech Lead - Pagamentos', dept: 'Engenharia', loc: 'Remoto', type: 'Tempo Integral', icon: Code },
            ].map((job, i) => (
              <div key={i} className="glass-panel group flex flex-col md:flex-row items-start md:items-center justify-between gap-4 rounded-xl p-5 hover:border-primary/50 transition-all cursor-pointer bg-white/60 dark:bg-slate-800/60 border-white/50 dark:border-slate-700">
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">{job.title}</h3>
                  <div className="flex flex-wrap gap-3 text-sm text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1"><job.icon size={16} /> {job.dept}</span>
                    <span className="flex items-center gap-1"><MapPin size={16} /> {job.loc}</span>
                    <span className="flex items-center gap-1"><Clock size={16} /> {job.type}</span>
                  </div>
                </div>
                <button className="whitespace-nowrap rounded-lg bg-primary/10 px-4 py-2 text-sm font-bold text-primary opacity-0 group-hover:opacity-100 transition-all hover:bg-primary hover:text-white">
                  Ver Detalhes
                </button>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-4">
            <button className="text-primary font-bold text-sm hover:underline flex items-center gap-1">
              Ver todas as vagas <ArrowRight size={16} />
            </button>
          </div>
        </section>

        {/* Talent Pool CTA */}
        <section className="glass-panel rounded-2xl p-8 text-center relative overflow-hidden bg-white/70 dark:bg-slate-800/70">
          <div className="relative z-10 flex flex-col gap-6 items-center">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">Não encontrou a vaga ideal?</h2>
            <p className="text-slate-600 dark:text-slate-300 max-w-lg">
              Estamos sempre em busca de talentos excepcionais. Deixe seu contato no nosso Banco de Talentos e avisaremos quando surgir uma oportunidade.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
              <input className="flex-1 rounded-lg border border-slate-300 dark:border-slate-600 bg-white/80 dark:bg-slate-900/80 px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 text-slate-900 dark:text-white" placeholder="Seu melhor e-mail" type="email" />
              <button className="rounded-lg bg-primary px-6 py-3 text-sm font-bold text-white shadow-md hover:bg-blue-600 transition-all" type="button">
                Cadastrar
              </button>
            </form>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Careers;
