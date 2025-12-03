import React from 'react';
import { Play, BookOpen, GraduationCap, Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useCheckAuth } from '../hooks/useCheckAuth';

const Hero = () => {
    const { t } = useTranslation();
    const { handleGetStarted } = useCheckAuth();

    return (
        <section className="relative bg-gradient-to-br from-blue-50 to-purple-50 py-2 lg:py-10 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-6">
                            <span className="text-yellow-500">✨</span>
                            <span className="text-blue-600 font-medium text-sm">{t('hero.welcome')}</span>
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 block mb-2">
                                {t('hero.title1')}
                            </span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
                                {t('hero.title2')}
                            </span>
                        </h1>

                        <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto lg:mx-0">
                            {t('hero.subtitle')}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <button
                                onClick={handleGetStarted}
                                className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
                            >
                                {t('hero.startLearning')}
                            </button>
                            <button className="px-8 py-4 rounded-full bg-white text-blue-600 font-bold text-lg border-2 border-blue-100 shadow-sm hover:border-blue-200 flex items-center justify-center gap-2 transition-all">
                                {t('hero.watchDemo')} <Play size={20} fill="currentColor" />
                            </button>
                        </div>
                    </div>

                    {/* Right Content - Animated Card */}
                    <div className="relative hidden lg:block">
                        {/* Decorative elements */}
                        <div className="absolute -top-10 -right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                        <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>

                        <div className="relative bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/50 transform rotate-2 hover:rotate-0 transition-all duration-500">
                            <div className="flex items-start justify-between mb-8">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-800 font-arabic mb-2">بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</h3>
                                    <p className="text-gray-500 font-arabic">رَّبِّ زِدْنِي عِلْمًا</p>
                                </div>
                                <div className="bg-blue-100 p-3 rounded-2xl">
                                    <BookOpen className="text-blue-600" size={32} />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm">
                                    <div className="bg-green-100 p-2 rounded-lg">
                                        <GraduationCap className="text-green-600" size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">{t('hero.activeStudents')}</p>
                                        <p className="font-bold text-gray-800">10,000+</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm">
                                    <div className="bg-yellow-100 p-2 rounded-lg">
                                        <Star className="text-yellow-600" size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">{t('hero.courseRating')}</p>
                                        <p className="font-bold text-gray-800">4.9/5.0</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
