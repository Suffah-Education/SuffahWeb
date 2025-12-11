import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutStory = () => {
    const { t } = useTranslation();

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* English Story */}
                    <div className="space-y-6">
                        <div className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">
                            {t('about.ourStory')}
                        </div>
                        <h2 className="text-4xl font-bold text-gray-900">
                            {t('about.title')}
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            {t('about.text1')}
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            {t('about.text2')}
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            {t('about.text3')}
                        </p>
                        {/* <button className="text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-2">
                            {t('about.readMore')} &rarr;
                        </button> */}
                    </div>

                    {/* Urdu Story */}
                    <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 text-right" dir="rtl">
                        <h2 className="text-3xl font-bold text-blue-900 mb-6 font-urdu">
                            {t('about.urduTitle')}
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6 font-urdu">
                            {t('about.urduText1')}
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed font-urdu">
                            {t('about.urduText2')}
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed font-urdu">
                            {t('about.urduText3')}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutStory;
