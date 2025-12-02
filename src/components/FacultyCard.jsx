import React from 'react';
import { Star, Linkedin, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const FacultyCard = ({ name, title, image, badges, stats }) => {
    const { t } = useTranslation();

    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all border border-gray-100 text-center">
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4 border-4 border-blue-50">
                <img src={image} alt={name} className="w-full h-full object-cover" />
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-1">{name}</h3>
            <p className="text-blue-600 font-medium text-sm mb-4">{title}</p>

            <div className="flex flex-wrap justify-center gap-2 mb-6">
                {badges.map((badge, index) => (
                    <span key={index} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium">
                        {badge}
                    </span>
                ))}
            </div>

            <div className="grid grid-cols-2 gap-2 mb-6 bg-gray-50 rounded-xl p-3">
                <div className="text-center">
                    <p className="font-bold text-gray-900">{stats.students}</p>
                    <p className="text-xs text-gray-500">{t('faculty.students')}</p>
                </div>
                <div className="text-center border-l border-gray-200">
                    <div className="flex items-center justify-center gap-1 font-bold text-gray-900">
                        {stats.rating} <Star size={12} className="text-yellow-400 fill-current" />
                    </div>
                    <p className="text-xs text-gray-500">{t('faculty.rating')}</p>
                </div>
            </div>

            <div className="flex justify-center gap-4">
                <button className="text-gray-400 hover:text-blue-600 transition-colors">
                    <Linkedin size={20} />
                </button>
                <button className="text-gray-400 hover:text-blue-600 transition-colors">
                    <Mail size={20} />
                </button>
            </div>
        </div>
    );
};

export default FacultyCard;
