import React, { useState } from 'react';
import { Search, Calendar, ArrowRight, Mail, RefreshCw, X, Clock, User, Tag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Blog = () => {
  const [selectedArticle, setSelectedArticle] = useState<any>(null);
  const categories = ['Todos', 'E-commerce', 'Pagamentos', 'Segurança', 'Devs'];

  const articles = [
    {
      id: 1,
      title: 'Gateway de pagamento: Como escolher o melhor para seu negócio?',
      category: 'Tendências',
      date: '24 Out, 2023',
      readTime: '8 min',
      author: 'Ana Silva',
      excerpt: 'Um guia completo para entender taxas, segurança e integração ao escolher a solução ideal para sua loja virtual.',
      content: `
        <p>Escolher o gateway de pagamento certo é uma das decisões mais críticas para qualquer e-commerce. Não se trata apenas de processar transações, mas de garantir a melhor experiência para o cliente e a saúde financeira do seu negócio.</p>
        
        <h3>1. Segurança em primeiro lugar</h3>
        <p>A segurança dos dados do seu cliente deve ser inegociável. Procure por gateways que possuam certificação PCI DSS de nível 1. Além disso, sistemas antifraude integrados são essenciais para evitar chargebacks que podem corroer seu lucro.</p>
        
        <h3>2. Taxas e Prazos</h3>
        <p>Muitos empreendedores olham apenas para a taxa por transação, mas esquecem de avaliar o prazo de recebimento (D+30, D+14, D+2). Na Bloopi, por exemplo, oferecemos liquidação D+1 para que você tenha fluxo de caixa para reinvestir.</p>
        
        <h3>3. Experiência de Checkout</h3>
        <p>Um checkout transparente, onde o cliente não é redirecionado para outra página, pode aumentar sua conversão em até 30%. A fricção no momento do pagamento é a principal causa de abandono de carrinho.</p>
        
        <h3>Conclusão</h3>
        <p>Analise não apenas o custo, mas o valor agregado. Um gateway instável ou difícil de usar custará muito mais em vendas perdidas do que qualquer economia em taxas.</p>
      `,
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBXiRM5svwGBrIyuOvrcKF1kIl6Ih1MvGtQtyCzIrYSdnTCgsHwYbYLdipxWlLgIinpweY4G1QUTtiRgkFKMWLXSXkTD4iP3Pt6Fo5-h6Pb55xpfkUVPUQYAO8623shdNwxp8VY3PG34zbl7IotL3iGbnX4xJpKEgALSVddDNI368BWtsK1G19bSUDeYu8HDm3DmWE341-afIlOufMi4rnZtoK8Nk9Q9WMlqcX6-vJUMguLiZ3jIf6a_GZSKGhPxLib9tFKIhhygg7c'
    },
    {
      id: 2,
      title: 'Prevenção à fraude no e-commerce: 5 dicas essenciais',
      category: 'Segurança',
      date: '20 Out, 2023',
      readTime: '6 min',
      author: 'Carlos Mendez',
      excerpt: 'Proteja seu faturamento e a confiança dos seus clientes implementando camadas extras de verificação.',
      content: `
        <p>A fraude online é uma realidade que cresce junto com o e-commerce. No entanto, com as ferramentas e estratégias certas, é possível minimizar drasticamente os riscos sem prejudicar a experiência do cliente legítimo.</p>
        
        <h3>1. Utilize Inteligência Artificial</h3>
        <p>Sistemas modernos de antifraude utilizam machine learning para analisar o comportamento do usuário em tempo real. Eles conseguem detectar anomalias sutis que passariam despercebidas por uma análise manual.</p>
        
        <h3>2. Verificação de Endereço (AVS)</h3>
        <p>Sempre compare o endereço de cobrança do cartão com o endereço informado no cadastro. Divergências aqui são um forte indício de fraude.</p>
        
        <h3>3. Atenção aos Padrões de Compra</h3>
        <p>Pedidos com valores muito acima da média, compras repetidas em curto espaço de tempo ou múltiplos cartões sendo testados são "red flags" clássicas.</p>
      `,
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9rtAEKwppJU9ECJkVwHFEL2gkdN9I5NjB0X5KHs-AlN__5RhmCJN-6syyeaNVf4nG05QPm6Ig99qSI3pR7U7ftzofXFJ5poHZTlzJB2TGqOssUgfWCQlusAIMwC_gpRrtUemPdXRsDkiQK0lkV6cLfvFOyIq4qCIRmQqTz1D153eL69zFV9rvN7AdzuvILx3yGsJJ-oBDXvzfgGMvYD2SGMjpGfMbZ_k_0dwTf8EmuFvtHwFPx7wwWTtoYMxs5spFdvRE1ztb2LKV'
    },
    {
      id: 3,
      title: 'Bloopi API v2: O que mudou para os desenvolvedores?',
      category: 'Tecnologia',
      date: '18 Out, 2023',
      readTime: '10 min',
      author: 'Ricardo Silva',
      excerpt: 'Confira as novidades da nossa nova documentação, webhooks mais rápidos e SDKs atualizados.',
      content: `
        <p>Ouvimos o feedback da nossa comunidade de desenvolvedores e reconstruímos nossa API do zero. A versão 2 traz melhorias significativas em performance, usabilidade e segurança.</p>
        
        <h3>Webhooks em Tempo Real</h3>
        <p>Reduzimos a latência dos nossos webhooks para menos de 200ms. Isso significa que seu sistema será notificado sobre o status de um pagamento praticamente no mesmo instante em que ele ocorre.</p>
        
        <h3>Novos SDKs</h3>
        <p>Lançamos bibliotecas oficiais para Node.js, Python, PHP, Ruby e Go. Elas são totalmente tipadas e incluem tratamento de erros robusto, facilitando a integração.</p>
        
        <h3>Idempotência</h3>
        <p>Implementamos chaves de idempotência em todos os endpoints de criação. Isso garante que você possa retentar requisições com segurança em caso de falhas de rede, sem risco de duplicar cobranças.</p>
      `,
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBO3DwidhYjL1und8wVDUx36t2prsdVr-7HUNffzm0AnHSs42h722jdXwGvR7-ctiwAYLACSUoZFJ7bEEUzUKFxjj-qYTGwkkp2HxSi5JEtGA1wiEf2EsTHwpiSQSLH4HqKmDT_j_EyV8jEOMzrIWAQ-A395uYolNg7FDilXdBrLKIm6yIWQkslpN0cK2rrq9-rGuLNftBiTeFPkTVD0KDeAJvEAwbeih98_aFz2LddOQtdHRUMb7R0rQAduHAXGPoVOfQ6DmJC-MQn'
    },
    {
      id: 4,
      title: 'Conciliação financeira automática: pare de perder dinheiro',
      category: 'Gestão',
      date: '15 Out, 2023',
      readTime: '5 min',
      author: 'Roberto Lima',
      excerpt: 'Como automatizar o fluxo de caixa pode salvar horas da sua equipe e evitar erros manuais.',
      content: `
        <p>Planilhas manuais são o inimigo da eficiência. A conciliação financeira automática não é um luxo, é uma necessidade para quem quer escalar.</p>
        
        <h3>O Custo do Erro Humano</h3>
        <p>Estudos mostram que empresas perdem, em média, 1% a 3% do faturamento devido a erros de conciliação. Em um negócio que fatura R$ 1 milhão, estamos falando de até R$ 30.000 jogados fora.</p>
        
        <h3>Automação com a Bloopi</h3>
        <p>Nossa dashboard oferece relatórios detalhados que batem centavo por centavo com o que caiu na sua conta bancária. Você pode exportar tudo para seu ERP favorito com um clique.</p>
      `,
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCWEQDNIN7_srlAWQZbkhr6ylgLHMslHSo6jmH-Ym-rx-G8CAzgeqfWpxo9pKzRM9UIUIA5Pht1Wm8X1gbIxnZhaPf-ryJnCvmXGFlcATMq_4wx9x00iajUVol3kGlbqlUK9VNM0wKLqS7TOCNgtuLuftp_1NexqeL1tK98CELZghAqBAjtfN0BcAW3Y7iMKBHHrxGEZ7cMkhY5Q2G4ZXbGh27qRiXHhF_e62RzWgSfaFGuGXVsNwVbApzLo_w7b9Qa2SeDkv8n6_k_'
    },
    {
      id: 5,
      title: 'Como a CoffeeStore aumentou a conversão em 30%',
      category: 'Case de Sucesso',
      date: '10 Out, 2023',
      readTime: '7 min',
      author: 'Julia Santos',
      excerpt: 'Entenda a estratégia de checkout transparente utilizada para diminuir o abandono de carrinho.',
      content: `
        <p>A CoffeeStore, uma das maiores lojas de cafés especiais do país, enfrentava uma taxa de abandono de carrinho de 75%. Após migrar para a Bloopi, esse número caiu drasticamente.</p>
        
        <h3>O Problema</h3>
        <p>O checkout antigo redirecionava o cliente para uma página externa, que não tinha a identidade visual da marca. Isso gerava desconfiança.</p>
        
        <h3>A Solução</h3>
        <p>Implementamos o Checkout Transparente da Bloopi. O cliente agora preenche os dados do cartão sem sair do site da CoffeeStore. Além disso, ativamos a compra com um clique para clientes recorrentes.</p>
        
        <h3>O Resultado</h3>
        <p>Em 3 meses, a taxa de conversão subiu 30%, representando um aumento de R$ 150.000 no faturamento mensal.</p>
      `,
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAger8Oph4NTiKT7GoF7M3AyWXezmt5l2srPvEt9GuPIiuACyUYmuBDkdnqMSKBgKSO8SFzwBkY_aFvdTl5EXV9_ztjzUNrna7ja1KywvkIJ8STuHEevhAZJTz4d2LrEa6KIk1bcg5CYDzzV0nCb9k2WLuKsRyagt4QNIzGZo0aaWTli3LKjT_qV1eSDYGsfl8anTpHv469RzusvCakDI-uFgG9Ufvz8jIit2-YcYWPYBOV-ZFP44wFi2A6RoQGtr_Q7OOaGqUPnKOt'
    }
  ];

  return (
    <div className="w-full flex justify-center py-8 px-4 md:px-10 lg:px-40 min-h-screen">
      <div className="max-w-6xl w-full">
        {/* Featured */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass rounded-2xl p-1 shadow-lg mb-12"
        >
          <div className="flex flex-col md:flex-row gap-8 bg-white/50 dark:bg-slate-900/50 rounded-xl p-6 md:p-8 backdrop-blur-sm">
            <div className="w-full md:w-1/2 aspect-video md:aspect-auto rounded-xl overflow-hidden shadow-sm relative group cursor-pointer" onClick={() => setSelectedArticle(articles[0])}>
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
                <button
                  onClick={() => setSelectedArticle(articles[0])}
                  className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-primary hover:bg-blue-600 text-white h-12 px-6 rounded-lg font-bold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all transform hover:-translate-y-0.5"
                >
                  Ler artigo completo <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Categories & Search */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10">
          <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto no-scrollbar">
            {categories.map((cat, i) => (
              <button
                key={cat}
                className={`flex h-10 shrink-0 items-center justify-center px-5 rounded-full text-sm font-medium transition-all ${i === 0 ? 'bg-primary text-white shadow-md' : 'glass hover:bg-white/80 text-slate-600 dark:text-slate-300 hover:text-primary'}`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="text-slate-500 dark:text-slate-400 text-sm font-medium">
            Mostrando {articles.length} de 45 artigos
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {articles.map((article, i) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass flex flex-col rounded-xl overflow-hidden h-full group hover:shadow-xl transition-all duration-300"
            >
              <div className="w-full aspect-[4/3] overflow-hidden relative cursor-pointer" onClick={() => setSelectedArticle(article)}>
                <div className="absolute top-3 left-3 z-10">
                  <span className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm text-slate-800 dark:text-white text-xs font-bold px-2 py-1 rounded shadow-sm">{article.category}</span>
                </div>
                <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: `url(${article.img})` }}></div>
              </div>
              <div className="flex flex-col flex-1 p-6">
                <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{article.readTime}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 leading-tight group-hover:text-primary transition-colors cursor-pointer" onClick={() => setSelectedArticle(article)}>
                  {article.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm line-clamp-3 mb-4 flex-1">
                  {article.excerpt}
                </p>
                <button
                  onClick={() => setSelectedArticle(article)}
                  className="inline-flex items-center text-primary font-bold text-sm hover:underline mt-auto"
                >
                  Ler mais <ArrowRight size={16} className="ml-1" />
                </button>
              </div>
            </motion.article>
          ))}

          {/* Newsletter Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass flex flex-col justify-center rounded-xl p-8 bg-gradient-to-br from-primary to-blue-700 border-none text-white relative overflow-hidden group"
          >
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
          </motion.div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mb-20">
          <button className="glass px-6 py-3 rounded-full font-semibold text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary hover:scale-105 transition-all flex items-center gap-2 shadow-sm">
            <RefreshCw size={18} />
            Carregar mais artigos
          </button>
        </div>
      </div>

      {/* Article Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedArticle(null)}></div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white dark:bg-slate-900 w-full max-w-3xl max-h-[90vh] rounded-2xl shadow-2xl overflow-hidden relative z-10 flex flex-col"
            >
              {/* Modal Header */}
              <div className="relative h-64 sm:h-80 shrink-0">
                <img src={selectedArticle.img} alt={selectedArticle.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full backdrop-blur-md transition-colors"
                >
                  <X size={24} />
                </button>
                <div className="absolute bottom-0 left-0 p-6 sm:p-8 w-full">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary text-white text-xs font-bold uppercase tracking-wider mb-3">
                    {selectedArticle.category}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight mb-2">
                    {selectedArticle.title}
                  </h2>
                  <div className="flex items-center gap-4 text-white/80 text-sm">
                    <div className="flex items-center gap-1">
                      <User size={14} />
                      <span>{selectedArticle.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{selectedArticle.date}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 sm:p-8 overflow-y-auto custom-scrollbar">
                <div
                  className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:text-slate-900 dark:prose-headings:text-white prose-p:text-slate-600 dark:prose-p:text-slate-300 prose-a:text-primary"
                  dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Blog;
