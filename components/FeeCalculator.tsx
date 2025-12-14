import React, { useState, useEffect } from 'react';
import { Calculator, DollarSign, CreditCard, Smartphone } from 'lucide-react';
import { PixIcon } from './icons/PixIcon';

const FeeCalculator = () => {
    const [amount, setAmount] = useState<string>('100,00');
    const [method, setMethod] = useState<'credit' | 'debit' | 'pix'>('credit');
    const [installments, setInstallments] = useState<number>(1);
    const [result, setResult] = useState({ fee: 0, net: 0 });

    // Rates
    const RATES = {
        debit: 0.0199, // 1.99%
        pix: 0.0099,   // 0.99%
        credit: {
            spot: 0.0399, // 3.99%
            installment: 0.015 // 1.5% per installment add-on
        }
    };

    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(value);
    };

    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value.replace(/\D/g, '');
        value = (Number(value) / 100).toFixed(2).replace('.', ',');
        value = value.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
        setAmount(value);
    };

    useEffect(() => {
        const numericAmount = Number(amount.replace(/\./g, '').replace(',', '.'));

        let totalRate = 0;

        if (method === 'debit') {
            totalRate = RATES.debit;
        } else if (method === 'pix') {
            totalRate = RATES.pix;
        } else {
            // Credit
            if (installments === 1) {
                totalRate = RATES.credit.spot;
            } else {
                totalRate = RATES.credit.spot + (RATES.credit.installment * (installments - 1));
            }
        }

        const fee = numericAmount * totalRate;
        const net = numericAmount - fee;

        setResult({ fee, net });
    }, [amount, method, installments]);

    return (
        <div className="w-full max-w-4xl mx-auto p-6 glass rounded-3xl shadow-xl border border-slate-100 dark:border-slate-800">
            <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                    Quanto custa vender com a Bloopi
                </h2>
                <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                    Simule suas vendas e descubra o quanto você vai receber. Sem taxas escondidas, transparência total.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
                {/* Inputs */}
                <div className="space-y-8">
                    <div>
                        <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                            Valor da Venda
                        </label>
                        <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">R$</span>
                            <input
                                type="text"
                                value={amount}
                                onChange={handleAmountChange}
                                className="w-full pl-12 pr-4 py-4 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xl font-bold text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-4">
                            Forma de Pagamento
                        </label>
                        <div className="grid grid-cols-3 gap-3">
                            <button
                                onClick={() => setMethod('credit')}
                                className={`flex flex-col items-center justify-center gap-2 p-4 rounded-xl border-2 transition-all ${method === 'credit'
                                    ? 'border-primary bg-primary/5 text-primary'
                                    : 'border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-800 text-slate-500 hover:border-primary/30'
                                    }`}
                            >
                                <CreditCard size={24} />
                                <span className="text-sm font-bold">Crédito</span>
                            </button>
                            <button
                                onClick={() => setMethod('debit')}
                                className={`flex flex-col items-center justify-center gap-2 p-4 rounded-xl border-2 transition-all ${method === 'debit'
                                    ? 'border-primary bg-primary/5 text-primary'
                                    : 'border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-800 text-slate-500 hover:border-primary/30'
                                    }`}
                            >
                                <CreditCard size={24} />
                                <span className="text-sm font-bold">Débito</span>
                            </button>
                            <button
                                onClick={() => setMethod('pix')}
                                className={`flex flex-col items-center justify-center gap-2 p-4 rounded-xl border-2 transition-all ${method === 'pix'
                                    ? 'border-primary bg-primary/5 text-primary'
                                    : 'border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-800 text-slate-500 hover:border-primary/30'
                                    }`}
                            >
                                <PixIcon size={24} />
                                <span className="text-sm font-bold flex items-center gap-1">Pix <PixIcon size={14} /></span>
                            </button>
                        </div>
                    </div>

                    {method === 'credit' && (
                        <div className="animate-in slide-in-from-top-2 fade-in">
                            <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                                Parcelamento
                            </label>
                            <select
                                value={installments}
                                onChange={(e) => setInstallments(Number(e.target.value))}
                                className="w-full px-4 py-4 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-lg font-medium text-slate-900 dark:text-white focus:ring-2 focus:ring-primary outline-none appearance-none cursor-pointer"
                            >
                                {[...Array(12)].map((_, i) => (
                                    <option key={i + 1} value={i + 1}>
                                        {i + 1}x {i === 0 ? '(À vista)' : ''}
                                    </option>
                                ))}
                            </select>
                        </div>
                    )}
                </div>

                {/* Results */}
                <div className="bg-slate-900 text-white rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-8 text-slate-300">
                            <Calculator size={24} />
                            <span className="font-medium">Resumo da Simulação</span>
                        </div>

                        <div className="space-y-6">
                            <div className="flex justify-between items-center pb-6 border-b border-white/10">
                                <span className="text-slate-300">Taxa Bloopi</span>
                                <span className="text-xl font-bold text-red-400">
                                    - {formatCurrency(result.fee)}
                                </span>
                            </div>

                            <div>
                                <span className="block text-slate-300 mb-2">Você recebe</span>
                                <span className="text-5xl font-bold text-green-400 tracking-tight">
                                    {formatCurrency(result.net)}
                                </span>
                                <p className="text-sm text-slate-400 mt-2">
                                    Disponível em {method === 'debit' || method === 'pix' ? '1 dia útil' : '30 dias'}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="relative z-10 mt-8 pt-6 border-t border-white/10">
                        <button className="w-full py-4 bg-white text-slate-900 rounded-xl font-bold hover:bg-slate-100 transition-colors">
                            Começar a Vender Agora
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeeCalculator;
