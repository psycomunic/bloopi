import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const Taxas = () => {
    return (
        <div className="min-h-screen bg-background-light dark:bg-background-dark py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">
                        Taxas transparentes
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Sem surpresas. Você sabe exatamente quanto paga.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Cartão de Crédito</h3>
                        <div className="text-4xl font-black text-primary mb-2">3,19%</div>
                        <p className="text-sm text-slate-500 mb-8">Recebimento em 30 dias</p>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                                <CheckCircle2 size={18} className="text-green-500" />
                                <span>Antecipação disponível</span>
                            </li>
                            <li className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                                <CheckCircle2 size={18} className="text-green-500" />
                                <span>Antifraude incluso</span>
                            </li>
                        </ul>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl border border-slate-800 relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-primary text-slate-900 text-xs font-bold px-3 py-1 rounded-bl-xl">POPULAR</div>
                        <h3 className="text-2xl font-bold mb-4">PIX</h3>
                        <div className="text-4xl font-black text-primary mb-2">0,99%</div>
                        <p className="text-sm text-slate-400 mb-8">Recebimento imediato</p>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2 text-slate-300">
                                <CheckCircle2 size={18} className="text-green-400" />
                                <span>QR Code dinâmico</span>
                            </li>
                            <li className="flex items-center gap-2 text-slate-300">
                                <CheckCircle2 size={18} className="text-green-400" />
                                <span>Conciliação automática</span>
                            </li>
                        </ul>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Boleto</h3>
                        <div className="text-4xl font-black text-primary mb-2">R$ 3,49</div>
                        <p className="text-sm text-slate-500 mb-8">Por boleto pago</p>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                                <CheckCircle2 size={18} className="text-green-500" />
                                <span>Registro automático</span>
                            </li>
                            <li className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                                <CheckCircle2 size={18} className="text-green-500" />
                                <span>Baixa automática</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Taxas;
