import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState('');

    const toggleChat = () => setIsOpen(!isOpen);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (message.trim()) {
            const phoneNumber = '5531971905758';
            const encodedMessage = encodeURIComponent(message);
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

            window.open(whatsappUrl, '_blank');
            setMessage('');
            setIsOpen(false);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            {/* Chat Window */}
            {isOpen && (
                <div className="mb-4 w-80 rounded-2xl bg-white dark:bg-slate-900 shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden animate-in slide-in-from-bottom-5 fade-in duration-300">
                    {/* Header */}
                    <div className="bg-primary p-4 flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                            <h3 className="font-bold text-white">Atendimento Bloopi</h3>
                        </div>
                        <button
                            onClick={toggleChat}
                            className="text-white/80 hover:text-white transition-colors"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    {/* Messages Area */}
                    <div className="h-80 p-4 overflow-y-auto bg-slate-50 dark:bg-slate-950 flex flex-col gap-3">
                        <div className="bg-white dark:bg-slate-900 p-3 rounded-2xl rounded-tl-none shadow-sm border border-slate-100 dark:border-slate-800 self-start max-w-[85%]">
                            <p className="text-sm text-slate-600 dark:text-slate-300">
                                Olá! 👋 Como podemos ajudar você hoje?
                            </p>
                        </div>
                    </div>

                    {/* Input Area */}
                    <form onSubmit={handleSubmit} className="p-3 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Digite sua mensagem..."
                                className="flex-1 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white text-sm rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                            />
                            <button
                                type="submit"
                                className="p-2 bg-primary text-white rounded-full hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                disabled={!message.trim()}
                            >
                                <Send size={18} />
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {/* Toggle Button */}
            <button
                onClick={toggleChat}
                className="group flex items-center justify-center w-14 h-14 rounded-full bg-white text-primary shadow-lg shadow-blue-500/30 hover:bg-slate-50 hover:scale-110 transition-all duration-300"
            >
                {isOpen ? (
                    <X size={28} className="transition-transform duration-300 group-hover:rotate-90" />
                ) : (
                    <img
                        src="/whatsapp.png"
                        alt="WhatsApp"
                        className="w-full h-full object-cover rounded-full transition-transform duration-300"
                    />
                )}
            </button>
        </div>
    );
};

export default ChatWidget;
