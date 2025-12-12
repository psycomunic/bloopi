import React from 'react';
import { 
  ArrowRight, 
  CheckCircle, 
  Bolt, 
  ShieldCheck, 
  BarChart3, 
  Code2, 
  ShoppingCart, 
  RefreshCcw,
  Store,
  TrendingUp,
  CreditCard
} from 'lucide-react';

const Home = () => {
  return (
    <>
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-primary/20 blur-[120px] dark:bg-primary/10" />
        <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-300/20 blur-[100px] dark:bg-blue-900/10" />
      </div>

      <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 w-fit mx-auto lg:mx-0">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-xs font-semibold text-primary dark:text-blue-300 uppercase tracking-wide">Novidade: Pix Automático</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white leading-tight tracking-tight">
              O Gateway de <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Pagamentos</span> do Futuro
            </h1>
            <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Aumente sua conversão com o checkout mais rápido e transparente do mercado. Tecnologia desenhada para escalar suas vendas com segurança de nível bancário.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2">
              <button className="h-12 px-8 rounded-xl bg-primary text-white font-bold text-base shadow-xl shadow-blue-500/30 hover:bg-blue-600 hover:-translate-y-1 transition-all duration-300">
                Começar Agora
              </button>
              <button className="h-12 px-8 rounded-xl bg-white/60 dark:bg-slate-800/60 border border-white/60 dark:border-slate-700/60 text-slate-800 dark:text-slate-200 font-bold text-base hover:bg-white dark:hover:bg-slate-800 hover:shadow-lg transition-all duration-300 backdrop-blur-sm">
                Falar com Vendas
              </button>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-4 opacity-80">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="size-8 rounded-full border-2 border-white dark:border-slate-900 bg-slate-200" style={{ backgroundImage: `url(https://picsum.photos/100/100?random=${i})`, backgroundSize: 'cover' }}></div>
                ))}
              </div>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Mais de 5.000 empresas confiam</p>
            </div>
          </div>
          
          <div className="relative w-full h-full min-h-[400px] flex items-center justify-center">
            <div className="relative w-full max-w-[500px] aspect-square">
              <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-gradient-to-br from-blue-100 to-white dark:from-blue-900/40 dark:to-slate-800 rounded-2xl opacity-60 transform rotate-6 border border-white/50 dark:border-white/10"></div>
              <div className="absolute inset-0 m-auto w-[90%] h-[90%] bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl border border-white/60 dark:border-white/10 rounded-2xl flex flex-col p-6 z-10 overflow-hidden shadow-2xl">
                <div className="flex justify-between items-center mb-8 border-b border-slate-100 dark:border-slate-700 pb-4">
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-400 font-medium">Saldo Disponível</span>
                    <span className="text-2xl font-bold text-slate-800 dark:text-white">R$ 142.350,00</span>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <TrendingUp size={14} /> +12.5%
                  </div>
                </div>
                <div className="flex-1 flex flex-col gap-4">
                  <div className="h-24 w-full rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-100 dark:border-blue-800 p-4 relative overflow-hidden group">
                    <div className="flex justify-between items-end h-full gap-1">
                      {[30, 50, 40, 75, 50, 100, 66].map((h, i) => (
                         <div key={i} className={`w-full bg-blue-300 dark:bg-blue-600 rounded-t hover:bg-primary transition-colors`} style={{ height: `${h}%` }}></div>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-auto">
                    <div className="flex items-center gap-3">
                      <div className="size-10 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-300">
                        <Store size={20} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-slate-800 dark:text-slate-200">Venda #8492</span>
                        <span className="text-xs text-slate-500 dark:text-slate-400">Hoje, 14:30</span>
                      </div>
                    </div>
                    <span className="font-bold text-slate-800 dark:text-white">+ R$ 250,00</span>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md p-4 rounded-xl shadow-lg z-20 flex items-center gap-3 animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-400 p-2 rounded-lg">
                  <CheckCircle size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-slate-800 dark:text-white">Pagamento Aprovado</span>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400">Cartão de Crédito</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 relative">
        <div className="bg-white/40 dark:bg-slate-800/40 backdrop-blur-xl rounded-2xl p-8 border border-white/60 dark:border-white/10 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-200/60 dark:divide-slate-700/60">
            {[
              { label: 'Volume Processado', value: 'R$ 500M+' },
              { label: 'Uptime Garantido', value: '99.9%' },
              { label: 'Suporte Humanizado', value: '24/7' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col gap-2 p-2">
                <span className="text-slate-500 dark:text-slate-400 text-sm font-semibold uppercase tracking-wider">{stat.label}</span>
                <span className="text-4xl font-black text-slate-800 dark:text-white tracking-tight">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 text-center z-10 relative">
        <div className="max-w-3xl mx-auto flex flex-col gap-4">
          <h2 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-bold leading-tight">
            Integração Simples e Poderosa
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-lg">
            Conecte-se em minutos, não em meses. Nossa API foi construída por desenvolvedores, para desenvolvedores.
          </p>
        </div>
      </section>

      <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: Bolt, title: 'Pagamentos Instantâneos', desc: 'Receba suas vendas na hora com nossa liquidação D+0. Melhore seu fluxo de caixa sem taxas abusivas.' },
            { icon: ShieldCheck, title: 'Proteção Antifraude IA', desc: 'Inteligência artificial proprietária que barra fraudes complexas sem bloquear vendas legítimas dos seus clientes.' },
            { icon: BarChart3, title: 'Analytics em Tempo Real', desc: 'Acompanhe cada transação, chargeback e conversão com dashboards detalhados e 100% transparentes.' },
            { icon: Code2, title: 'API RESTful', desc: 'Documentação completa e SDKs nas principais linguagens para integrar seu sistema em tempo recorde.' },
            { icon: ShoppingCart, title: 'Checkout Transparente', desc: 'Mantenha o cliente no seu site. Personalize a aparência do checkout para combinar com a sua marca.' },
            { icon: RefreshCcw, title: 'Assinaturas Recorrentes', desc: 'Gestão completa de planos e assinaturas com retentativa inteligente para reduzir a inadimplência.' },
          ].map((item, idx) => (
            <div key={idx} className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-md border border-white/60 dark:border-white/5 rounded-2xl p-8 flex flex-col gap-4 group hover:-translate-y-1 transition-transform duration-300">
              <div className="w-14 h-14 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-primary flex items-center justify-center mb-2 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <item.icon size={30} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white">{item.title}</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white mt-10 relative overflow-hidden rounded-3xl mx-4 lg:mx-8">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div className="inline-block px-3 py-1 bg-primary/20 text-blue-300 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-primary/30">Developer Friendly</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Feito para devs,<br/>amado por CFOs.</h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Nossa API foi desenhada para ser intuitiva e poderosa. Com poucas linhas de código, você habilita pagamentos complexos e automatiza seu financeiro.
            </p>
            <div className="flex flex-col gap-4">
              {['Webhooks em tempo real', 'Sandbox para testes ilimitados', 'Bibliotecas para Node, Python, PHP e Ruby'].map((feat, i) => (
                <div key={i} className="flex items-center gap-4">
                  <CheckCircle className="text-green-400" size={20} />
                  <span className="text-slate-300">{feat}</span>
                </div>
              ))}
            </div>
            <button className="mt-8 text-primary font-bold hover:text-white transition-colors flex items-center gap-2 group">
              Ler Documentação <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
          </div>
          
          <div className="rounded-xl overflow-hidden bg-[#0d141b] border border-slate-700 shadow-2xl">
            <div className="flex items-center gap-2 px-4 py-3 bg-slate-800/50 border-b border-slate-700">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-2 text-xs text-slate-500 font-mono">transaction.js</span>
            </div>
            <div className="p-6 overflow-x-auto">
              <pre className="font-mono text-sm leading-relaxed">
                <span className="text-purple-400">const</span> <span className="text-blue-400">bloopi</span> <span className="text-white">=</span> <span className="text-yellow-300">require</span>(<span className="text-green-300">'bloopi-sdk'</span>);{'\n'}
                <span className="text-slate-500">// Criar uma transação</span>{'\n'}
                <span className="text-purple-400">const</span> <span className="text-blue-400">transaction</span> <span className="text-white">=</span> <span className="text-purple-400">await</span> <span className="text-blue-400">bloopi</span>.<span className="text-blue-300">transactions</span>.<span class="text-yellow-300">create</span>({'{'}{'\n'}
                {'  '}<span className="text-red-300">amount</span>: <span className="text-orange-300">10000</span>, <span className="text-slate-500">// R$ 100,00</span>{'\n'}
                {'  '}<span className="text-red-300">payment_method</span>: <span className="text-green-300">'credit_card'</span>,{'\n'}
                {'  '}<span className="text-red-300">customer</span>: {'{'}{'\n'}
                {'    '}<span className="text-red-300">name</span>: <span className="text-green-300">'João Silva'</span>,{'\n'}
                {'    '}<span className="text-red-300">email</span>: <span className="text-green-300">'joao@email.com'</span>{'\n'}
                {'  }'}{'\n'}
                {'});'}{'\n'}
                <span className="text-blue-300">console</span>.<span className="text-yellow-300">log</span>(<span className="text-blue-400">transaction</span>.<span className="text-red-300">status</span>);{'\n'}
                <span className="text-slate-500">// Output: 'approved'</span>
              </pre>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center z-10 relative">
        <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-3xl p-10 md:p-16 relative overflow-hidden border border-blue-100 dark:border-blue-900">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-blue-300"></div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">
            Pronto para escalar seu negócio?
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 max-w-2xl mx-auto">
            Junte-se a milhares de empreendedores que escolheram a Bloopi para processar seus pagamentos com segurança e rapidez.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="h-14 px-8 rounded-xl bg-primary text-white font-bold text-lg shadow-xl shadow-blue-500/40 hover:bg-blue-600 hover:scale-105 transition-all duration-300">
              Criar Conta Grátis
            </button>
            <button className="h-14 px-8 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white font-bold text-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300">
              Ver Planos
            </button>
          </div>
          <p className="mt-6 text-sm text-slate-500 dark:text-slate-400">
            Não é necessário cartão de crédito. Setup em 5 minutos.
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
