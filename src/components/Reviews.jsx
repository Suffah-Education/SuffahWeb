import React from 'react';
import { Star, Quote } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Reviews = () => {
    const { t } = useTranslation();

    const reviews = [
        {
            name: t('reviews.student1.name'),
            role: t('reviews.student1.role'),
            content: t('reviews.student1.text'),
            rating: 5
        },
        {
            name: t('reviews.student2.name'),
            role: t('reviews.student2.role'), content: t('reviews.student2.text'),
            rating: 5
        },
        {
            name: t('reviews.student3.name'),
            role: t('reviews.student3.role'),
            content: t('reviews.student3.text'),
            rating: 5
        }
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('reviews.title')}</h2>
                    <p className="text-gray-600 text-lg">{t('reviews.subtitle')}</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <div key={index} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow relative">
                            <Quote className="absolute top-8 right-8 text-blue-100" size={40} />

                            <div className="flex items-center gap-4 mb-6">
                                {/* <img
                                    src={review.image}
                                    alt={review.name}
                                    className="w-14 h-14 rounded-full object-cover"
                                /> */}
                                <div>
                                    <h4 className="font-bold text-gray-900">{review.name}</h4>
                                    <p className="text-sm text-gray-500">{review.role}</p>
                                </div>
                            </div>

                            <div className="flex mb-4">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                                ))}
                            </div>

                            <p className="text-gray-600 leading-relaxed">
                                "{review.content}"
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;
