import React from 'react';
import { Layers, Zap, Code, CreditCard } from 'lucide-react';

const Resources = () => {
    const resources = [
        {
            title: "Bloopi Pay",
            desc: "A solução completa de pagamentos para o seu negócio.",
            icon: CreditCard
        },
        {
            title: "Funcionalidades",
            desc: "Conheça todas as ferramentas que vão impulsionar suas vendas.",
            icon: Layers
        },
        {
            title: "Integrações",
            desc: "Conecte a Bloopi com as principais plataformas do mercado.",
            icon: Zap
        },
        {
            title: "Checkout 3.1",
            desc: "A versão mais recente e otimizada do nosso checkout.",
            icon: Code
        }
    ];

    return (
        <div className="min-h-screen bg-background-light dark:bg-background-dark py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">
                        Recursos
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Explore tudo o que a Bloopi tem a oferecer.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {resources.map((item, i) => (
                        <div key={i} className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-lg border border-slate-100 dark:border-slate-700 flex items-start gap-6 hover:border-primary/50 transition-colors">
                            <div className="p-4 rounded-2xl bg-primary/10 text-primary">
                                <item.icon size={32} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Resources;
