import React, { useMemo } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FacultyCard from '../components/FacultyCard';
import { useTranslation } from 'react-i18next';

const Faculties = () => {
    const { t } = useTranslation();

    // Define all faculty images from /public/images
    // This list should include all faculty member images
    const facultyImages = [
        'Aalim Musaib.JPG',
        'Mufti Musaddik.jpeg',
        'Hafiz Mudassir.jpeg',
        'Aalim Muhsin.jpeg',
        'Hafiz Muzammil.jpeg',
        'Maulana Rashid.jpeg'
    ];

    // Dynamically generate faculty members from images
    const facultyMembers = useMemo(() => {
        return facultyImages.map((imageFile, index) => {
            // Extract name from filename (remove extension and format)
            const nameWithoutExt = imageFile.replace(/\.(jpg|jpeg|png|webp|JPG|JPEG|PNG|WEBP)$/i, '');
            // Capitalize first letter
            const displayName = nameWithoutExt.charAt(0).toUpperCase() + nameWithoutExt.slice(1);

            // Map to translation keys (faculty1, faculty2, etc.)
            const facultyKey = `faculty${index + 1}`;

            return {
                name: displayName,
                title: t(`faculties.${facultyKey}.title`),
                image: `/images/${imageFile}`,
                badges: t(`faculties.${facultyKey}.badges`, { returnObjects: true }),
                stats: {
                    students: t(`faculties.${facultyKey}.students`),
                    rating: t(`faculties.${facultyKey}.rating`)
                }
            };
        });
    }, [t]);

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <div className="bg-blue-600 py-20 text-center text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('faculties.title')}</h1>
                <p className="text-blue-100 text-lg max-w-2xl mx-auto px-4">
                    {t('faculties.subtitle')}
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {facultyMembers.map((faculty, index) => (
                        <FacultyCard key={index} {...faculty} />
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Faculties;
