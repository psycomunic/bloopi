import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials = () => {
    const testimonials = [
        {
            name: "Carlos Silva",
            role: "CEO da TechStore",
            text: "A Bloopi mudou o jogo para nós. A taxa de aprovação subiu 20% no primeiro mês."
        },
        {
            name: "Ana Oliveira",
            role: "Fundadora da ModaFit",
            text: "O suporte é incrível e a integração foi super rápida. Recomendo para todos."
        },
        {
            name: "Pedro Santos",
            role: "Diretor da GameZone",
            text: "As taxas são justas e o recebimento é pontual. Melhor parceiro de pagamentos."
        }
    ];

    return (
        <div className="min-h-screen bg-background-light dark:bg-background-dark py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">
                        O que dizem nossos clientes
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Histórias reais de quem cresceu com a Bloopi.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((item, i) => (
                        <div key={i} className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-lg border border-slate-100 dark:border-slate-700 relative">
                            <Quote size={40} className="text-primary/20 absolute top-6 right-6" />
                            <p className="text-slate-600 dark:text-slate-300 mb-6 italic">"{item.text}"</p>
                            <div>
                                <div className="font-bold text-slate-900 dark:text-white">{item.name}</div>
                                <div className="text-sm text-primary">{item.role}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
