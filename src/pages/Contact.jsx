import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
    const { t } = useTranslation();

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <div className="bg-blue-600 py-20 text-center text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('contactPage.title')}</h1>
                <p className="text-blue-100 text-lg max-w-2xl mx-auto px-4">
                    {t('contactPage.subtitle')}
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Contact Information Card */}
                    <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">{t('contactPage.getInTouch')}</h2>

                        <div className="space-y-8">
                            <div className="flex items-start gap-6">
                                <div className="bg-blue-100 p-4 rounded-2xl text-blue-600">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{t('contactPage.phone')}</h3>
                                    <p className="text-gray-600">+92 300 1234567</p>
                                    <p className="text-gray-600">+92 321 7654321</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="bg-purple-100 p-4 rounded-2xl text-purple-600">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{t('contactPage.email')}</h3>
                                    <p className="text-gray-600">info@suffaheducation.com</p>
                                    <p className="text-gray-600">admissions@suffaheducation.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="bg-green-100 p-4 rounded-2xl text-green-600">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{t('contactPage.location')}</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        123 Islamic Center Road,<br />
                                        Knowledge City, 54000,<br />
                                        Pakistan
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Send Message Form Card */}
                    <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">{t('contactPage.sendMessage')}</h2>

                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">{t('contactPage.firstName')}</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                                        placeholder="name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">{t('contactPage.lastName')}</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                                        placeholder="last name"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">{t('contactPage.emailAddress')}</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                                    placeholder="name@example.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">{t('contactPage.message')}</label>
                                <textarea
                                    rows="4"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                                    placeholder={t('contactPage.message')}
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 rounded-xl bg-blue-600 text-white font-bold text-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                            >
                                {t('contactPage.sendBtn')} <Send size={20} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Contact;
