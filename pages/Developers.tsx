import React from 'react';
import { Terminal, Book, Code2 } from 'lucide-react';

const Developers = () => {
    return (
        <div className="min-h-screen bg-background-light dark:bg-background-dark py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-wider uppercase text-sm">Developers</span>
                    <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mt-4 mb-6">
                        Construa o futuro dos pagamentos
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Documentação completa, SDKs e APIs para integrar a Bloopi em minutos.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl">
                        <Terminal size={40} className="text-primary mb-6" />
                        <h3 className="text-2xl font-bold mb-4">API Reference</h3>
                        <p className="text-slate-400 mb-6">Documentação detalhada de todos os endpoints da nossa API REST.</p>
                        <button className="text-primary font-bold hover:underline">Ler documentação &rarr;</button>
                    </div>

                    <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700">
                        <Book size={40} className="text-primary mb-6" />
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Guias e Tutoriais</h3>
                        <p className="text-slate-600 dark:text-slate-400 mb-6">Passo a passo para integrar checkout, assinaturas e split de pagamentos.</p>
                        <button className="text-primary font-bold hover:underline">Ver guias &rarr;</button>
                    </div>

                    <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700">
                        <Code2 size={40} className="text-primary mb-6" />
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">SDKs e Bibliotecas</h3>
                        <p className="text-slate-600 dark:text-slate-400 mb-6">Bibliotecas oficiais para Node.js, Python, PHP, Ruby e mais.</p>
                        <button className="text-primary font-bold hover:underline">Ver SDKs &rarr;</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Developers;
