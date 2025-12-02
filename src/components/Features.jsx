import React from 'react';
import { Book, Monitor, Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Features = () => {
    const { t } = useTranslation();

    const features = [
        {
            icon: <div className="bg-pink-100 p-4 rounded-full"><Book className="text-pink-500" size={32} /></div>,
            title: t('features.quran.title'),
            description: t('features.quran.description')
        },
        {
            icon: <div className="bg-green-100 p-4 rounded-full"><Monitor className="text-green-500" size={32} /></div>,
            title: t('features.academic.title'),
            description: t('features.academic.description')
        },
        {
            icon: <div className="bg-purple-100 p-4 rounded-full"><Heart className="text-purple-500" size={32} /></div>,
            title: t('features.facilities.title'),
            description: t('features.facilities.description')
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('features.title')}</h2>
                    <p className="text-gray-600 text-lg">{t('features.subtitle')}</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-shadow text-center group">
                            <div className="inline-block mb-6 transform group-hover:scale-110 transition-transform">
                                {feature.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
