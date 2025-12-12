import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <div className="min-h-screen bg-background-light dark:bg-background-dark py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="mb-8">
                    <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
                        <span>Home</span>
                        <span>&gt;</span>
                        <span className="text-slate-900 dark:text-white font-bold">Fale conosco</span>
                    </div>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700 overflow-hidden flex flex-col lg:flex-row">
                    {/* Image Section */}
                    <div className="lg:w-1/2 relative min-h-[400px] lg:min-h-full">
                        <img
                            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                            alt="Customer Support"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-8">
                            <div className="text-white">
                                <p className="font-bold text-lg mb-2">A Bloopi está comprometida com a ética e a transparência.</p>
                                <p className="text-sm text-slate-300">
                                    Caso você precise reportar qualquer atividade inadequada, irregularidade ou violação de conduta, utilize nosso Canal de Denúncia.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Form Section */}
                    <div className="lg:w-1/2 p-8 md:p-12">
                        <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-4">
                            Bora conversar? Nossa equipe aguarda
                        </h1>
                        <p className="text-slate-500 dark:text-slate-400 mb-8">
                            Nossa equipe esta aqui para o que precisar quando tiver dúvidas em como usar a nossa plataforma ou em qualquer outra questão técnica.
                        </p>

                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Nome completo</label>
                                <input
                                    type="text"
                                    placeholder="Digite seu nome completo"
                                    className="w-full h-12 px-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">E-mail</label>
                                <input
                                    type="email"
                                    placeholder="Exemplo@gmail.com"
                                    className="w-full h-12 px-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Telefone</label>
                                <input
                                    type="tel"
                                    placeholder="(00) 0 0000-0000"
                                    className="w-full h-12 px-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Assunto</label>
                                <input
                                    type="text"
                                    placeholder="Digite o assunto"
                                    className="w-full h-12 px-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Mensagem</label>
                                <textarea
                                    rows={4}
                                    placeholder="Digite sua mensagem"
                                    className="w-full p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                                ></textarea>
                            </div>

                            <div className="flex items-start gap-3">
                                <input type="checkbox" className="mt-1 rounded border-slate-300 text-primary focus:ring-primary" />
                                <span className="text-sm text-slate-500">
                                    Eu concordo com os <a href="#" className="text-primary underline">Termos de uso</a> e <a href="#" className="text-primary underline">Política de privacidade</a> da Bloopi.
                                </span>
                            </div>

                            <button className="h-12 px-8 rounded-xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition-colors flex items-center gap-2">
                                Enviar mensagem
                                <Send size={18} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
