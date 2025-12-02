import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutStory from '../components/AboutStory';
import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation();

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <div className="bg-blue-600 py-20 text-center text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('aboutPage.title')}</h1>
                <p className="text-blue-100 text-lg max-w-2xl mx-auto px-4">
                    {t('aboutPage.subtitle')}
                </p>
            </div>

            <AboutStory />

            <div className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('aboutPage.missionTitle')}</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                {t('aboutPage.missionText')}
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-gray-700">
                                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                                    {t('aboutPage.authenticKnowledge')}
                                </li>
                                <li className="flex items-center gap-3 text-gray-700">
                                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                                    {t('aboutPage.modernTeaching')}
                                </li>
                                <li className="flex items-center gap-3 text-gray-700">
                                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                                    {t('aboutPage.characterBuilding')}
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('aboutPage.visionTitle')}</h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                {t('aboutPage.visionText')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default About;
