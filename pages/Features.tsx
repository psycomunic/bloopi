import React from 'react';
import { Sparkles } from 'lucide-react';

const Features = () => {
    return (
        <div className="min-h-screen bg-background-light dark:bg-background-dark py-20 px-4">
            <div className="max-w-7xl mx-auto text-center">
                <div className="inline-flex items-center justify-center p-3 bg-purple-100 dark:bg-purple-900/30 text-purple-600 rounded-2xl mb-6">
                    <Sparkles size={32} />
                </div>
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">Funcionalidades</h1>
                <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                    Tudo o que você precisa para escalar suas vendas.
                </p>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="h-64 bg-slate-100 dark:bg-slate-800 rounded-2xl animate-pulse"></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Features;
