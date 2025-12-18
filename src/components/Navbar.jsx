import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useCheckAuth } from '../hooks/useCheckAuth';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const { t, i18n } = useTranslation();
    const { redirectUser } = useCheckAuth();

    const isRTL = i18n.language === 'ur';

    // Auto apply Urdu font + RTL on language switch
    useEffect(() => {
        if (i18n.language === "ur") {
            document.body.classList.add("font-urdu");
            document.body.setAttribute("dir", "rtl");
        } else {
            document.body.classList.remove("font-urdu");
            document.body.setAttribute("dir", "ltr");
        }
    }, [i18n.language]);

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'ur' : 'en';
        i18n.changeLanguage(newLang);
    };

    const links = [
        { name: t('nav.home'), path: '/' },
        { name: t('nav.courses'), path: '/courses' },
        { name: t('nav.faculties'), path: '/faculties' },
        { name: t('nav.services'), path: '/services' },
        { name: t('nav.about'), path: '/about' },
        { name: t('nav.contact'), path: '/contact' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="sticky top-0 z-50 bg-white shadow-sm" dir={isRTL ? 'rtl' : 'ltr'}>
            {/* Top Urdu Marquee Banner */}
            <div className="bg-blue-600 text-white text-center py-3 text-xl font-urdu tracking-wide shadow-sm">
                ✨ تم میں سب سے بہتر وہ ہے جو قرآن کو سیکھے اور سکھائے ✨
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Mobile menu button - LEFT for English, RIGHT for Urdu */}
                    {!isRTL && (
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-gray-600 hover:text-gray-900 focus:outline-none p-2"
                                aria-label="Toggle menu"
                            >
                                {isOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    )}

                    {/* Logo & Brand Name - CENTERED on mobile */}
                    <div className="flex-1 md:flex-initial flex items-center justify-center md:justify-start gap-3">
                        <img src="/images/Logo.png" alt="Logo" className="h-12 w-12 sm:h-14 sm:w-14" />
                        <span className="font-bold text-xl sm:text-2xl lg:text-3xl text-gray-800 whitespace-nowrap">
                            The Suffah Education
                        </span>
                    </div>

                    {/* Mobile menu button - RIGHT for Urdu */}
                    {isRTL && (
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-gray-600 hover:text-gray-900 focus:outline-none p-2"
                                aria-label="Toggle menu"
                            >
                                {isOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    )}

                    {/* Desktop Menu */}
                    <div className={`hidden md:flex items-center ${isRTL ? 'space-x-reverse space-x-8' : 'space-x-8'}`}>
                        {links.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`text-gray-600 hover:text-blue-600 font-medium transition-colors ${isActive(link.path) ? 'text-blue-600 border-b-2 border-blue-600' : ''
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop Buttons */}
                    <div className={`hidden md:flex items-center ${isRTL ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
                        <button
                            onClick={redirectUser}
                            className="px-6 py-2 rounded-full border-2 border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition-colors"
                        >
                            {t('nav.register')}
                        </button>
                        <button
                            onClick={toggleLanguage}
                            className="px-4 py-2 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
                        >
                            {i18n.language === 'en' ? 'اردو' : 'English'}
                        </button>
                    </div>
                </div>

                {/* Mobile Buttons Row - Below Main Navbar */}
                <div className={`md:hidden flex items-center justify-center gap-3 pb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <button
                        onClick={redirectUser}
                        className="px-5 py-2 rounded-full border-2 border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition-colors text-sm"
                    >
                        {t('nav.register')}
                    </button>
                    <button
                        onClick={toggleLanguage}
                        className="px-4 py-2 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors text-sm"
                    >
                        {i18n.language === 'en' ? 'اردو' : 'English'}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Drawer - Full Height with Smooth Animation */}
            <div
                className={`md:hidden fixed inset-0 top-[136px] bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={() => setIsOpen(false)}
            >
                <div
                    className={`bg-white h-full shadow-2xl transition-transform duration-300 ease-in-out ${isRTL
                            ? `${isOpen ? 'translate-x-0' : 'translate-x-full'} ml-auto w-[85%] sm:w-[70%]`
                            : `${isOpen ? 'translate-x-0' : '-translate-x-full'} mr-auto w-[85%] sm:w-[70%]`
                        }`}
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Close Button */}
                    <div className={`flex ${isRTL ? 'justify-start' : 'justify-end'} p-4 border-b`}>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-gray-600 hover:text-gray-900 focus:outline-none p-2 rounded-full hover:bg-gray-100 transition-colors"
                            aria-label="Close menu"
                        >
                            <X size={28} />
                        </button>
                    </div>

                    {/* Menu Items - Buttons Removed from Here */}
                    <div className="px-6 pt-6 pb-8 space-y-2 overflow-y-auto h-[calc(100%-80px)]">
                        {links.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`block px-4 py-3 rounded-lg text-lg font-medium transition-all ${isActive(link.path)
                                        ? 'text-blue-600 bg-blue-50 shadow-sm'
                                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                                    } ${isRTL ? 'text-right' : 'text-left'}`}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;