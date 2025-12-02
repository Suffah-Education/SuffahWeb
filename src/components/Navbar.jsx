import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const { t, i18n } = useTranslation();

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
        <nav className="sticky top-0 z-50 bg-white shadow-sm" dir={i18n.language === 'ur' ? 'rtl' : 'ltr'}>
            {/* Top Urdu Marquee Banner */}
            <div className="bg-blue-600 text-white text-center py-3 text-xl font-urdu tracking-wide shadow-sm">
                ✨ تم میں سب سے بہتر وہ ہے جو قرآن کو سیکھے اور سکھائے ✨
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center gap-2">
                        <img src="/images/Logo.png" alt="Logo" className="h-15 w-15" />
                        <span className="font-bold text-3xl text-gray-800">The Suffah Education</span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
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

                    {/* Buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Link
                            to="/register"
                            className="px-6 py-2 rounded-full border-2 border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition-colors"
                        >
                            {t('nav.register')}

                        </Link>
                        <button
                            onClick={toggleLanguage}
                            className="px-4 py-2 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
                        >
                            {i18n.language === 'en' ? 'اردو' : 'English'}
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600 hover:text-gray-900 focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {links.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`block px-3 py-2 rounded-md text-base font-medium ${isActive(link.path)
                                    ? 'text-blue-600 bg-blue-50'
                                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                                    }`}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="mt-4 flex flex-col space-y-2 px-3">
                            <Link
                                to="/register"
                                className="w-full text-center px-6 py-2 rounded-full border-2 border-blue-600 text-blue-600 font-semibold hover:bg-blue-50"
                                onClick={() => setIsOpen(false)}
                            >
                                {t('register')}
                            </Link>
                            <button
                                onClick={toggleLanguage}
                                className="w-full px-4 py-2 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700"
                            >
                                {i18n.language === 'en' ? 'اردو' : 'English'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

