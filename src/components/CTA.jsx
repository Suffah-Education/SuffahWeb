import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useCheckAuth } from '../hooks/useCheckAuth';

const CTA = () => {
    const { t } = useTranslation();
    const { redirectUser } = useCheckAuth();
    return (
        <section className="py-20 bg-blue-600 relative overflow-hidden">
            {/* Background patterns */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
                <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white mix-blend-overlay filter blur-3xl"></div>
                <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-white mix-blend-overlay filter blur-3xl"></div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    {t('cta.title')}
                </h2>
                <p className="text-blue-100 text-xl mb-10 max-w-2xl mx-auto">
                    {t('cta.subtitle')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={redirectUser}
                        className="px-8 py-4 rounded-full bg-white text-blue-600 font-bold text-lg shadow-lg hover:bg-blue-50 transition-colors flex items-center justify-center gap-2"
                    >
                        {t('cta.getStarted')} <ArrowRight size={20} />
                    </button>
                    <button className="px-8 py-4 rounded-full bg-transparent border-2 border-white text-white font-bold text-lg hover:bg-white/10 transition-colors">
                        {t('cta.contactUs')}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CTA;
