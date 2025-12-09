import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { BookOpen, Clock, Users, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Courses = () => {
    const { t } = useTranslation();

    const courses = [
        {
            id: 1,
            title: t('courses.course1.title'),
            subtitle: t('courses.course1.subtitle'),
            price: t('courses.course1.price'),
            image: "/images/Basic-Qaida-Your-Gateway-to-the-Quran - Copy.jpg",
            students: t('courses.course1.students'),
            duration: t('courses.course1.duration')
        },
        {
            id: 2,
            title: t('courses.course2.title'),
            subtitle: t('courses.course2.subtitle'),
            price: t('courses.course2.price'),
            image: "/images/Nazera.png",
            students: t('courses.course2.students'),
            duration: t('courses.course2.duration')
        },
        {
            id: 3,
            title: t('courses.course3.title'),
            subtitle: t('courses.course3.subtitle'),
            price: t('courses.course3.price'),
            image: "/images/hifz-e-quran.jpg",
            students: t('courses.course3.students'),
            duration: t('courses.course3.duration')
        },
        {
            id: 4,
            title: t('courses.course4.title'),
            subtitle: t('courses.course4.subtitle'),
            price: t('courses.course4.price'),
            image: "/images/hq720.jpg",
            students: t('courses.course4.students'),
            duration: t('courses.course4.duration')
        },
        {
            id: 5,
            title: t('courses.course5.title'),
            subtitle: t('courses.course5.subtitle'),
            price: t('courses.course5.price'),
            image: "https://images.unsplash.com/photo-1519817650390-64a93db51149?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            students: t('courses.course5.students'),
            duration: t('courses.course5.duration')
        },
        {
            id: 6,
            title: t('courses.course6.title'),
            subtitle: t('courses.course6.subtitle'),
            price: t('courses.course6.price'),
            image: "/images/default.png",
            students: t('courses.course6.students'),
            duration: t('courses.course6.duration')
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            {/* Header */}
            <div className="bg-blue-600 py-20 text-center text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('courses.title')}</h1>
                <p className="text-blue-100 text-lg max-w-2xl mx-auto px-4">
                    {t('courses.subtitle')}
                </p>
            </div>

            {/* Filters */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
                <div className="bg-white rounded-xl shadow-lg p-4 flex flex-wrap gap-4 justify-center">
                    <button className="px-6 py-2 rounded-full bg-blue-600 text-white font-semibold shadow-md">{t('courses.allCourses')}</button>
                    <button className="px-6 py-2 rounded-full bg-gray-100 text-gray-600 font-semibold hover:bg-gray-200 transition-colors">{t('courses.quran')}</button>
                    <button className="px-6 py-2 rounded-full bg-gray-100 text-gray-600 font-semibold hover:bg-gray-200 transition-colors">{t('courses.arabic')}</button>
                    <button className="px-6 py-2 rounded-full bg-gray-100 text-gray-600 font-semibold hover:bg-gray-200 transition-colors">{t('courses.islamicStudies')}</button>
                </div>
            </div>

            {/* Course Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {courses.map((course) => (
                        <div key={course.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={course.image}
                                    alt={course.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-blue-600 shadow-sm">
                                    {course.price}
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                                <p className="text-gray-600 mb-4">{course.subtitle}</p>

                                <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                                    <div className="flex items-center gap-1">
                                        <Users size={16} />
                                        <span>{course.students} {t('faculty.students')}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Clock size={16} />
                                        <span>{course.duration}</span>
                                    </div>
                                </div>

                                <button className="w-full py-3 rounded-xl bg-blue-50 text-blue-600 font-bold hover:bg-blue-600 hover:text-white transition-all flex items-center justify-center gap-2 group-hover:gap-3">
                                    {t('courses.applyNow')} <ArrowRight size={18} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Courses;
