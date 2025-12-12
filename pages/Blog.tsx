import React from 'react';
import { Search, Calendar, ArrowRight, Mail, RefreshCw } from 'lucide-react';

const Blog = () => {
  const categories = ['Todos', 'E-commerce', 'Pagamentos', 'Segurança', 'Devs'];
  
  const articles = [
    {
      title: 'Gateway de pagamento: Como escolher o melhor para seu negócio?',
      category: 'Tendências',
      date: '24 Out, 2023',
      excerpt: 'Um guia completo para entender taxas, segurança e integração ao escolher a solução ideal para sua loja virtual.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBXiRM5svwGBrIyuOvrcKF1kIl6Ih1MvGtQtyCzIrYSdnTCgsHwYbYLdipxWlLgIinpweY4G1QUTtiRgkFKMWLXSXkTD4iP3Pt6Fo5-h6Pb55xpfkUVPUQYAO8623shdNwxp8VY3PG34zbl7IotL3iGbnX4xJpKEgALSVddDNI368BWtsK1G19bSUDeYu8HDm3DmWE341-afIlOufMi4rnZtoK8Nk9Q9WMlqcX6-vJUMguLiZ3jIf6a_GZSKGhPxLib9tFKIhhygg7c'
    },
    {
      title: 'Prevenção à fraude no e-commerce: 5 dicas essenciais',
      category: 'Segurança',
      date: '20 Out, 2023',
      excerpt: 'Proteja seu faturamento e a confiança dos seus clientes implementando camadas extras de verificação.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9rtAEKwppJU9ECJkVwHFEL2gkdN9I5NjB0X5KHs-AlN__5RhmCJN-6syyeaNVf4nG05QPm6Ig99qSI3pR7U7ftzofXFJ5poHZTlzJB2TGqOssUgfWCQlusAIMwC_gpRrtUemPdXRsDkiQK0lkV6cLfvFOyIq4qCIRmQqTz1D153eL69zFV9rvN7AdzuvILx3yGsJJ-oBDXvzfgGMvYD2SGMjpGfMbZ_k_0dwTf8EmuFvtHwFPx7wwWTtoYMxs5spFdvRE1ztb2LKV'
    },
    {
      title: 'Bloopi API v2: O que mudou para os desenvolvedores?',
      category: 'Tecnologia',
      date: '18 Out, 2023',
      excerpt: 'Confira as novidades da nossa nova documentação, webhooks mais rápidos e SDKs atualizados.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBO3DwidhYjL1und8wVDUx36t2prsdVr-7HUNffzm0AnHSs42h722jdXwGvR7-ctiwAYLACSUoZFJ7bEEUzUKFxjj-qYTGwkkp2HxSi5JEtGA1wiEf2EsTHwpiSQSLH4HqKmDT_j_EyV8jEOMzrIWAQ-A395uYolNg7FDilXdBrLKIm6yIWQkslpN0cK2rrq9-rGuLNftBiTeFPkTVD0KDeAJvEAwbeih98_aFz2LddOQtdHRUMb7R0rQAduHAXGPoVOfQ6DmJC-MQn'
    },
    {
      title: 'Conciliação financeira automática: pare de perder dinheiro',
      category: 'Gestão',
      date: '15 Out, 2023',
      excerpt: 'Como automatizar o fluxo de caixa pode salvar horas da sua equipe e evitar erros manuais.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCWEQDNIN7_srlAWQZbkhr6ylgLHMslHSo6jmH-Ym-rx-G8CAzgeqfWpxo9pKzRM9UIUIA5Pht1Wm8X1gbIxnZhaPf-ryJnCvmXGFlcATMq_4wx9x00iajUVol3kGlbqlUK9VNM0wKLqS7TOCNgtuLuftp_1NexqeL1tK98CELZghAqBAjtfN0BcAW3Y7iMKBHHrxGEZ7cMkhY5Q2G4ZXbGh27qRiXHhF_e62RzWgSfaFGuGXVsNwVbApzLo_w7b9Qa2SeDkv8n6_k_'
    },
    {
      title: 'Como a CoffeeStore aumentou a conversão em 30%',
      category: 'Case de Sucesso',
      date: '10 Out, 2023',
      excerpt: 'Entenda a estratégia de checkout transparente utilizada para diminuir o abandono de carrinho.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAger8Oph4NTiKT7GoF7M3AyWXezmt5l2srPvEt9GuPIiuACyUYmuBDkdnqMSKBgKSO8SFzwBkY_aFvdTl5EXV9_ztjzUNrna7ja1KywvkIJ8STuHEevhAZJTz4d2LrEa6KIk1bcg5CYDzzV0nCb9k2WLuKsRyagt4QNIzGZo0aaWTli3LKjT_qV1eSDYGsfl8anTpHv469RzusvCakDI-uFgG9Ufvz8jIit2-YcYWPYBOV-ZFP44wFi2A6RoQGtr_Q7OOaGqUPnKOt'
    }
  ];

  return (
    <div className="w-full flex justify-center py-8 px-4 md:px-10 lg:px-40">
      <div className="max-w-6xl w-full">
        {/* Featured */}
        <div className="glass-panel rounded-2xl p-1 shadow-lg mb-12 bg-white/50 dark:bg-slate-800/50">
          <div className="flex flex-col md:flex-row gap-8 bg-white/50 dark:bg-slate-900/50 rounded-xl p-6 md:p-8 backdrop-blur-sm">
            <div className="w-full md:w-1/2 aspect-video md:aspect-auto rounded-xl overflow-hidden shadow-sm relative group cursor-pointer">
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors z-10"></div>
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBA2Lm7wkmwV826uqVqlkqDY5PAw1UMUDwo8pfYK1B8rpFyCsDIL2QTfWq0vHnW2uh84haBBA8lhde3l0zWyDoPA1lcz64PId5U4coKuuhWdodMPgpinE4WLt-EXpUsbiyxTe-a4GUMgypbTEX0Kto-g7niQywScpYjuOrs9Bg7UFyJ4B8rh9z8t0tKDsVGGmrvbd2BajzBUzejvrX0FIpElyUSyvN-mJ-yZeddkoZqlaRR4Pnw4_jb2yFAbF0hdhGmAYXzq_jCh21p" 
                alt="Featured" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center gap-4">
              <div className="flex gap-2 mb-1">
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">Destaque</span>
                <span className="px-3 py-1 rounded-full bg-slate-200/50 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-semibold">5 min leitura</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight">
                O Futuro dos Pagamentos Digitais no Brasil
              </h1>
              <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg leading-relaxed">
                Entenda como o PIX e as carteiras digitais estão transformando o varejo online e quais são as tendências de segurança para os próximos anos no cenário nacional.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row gap-4 w-full">
                <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white h-12 px-6 rounded-lg font-bold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all transform hover:-translate-y-0.5">
                  Ler artigo completo <ArrowRight size={18} />
                </button>
                <div className="flex-1 sm:flex-none flex items-center gap-3 pl-2">
                  <div className="size-10 rounded-full bg-slate-200 overflow-hidden">
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCx6EqjnzEl1UbYl5OHnqt0FXRBzhMh1cB4dMyJegjjVxN5-_3TORghlK_Vy-RRTnMWRS6QsXh2oXn6h7HGqQ1K6x54HnZRu_Bh1N43KGEZoxAQiNLbKwO4pFA79wSGD-r9EPQXLfZ-yrZHs_5ypSnG3BJGOUMDpxq08rQ6YP9SN6QsXb-yrHW7DY6757I4I45NqqsxbFes_WfjZWNILcdUZsVuwJYzhPAaxIaYsJrWEs9rcRzFwDS1tiVKZnUWepHypL2XWXf83ue_" alt="Author" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-slate-800 dark:text-white">Ricardo Silva</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">CTO, Bloopi</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Categories & Search */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10">
          <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto no-scrollbar">
            {categories.map((cat, i) => (
              <button 
                key={cat}
                className={`flex h-10 shrink-0 items-center justify-center px-5 rounded-full text-sm font-medium transition-all ${i === 0 ? 'bg-primary text-white shadow-md' : 'bg-white dark:bg-slate-800 hover:bg-white/80 border border-slate-200/60 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-primary'}`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="text-slate-500 dark:text-slate-400 text-sm font-medium">
            Mostrando 12 de 45 artigos
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {articles.map((article, i) => (
            <article key={i} className="glass-panel flex flex-col rounded-xl overflow-hidden h-full group bg-white/70 dark:bg-slate-800/70 border-white/50 dark:border-slate-700">
              <div className="w-full aspect-[4/3] overflow-hidden relative">
                <div className="absolute top-3 left-3 z-10">
                  <span className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm text-slate-800 dark:text-white text-xs font-bold px-2 py-1 rounded shadow-sm">{article.category}</span>
                </div>
                <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: `url(${article.img})` }}></div>
              </div>
              <div className="flex flex-col flex-1 p-6">
                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-3">
                  <Calendar size={14} />
                  <span>{article.date}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 leading-tight group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm line-clamp-3 mb-4 flex-1">
                  {article.excerpt}
                </p>
                <a href="#" className="inline-flex items-center text-primary font-bold text-sm hover:underline mt-auto">
                  Ler mais <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </article>
          ))}

          {/* Newsletter Card */}
          <div className="glass-panel flex flex-col justify-center rounded-xl p-8 bg-gradient-to-br from-primary to-blue-700 border-none text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-all"></div>
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center mb-6 backdrop-blur-sm">
                  <Mail className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Bloopi Weekly</h3>
                <p className="text-blue-100 text-sm mb-6">Receba as melhores dicas de gestão e pagamentos diretamente no seu e-mail.</p>
              </div>
              <form className="flex flex-col gap-3">
                <input className="w-full h-10 px-3 rounded-lg bg-white/10 border border-white/30 placeholder:text-blue-200 text-white focus:outline-none focus:ring-2 focus:ring-white/50 text-sm" placeholder="seu@email.com" type="email" />
                <button type="button" className="w-full h-10 rounded-lg bg-white text-primary font-bold text-sm hover:bg-blue-50 transition-colors">
                   Inscrever-se
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mb-20">
          <button className="glass-panel px-6 py-3 rounded-full font-semibold text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary bg-white/80 dark:bg-slate-800/80 hover:scale-105 transition-all flex items-center gap-2 shadow-sm">
            <RefreshCw size={18} />
            Carregar mais artigos
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
