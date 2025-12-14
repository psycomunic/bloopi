import React from 'react';
import { Building2 } from 'lucide-react';

const Institutional = () => {
    return (
        <div className="min-h-screen bg-background-light dark:bg-background-dark py-20 px-4">
            <div className="max-w-7xl mx-auto text-center">
                <div className="inline-flex items-center justify-center p-3 bg-slate-100 dark:bg-slate-800 text-slate-600 rounded-2xl mb-6">
                    <Building2 size={32} />
                </div>
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">Institucional</h1>
                <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                    Sobre a Bloopi, nossa missão e valores.
                </p>
                <div className="mt-12 p-8 border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-2xl">
                    <p className="text-slate-400">Conteúdo institucional em breve.</p>
                </div>
            </div>
        </div>
    );
};

export default Institutional;
