import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Features from '../components/Features';
import FacultyHighlight from '../components/FacultyHighlight';
import CTA from '../components/CTA';
import AboutStory from '../components/AboutStory';
import Reviews from '../components/Reviews';
import Footer from '../components/Footer';
import FloatingCourseCarousel from '../components/FloatingCourseCarousel';


const Home = () => {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <Hero />
            <Stats />
            <Features />
            <FacultyHighlight />
            <CTA />
            <AboutStory />
            <Reviews />
            <Footer />
            <FloatingCourseCarousel />
        </div>
    );
};

export default Home;
