import React from 'react';
import { Star, Linkedin, Mail, Award, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const FacultyHighlight = () => {
    const { t } = useTranslation();

    return (
        <section className="py-20 bg-gray-50">
            <div className=" mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-2">{t('faculty.title')}</h2>
                    <p className="text-gray-600">{t('faculty.subtitle')}</p>
                </div>

                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        {/* Image */}
                        <div className="w-full md:w-1/3 text-center">
                            <div className="w-48 h-48 mx-auto rounded-3xl overflow-hidden bg-gray-200 mb-4">
                                <img
                                    src="/images/Mufti Musaddik.jpeg"
                                    alt="Faculty"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="w-full md:w-2/3">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900">{t('faculty.name')}</h3>
                                    <p className="text-blue-600 font-medium">{t('faculty.role')}</p>
                                </div>
                                <div className="bg-blue-50 px-4 py-2 rounded-lg flex items-center gap-2 text-blue-700 font-semibold">
                                    <Award size={20} />
                                    8 {t('faculty.experience')}
                                </div>
                            </div>

                            <div className="flex items-center gap-2 mb-6">
                                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">Qaida</span>
                                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">Tajweed</span>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                                <div className="bg-green-50 p-4 rounded-xl">
                                    <div className="flex items-center gap-2 mb-1">
                                        <Users className="text-green-600" size={20} />
                                        <span className="font-bold text-gray-900">33</span>
                                    </div>
                                    <p className="text-sm text-gray-600">{t('faculty.graduates')}</p>
                                </div>
                                <div className="bg-purple-50 p-4 rounded-xl">
                                    <div className="flex items-center gap-2 mb-1">
                                        <Star className="text-purple-600" size={20} />
                                        <span className="font-bold text-gray-900">15</span>
                                    </div>
                                    <p className="text-sm text-gray-600">{t('faculty.completedQuran')}</p>
                                </div>
                                <div className="bg-yellow-50 p-4 rounded-xl">
                                    <div className="flex items-center gap-2 mb-1">
                                        <Star className="text-yellow-600" size={20} />
                                        <span className="font-bold text-gray-900">18</span>
                                    </div>
                                    <p className="text-sm text-gray-600">{t('faculty.completedQaida')}</p>
                                </div>
                            </div>

                            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-gray-100">
                                <div className="flex items-center gap-2 text-gray-600">
                                    <Mail size={18} />
                                    <span className="text-sm">mohammad.Musaib@institute.suffah</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <Star key={star} size={16} className="text-yellow-400 fill-current" />
                                    ))}
                                </div>
                                <div className="flex items-center gap-2 text-blue-700 font-medium cursor-pointer hover:text-blue-800">
                                    <Linkedin size={18} />
                                    <span>LinkedIn</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* All Teachers Button */}
                <div className="text-center mt-8">
                    <Link
                        to="/faculties"
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                        {t('faculty.allTeachers')}
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FacultyHighlight;
