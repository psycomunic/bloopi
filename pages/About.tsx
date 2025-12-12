import React from 'react';
import { Target, Eye, Shield, Lightbulb, TrendingUp, MapPin, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="w-full flex flex-col">
      {/* Hero */}
      <div className="relative w-full py-20 bg-background-light dark:bg-background-dark">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-blue-100/50 dark:bg-blue-900/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-10 flex flex-col lg:flex-row gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 flex flex-col gap-6 text-center lg:text-left"
          >
            <div className="inline-flex w-fit mx-auto lg:mx-0 items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-medium text-primary dark:border-blue-900 dark:bg-blue-900/30 dark:text-blue-200">
              <Shield size={16} />
              <span>Líder em inovação</span>
            </div>
            <h1 className="text-slate-900 dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-tight">
              Simplificando o futuro das finanças
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              Na Bloopi, acreditamos que pagamentos não devem ser uma barreira, mas sim uma ponte para o crescimento do seu negócio. Combinamos tecnologia de ponta com um design humano.
            </p>
            <div className="flex gap-4 justify-center lg:justify-start">
              <button className="h-12 px-6 rounded-lg bg-primary hover:bg-blue-600 text-white font-bold shadow-lg shadow-blue-500/30 transition-all hover:-translate-y-0.5">
                Fale com especialistas
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500 relative group"
          >
            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10"></div>
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAA0DBHrqTlaytOnzMbI3-eGoc5NXDvyXeeUYlasY7-LWxQ_gY0A1n5mvY-_CVAwCWokw3XhAPsN-pg7TaqIuD0E8UoWLhUtQ4-QIVNXNm1hU3jevmrt0bvWHCnnRrfzFrNGgOhiWqeRw1h3piu1NIRJ_DDfheEFWEIW-KsYz-4Z7fwvLF1o3lTOxMHELFmh7X7buXLy3w-oSVFJs9GC4MZHjr_uH_8KIDAyPr-4hxvrUEzjJzsugDTi_TqbiJqT8wtpNMfbSbPAPSR"
              alt="Office team"
              className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-700"
            />
          </motion.div>
        </div>
      </div>

      {/* Values */}
      <div className="w-full py-20 px-4 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center md:text-left mb-12">
            <h2 className="text-slate-900 dark:text-white text-3xl font-bold mb-4">Nossa Essência</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl">Os pilares que sustentam cada linha de código e cada decisão estratégica na Bloopi.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Target, title: 'Missão', desc: 'Democratizar o acesso a serviços financeiros de alta performance para empresas de todos os tamanhos, removendo burocracias.' },
              { icon: Eye, title: 'Visão', desc: 'Ser a principal infraestrutura de pagamentos digitais da América Latina até 2030, conectando mercados globais.' },
              { icon: Shield, title: 'Valores', desc: 'Transparência radical, segurança inegociável e inovação constante focada na experiência do usuário final.' }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass rounded-xl p-8 hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="size-12 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-primary mb-6">
                  <item.icon size={24} />
                </div>
                <h3 className="text-slate-900 dark:text-white text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="w-full py-20 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-slate-900 dark:text-white text-3xl font-bold mb-2">Nossa História</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-12">Como transformamos uma ideia em realidade.</p>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-[19px] top-2 bottom-0 w-[2px] bg-slate-200 dark:bg-slate-700"></div>

            <div className="flex flex-col gap-10">
              {[
                { year: '2020', title: 'A Fundação', desc: 'O início de uma ideia ousada em uma pequena sala comercial em São Paulo.', icon: Lightbulb },
                { year: '2021', title: 'Primeiro Investimento', desc: 'Seed Round de R$ 10M que permitiu a contratação do time inicial de engenharia.', icon: TrendingUp },
                { year: '2022', title: 'Expansão Nacional', desc: 'Chegamos a todos os estados do Brasil com soluções customizadas para varejo.', icon: MapPin },
                { year: '2023', title: 'Novos Horizontes', desc: 'Lançamento da API V2 e início das operações internacionais.', icon: Rocket }
              ].map((event, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative pl-16"
                >
                  <div className="absolute left-0 top-0 size-10 rounded-full bg-white dark:bg-slate-800 border-2 border-primary flex items-center justify-center z-10">
                    <event.icon size={20} className="text-primary" />
                  </div>
                  <div className="glass p-6 rounded-lg border-l-4 border-l-primary">
                    <span className="text-primary text-sm font-bold tracking-wider mb-1 block">{event.year}</span>
                    <h3 className="text-slate-900 dark:text-white text-lg font-bold mb-1">{event.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">{event.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="w-full py-20 px-4 md:px-10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-slate-900 dark:text-white text-3xl font-bold mb-4">Quem Faz Acontecer</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-12">Um time multidisciplinar apaixonado por resolver problemas complexos com soluções simples.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Ana Silva', role: 'CEO & Co-Founder', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQFf2JcU1KQx3dZrVOcWYO-ojyOBqEzUlCryp6KpxNx0XEkQILe1-7sho_yOj4nh3rqQIdbRNm4bPNSdV2pwQEKd0fxBWQYBn3g7VqmjQ2_sTv8dEFJaB2E2rMiD5yvPI6vIXwhTdjpRsxOvlMx61FghSUzxL6yPXuDZlxyrJWlK7dvdJPHGV6b5T5x32EZ3z5QCgakFn2P4zNwM8TwKMt50tUTkZrhJYEi75QOgQnLfbQiKoSvEWPeV3Gwqgv1HB8r9O7yH-g-vsi' },
              { name: 'Carlos Mendez', role: 'CTO', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC7jaTFt8sn0YntXRkoTLJMMJI54h6geNdo3Rso_dFgLPb64-UexsfA-ZnKXffhaXLZ9tgybgIs4qxLetslnGkkkgyN3Oh4WTBEpZ7_vgXMBi3JenlvTSKBvxO_KDipqugaRiy1fHT5IlpLk7xoo24bXOEEShJ9L6L-SuCcFTbyBGdzrzm3gxFWqo2kZ0v0Gqvt5WACNZQw4cBSdUTXTpuDxHjrZQOZEmGkYqM0iICZpHi_MeJEDLSwY2Ts1Jy0KsJKJh7NqCg90cf4' },
              { name: 'Julia Santos', role: 'Head de Produto', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkk2bidNGXFonMl4anUlLGUtnHQ8KDMuVvXjBI2DMY7Emnkb011Ld4xmy4fQLtfJIdqjCpP_47C_RljV2Aln0fkdqp4RPkdm8UAcodETF3zcY8loE6NA8D-xSiFF6rloWYisnQwaUC60vvXlojfbDScgiNF6XnMZP2fCvs8p8Nm9u5fJdnPHB_sqMpAs2JSJypNOUFNUTvWvjpGN39MmQs957XlDvFyj0W7uYwZBM7H9ZB9yZ61xkY_tJLBLHLJPKCZkkyS2Rb3J6R' },
              { name: 'Roberto Lima', role: 'CFO', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZraKHptLUcrXY2AKZS_bANlJdNwojNb9vzp9ltaEbG89_giPTUA5s1_toSkw1iINJPbh46L8jp_KTEUX0zr8jEV2WUhkDYPTCGk0hNbFf8grk_0pN70mSCfXTE8702NVBZYr4Uu4M_kxKJiyCruTJ56bq9kbEUCqJJpar7_NRkLwClPeiL3l8gW-mAhn4ypRANK6LE0AAXHKzm50qqLUA-k3w7iOIjlWwjCIgWatZBIV9dYeCPRzVzO6mQA45IfLtS1GvG_01zieN' }
            ].map((person, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass rounded-xl overflow-hidden group hover:shadow-lg transition-all duration-300"
              >
                <div className="w-full aspect-[4/5] bg-gray-200 overflow-hidden">
                  <img src={person.img} alt={person.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-bold text-slate-900 dark:text-white">{person.name}</h3>
                  <p className="text-sm text-primary font-medium">{person.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
