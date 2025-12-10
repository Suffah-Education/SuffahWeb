import React from 'react';
import { Play, BookOpen, GraduationCap, Star, Users, Clock } from 'lucide-react';

const Hero = () => {
  const courses = [
    {
      id: 1,
      title: "Basic Qaida Learning",
      subtitle: "Learn to read Qaida From Basics",
      price: "499Rs/mo",
      students: "120",
      duration: "6 Months",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Nazera-e-Quran",
      subtitle: "Complete Quran nazera program",
      price: "499Rs/mo",
      students: "85",
      duration: "3 Years",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      title: "Hifz-e-Quran",
      subtitle: "Complete Hifz-e-Quran Program",
      price: "599Rs/mo",
      students: "200",
      duration: "1 Year",
      color: "from-green-500 to-teal-500"
    },
    {
      id: 4,
      title: "Tajweed-e-Quran(تجویدِ قرآن)",
      subtitle: "Advanced pronunciation rules",
      price: "499Rs/mo",
      students: "150",
      duration: "1 Year",
      color: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      title: "Islamic Studies",
      subtitle: "Fundamentals of Islamic Knowledge",
      price: "399Rs/mo",
      students: "95",
      duration: "4 Months",
      color: "from-indigo-500 to-purple-500"
    },
    {
      id: 6,
      title: "Seerah Studies",
      subtitle: "Life of Prophet Muhammad (PBUH)",
      price: "299Rs/mo",
      students: "180",
      duration: "3 Months",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  // Duplicate courses for seamless loop
  const duplicatedCourses = [...courses, ...courses];

  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-purple-50 py-8 lg:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-6">
              <span className="text-yellow-500">✨</span>
              <span className="text-blue-600 font-medium text-sm">Welcome to Islamic Learning</span>
            </div>

            <div className="relative overflow-visible">
              <h1 className="font-bold text-3xl sm:text-4xl lg:text-6xl leading-tight mb-6">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                  Learn Quran Online
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
                  From Anywhere
                </span>
              </h1>
            </div>

            <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto lg:mx-0">
              Start your journey of Islamic education with expert teachers and comprehensive courses
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
              >
                Start Learning
              </button>
              <button className="px-8 py-4 rounded-full bg-white text-blue-600 font-bold text-lg border-2 border-blue-100 shadow-sm hover:border-blue-200 flex items-center justify-center gap-2 transition-all">
                Watch Demo <Play size={20} fill="currentColor" />
              </button>
            </div>
          </div>

          {/* Right Content - Animated Card */}
          <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-48 h-48 md:w-72 md:h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 md:w-72 md:h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>

            <div className="relative bg-white/80 backdrop-blur-lg rounded-3xl p-6 md:p-8 shadow-2xl border border-white/50 transform lg:rotate-2 hover:rotate-0 transition-all duration-500">
              <div className="flex flex-col sm:flex-row items-start justify-between gap-4 mb-6 md:mb-8">
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 text-right leading-relaxed">
                    بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
                  </h3>
                  <p className="text-gray-500 text-sm md:text-base text-right">
                    ٱقْرَأْ بِٱسْمِ رَبِّكَ ٱلَّذِى خَلَقَ
                  </p>
                </div>
                <div className="bg-blue-100 p-2.5 md:p-3 rounded-2xl flex-shrink-0">
                  <BookOpen className="text-blue-600" size={28} />
                </div>
              </div>

              <div className="space-y-3 md:space-y-4">
                <div className="flex items-center gap-3 md:gap-4 bg-white p-3 md:p-4 rounded-xl shadow-sm">
                  <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
                    <GraduationCap className="text-green-600" size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs md:text-sm text-gray-500 truncate">Active Students</p>
                    <p className="font-bold text-gray-800 text-sm md:text-base">10,000+</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 md:gap-4 bg-white p-3 md:p-4 rounded-xl shadow-sm">
                  <div className="bg-yellow-100 p-2 rounded-lg flex-shrink-0">
                    <Star className="text-yellow-600" size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs md:text-sm text-gray-500 truncate">Course Rating</p>
                    <p className="font-bold text-gray-800 text-sm md:text-base">4.9/5.0</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Courses Slider Section */}
        <div className="mt-12">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
            Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Popular Courses</span>
          </h3>
          
          {/* Infinite Scroll Container */}
          <div className="slider-container">
            <div className="slider-track">
              {duplicatedCourses.map((course, index) => (
                <div
                  key={`${course.id}-${index}`}
                  className="slider-item"
                >
                  <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 overflow-hidden h-full">
                    {/* Card Header with Gradient */}
                    <div className={`bg-gradient-to-r ${course.color} p-5 text-white`}>
                      <h4 className="text-lg font-bold mb-1 line-clamp-2">{course.title}</h4>
                      <p className="text-white/90 text-sm line-clamp-2">{course.subtitle}</p>
                    </div>

                    {/* Card Body */}
                    <div className="p-4">
                      {/* Price */}
                      <div className="text-center mb-4">
                        <span className="text-2xl font-bold text-gray-800">{course.price}</span>
                      </div>

                      {/* Stats */}
                      <div className="space-y-3 mb-4">
                        <div className="flex items-center justify-between bg-gray-50 p-2.5 rounded-lg">
                          <div className="flex items-center gap-2">
                            <div className="bg-blue-100 p-1.5 rounded-lg">
                              <Users className="text-blue-600" size={16} />
                            </div>
                            <span className="text-gray-600 font-medium text-xs">Students</span>
                          </div>
                          <span className="font-bold text-gray-800 text-xs">{course.students}</span>
                        </div>

                        <div className="flex items-center justify-between bg-gray-50 p-2.5 rounded-lg">
                          <div className="flex items-center gap-2">
                            <div className="bg-green-100 p-1.5 rounded-lg">
                              <Clock className="text-green-600" size={16} />
                            </div>
                            <span className="text-gray-600 font-medium text-xs">Duration</span>
                          </div>
                          <span className="font-bold text-gray-800 text-xs">{course.duration}</span>
                        </div>
                      </div>

                      {/* Apply Button */}
                      <button className={`w-full py-2.5 rounded-lg font-bold text-sm text-white bg-gradient-to-r ${course.color} hover:shadow-lg transform hover:scale-105 transition-all duration-300`}>
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(20px, -20px) scale(1.1);
          }
          50% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          75% {
            transform: translate(20px, 20px) scale(1.05);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        /* Slider Styles */
        .slider-container {
          position: relative;
          width: 100%;
          overflow: hidden;
          padding: 10px 0;
        }

        .slider-track {
          display: flex;
          gap: 1.5rem;
          animation: scroll 35s linear infinite;
          width: max-content;
        }

        .slider-track:hover {
          animation-play-state: paused;
        }

        .slider-item {
          flex: 0 0 auto;
          width: 280px;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        /* Responsive adjustments */
        @media (max-width: 640px) {
          .slider-item {
            width: 260px;
          }
          
          .slider-track {
            gap: 1rem;
            animation: scroll 30s linear infinite;
          }
        }

        @media (min-width: 641px) and (max-width: 1024px) {
          .slider-item {
            width: 270px;
          }
        }

        /* Line clamp utilities */
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Additional mobile optimizations */
        @media (max-width: 640px) {
          .animate-blob {
            animation: blob 10s infinite;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;