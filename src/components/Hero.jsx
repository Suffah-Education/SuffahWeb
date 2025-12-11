import React from 'react';
import { Play, BookOpen, GraduationCap, Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useCheckAuth } from '../hooks/useCheckAuth';

const Hero = () => {
    const { t } = useTranslation();
    const { handleGetStarted } = useCheckAuth();

    return (
        <section className="relative bg-linear-to-br from-blue-50 to-purple-50 py-2 lg:py-10 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-6">
                            <span className="text-yellow-500">✨</span>
                            <span className="text-blue-600 font-medium text-sm">{t('hero.welcome')}</span>
                        </div>

                        {/* FIX: Aggressive vertical spacing applied. Wrapper padding is py-16, h1 has leading-[2.0] and its own py-4 padding. */}
                        <div className="relative overflow-visible">
                            <h1 className="font-bold text-3xl sm:text-4xl lg:text-6xl leading-[2.5] py-4 overflow-visible">
                                <span className="block text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-500">
                                    {t('hero.title1')}
                                </span>

                                <span className="block text-transparent bg-clip-text bg-linear-to-r from-cyan-500 to-blue-600">
                                    {t('hero.title2')}
                                </span>
                            </h1>
                        </div>

                        <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto lg:mx-0">
                            {t('hero.subtitle')}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <button
                                onClick={handleGetStarted}
                                className="px-8 py-4 rounded-full bg-linear-to-r from-blue-500 to-cyan-500 text-white font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
                            >
                                {t('hero.startLearning')}
                            </button>
                            <button className="px-8 py-4 rounded-full bg-white text-blue-600 font-bold text-lg border-2 border-blue-100 shadow-sm hover:border-blue-200 flex items-center justify-center gap-2 transition-all">
                                {t('hero.watchDemo')} <Play size={20} fill="currentColor" />
                            </button>
                        </div>
                    </div>

                     {/* Right Content - Animated Card (Now Responsive) */}
                    <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
                        {/* Decorative elements */}
                        <div className="absolute -top-10 -right-10 w-48 h-48 md:w-72 md:h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                        <div className="absolute -bottom-10 -left-10 w-48 h-48 md:w-72 md:h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>

                        <div className="relative bg-white/80 backdrop-blur-lg rounded-3xl p-6 md:p-8 shadow-2xl border border-white/50 transform lg:rotate-2 hover:rotate-0 transition-all duration-500">
                            <div className="flex flex-col sm:flex-row items-start justify-between gap-4 mb-6 md:mb-8">
                                <div className="flex-1">
                                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 text-right leading-relaxed">
                                        بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
                                    </h3>
                                    <p className="text-gray-500 text-sm md:text-base text-right">
                                        ٱقْرَأْ بِٱسْمِ رَبِّكَ ٱلَّذِى خَلَقَ
                                    </p>
                                </div>
                                <div className="bg-blue-100 p-2.5 md:p-3 rounded-2xl flex-shrink-0">
                                    <BookOpen className="text-blue-600" size={28} />
                                </div>
                            </div>

                            <div className="space-y-3 md:space-y-4">
                                <div className="flex items-center gap-3 md:gap-4 bg-white p-3 md:p-4 rounded-xl shadow-sm">
                                    <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
                                        <GraduationCap className="text-green-600" size={20} />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-xs md:text-sm text-gray-500 truncate">
                                            {t('hero.activeStudents')}
                                        </p>
                                        <p className="font-bold text-gray-800 text-sm md:text-base">
                                            10,000+
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 md:gap-4 bg-white p-3 md:p-4 rounded-xl shadow-sm">
                                    <div className="bg-yellow-100 p-2 rounded-lg flex-shrink-0">
                                        <Star className="text-yellow-600" size={20} />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-xs md:text-sm text-gray-500 truncate">
                                            {t('hero.courseRating')}
                                        </p>
                                        <p className="font-bold text-gray-800 text-sm md:text-base">
                                            4.9/5.0
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CSS Animations */}
            <style>{`
                @keyframes blob {
                    0%, 100% {
                        transform: translate(0, 0) scale(1);
                    }
                    25% {
                        transform: translate(20px, -20px) scale(1.1);
                    }
                    50% {
                        transform: translate(-20px, 20px) scale(0.9);
                    }
                    75% {
                        transform: translate(20px, 20px) scale(1.05);
                    }
                }

                .animate-blob {
                    animation: blob 7s infinite;
                }

                .animation-delay-2000 {
                    animation-delay: 2s;
                }

                /* Additional mobile optimizations */
                @media (max-width: 640px) {
                    .animate-blob {
                        animation: blob 10s infinite;
                    }
                }
            `}</style>
        </section>
    );
};

export default Hero;
