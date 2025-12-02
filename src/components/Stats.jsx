import React from 'react';
import { Users, GraduationCap, Award, Trophy } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Stats = () => {
    const { t } = useTranslation();

    const stats = [
        {
            icon: <Users size={40} className="text-purple-600" />,
            value: "10,000+",
            label: t('stats.students'),
            bg: "bg-cyan-400"
        },
        {
            icon: <GraduationCap size={40} className="text-yellow-600" />,
            value: "500+",
            label: t('stats.expertFaculty'),
            bg: "bg-blue-400"
        },
        {
            icon: <Award size={40} className="text-blue-600" />,
            value: "1,000+",
            label: t('stats.graduates'),
            bg: "bg-blue-400"
        },
        {
            icon: <Trophy size={40} className="text-red-500" />,
            value: "98%",
            label: t('stats.successRate'),
            bg: "bg-blue-400"
        }
    ];

    return (
        <section className="py-16 bg-gradient-to-b from-cyan-400 to-blue-400">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-white/10 backdrop-blur-md rounded-3xl p-8 text-center border border-white/20 hover:transform hover:-translate-y-2 transition-all duration-300">
                            <div className="bg-white w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 shadow-lg">
                                {stat.icon}
                            </div>
                            <h3 className="text-4xl font-bold text-white mb-2">{stat.value}</h3>
                            <p className="text-blue-50 font-medium text-lg">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
