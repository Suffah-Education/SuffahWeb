import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <span className="font-bold text-2xl">The Suffah Education</span>
                        </div>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            {t('footer.tagline')}
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                                <FaFacebook size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-400 transition-colors">
                                <FaTwitter size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 transition-colors">
                                <FaInstagram size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-700 transition-colors">
                                <FaLinkedin size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-bold text-lg mb-6">{t('footer.quickLinks')}</h3>
                        <ul className="space-y-4">
                            <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">{t('nav.home')}</Link></li>
                            <li><Link to="/courses" className="text-gray-400 hover:text-white transition-colors">{t('nav.courses')}</Link></li>
                            <li><Link to="/faculties" className="text-gray-400 hover:text-white transition-colors">{t('nav.faculties')}</Link></li>
                            <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">{t('nav.about')}</Link></li>
                            <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">{t('nav.contact')}</Link></li>
                            <li><Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">{t('footer.privacyPolicy')}</Link></li>
                            <li><Link to="/terms-conditions" className="text-gray-400 hover:text-white transition-colors">{t('footer.termsConditions')}</Link></li>
                        </ul>
                    </div>

                    {/* Courses */}
                    <div>
                        <h3 className="font-bold text-lg mb-6">{t('footer.popularCourses')}</h3>
                        <ul className="space-y-4">
                            <li><Link to="/courses" className="text-gray-400 hover:text-white transition-colors">{t('footer.quranMemorization')}</Link></li>
                            <li><Link to="/courses" className="text-gray-400 hover:text-white transition-colors">{t('footer.tajweedRules')}</Link></li>
                            <li><Link to="/courses" className="text-gray-400 hover:text-white transition-colors">{t('footer.islamicStudies')}</Link></li>
                            <li><Link to="/courses" className="text-gray-400 hover:text-white transition-colors">{t('footer.arabicLanguage')}</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-bold text-lg mb-6">{t('footer.contactUs')}</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-400">
                                <MapPin size={20} className="mt-1 flex-shrink-0" />
                                <span>{t('footer.location')}</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Phone size={20} className="flex-shrink-0" />
                                <span>+91 98500 78899</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Mail size={20} className="flex-shrink-0" />
                                <span>info@metafuturetechnology.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} The Suffah Education. All rights reserved. | {t('footer.developedBy')} <span className="text-blue-400 font-semibold">{t('footer.company')}</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
