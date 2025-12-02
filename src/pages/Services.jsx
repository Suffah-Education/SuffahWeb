import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Video, Book, Users, Globe, Award, Calendar } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Services = () => {
    const { t } = useTranslation();

    const services = [
        {
            icon: <Video size={40} className="text-blue-600" />,
            title: t('services.service1.title'),
            description: t('services.service1.description')
        },
        {
            icon: <Book size={40} className="text-purple-600" />,
            title: t('services.service2.title'),
            description: t('services.service2.description')
        },
        {
            icon: <Users size={40} className="text-green-600" />,
            title: t('services.service3.title'),
            description: t('services.service3.description')
        },
        {
            icon: <Globe size={40} className="text-cyan-600" />,
            title: t('services.service4.title'),
            description: t('services.service4.description')
        },
        {
            icon: <Award size={40} className="text-yellow-600" />,
            title: t('services.service5.title'),
            description: t('services.service5.description')
        },
        {
            icon: <Calendar size={40} className="text-red-600" />,
            title: t('services.service6.title'),
            description: t('services.service6.description')
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <div className="bg-gray-900 py-20 text-center text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('services.title')}</h1>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto px-4">
                    {t('services.subtitle')}
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {services.map((service, index) => (
                        <div key={index} className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-gray-50 transition-colors">
                            <div className="bg-gray-100 p-6 rounded-full mb-6">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Services;
