import React, { useState } from 'react';
import { X, Users, Clock } from 'lucide-react';

const FloatingCourseCarousel = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const scrollContainerRef = React.useRef(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const courses = [
    {
      title: "Basic Qaida Learning",
      subtitle: "Learn to read Qaida From Basics",
      price: "499Rs/mo",
      students: "120",
      duration: "6 Months",
      image: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=400&h=300&fit=crop",
      color: "from-emerald-500 to-teal-600"
    },
    {
      title: "Nazera-e-Quran",
      subtitle: "Complete Quran nazera program",
      price: "499Rs/mo",
      students: "85",
      duration: "3 Years",
      image: "https://images.unsplash.com/photo-1610458923001-76bf47d1e513?w=400&h=300&fit=crop",
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "Hifz-e-Quran",
      subtitle: "Complete Hifz-e-Quran Program",
      price: "599Rs/mo",
      students: "200",
      duration: "1 Year",
      image: "https://images.unsplash.com/photo-1591604021695-0c69b7c05981?w=400&h=300&fit=crop",
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Tajweed-e-Quran(تجویدِ قرآن)",
      subtitle: "Advanced pronunciation rules",
      price: "499Rs/mo",
      students: "150",
      duration: "1 Year",
      image: "https://images.unsplash.com/photo-1584286595398-a59511e0649f?w=400&h=300&fit=crop",
      color: "from-amber-500 to-orange-600"
    },
    {
      title: "Islamic Studies",
      subtitle: "Fundamentals of Islamic Knowledge",
      price: "399Rs/mo",
      students: "95",
      duration: "4 Months",
      image: "https://images.unsplash.com/photo-1604608672516-f1b9b1a0b68e?w=400&h=300&fit=crop",
      color: "from-cyan-500 to-blue-600"
    },
    {
      title: "Seerah Studies",
      subtitle: "Life of Prophet Muhammad (PBUH)",
      price: "299Rs/mo",
      students: "180",
      duration: "3 Months",
      image: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=400&h=300&fit=crop",
      color: "from-rose-500 to-red-600"
    }
  ];

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 shadow-2xl border-t border-emerald-500 max-h-[50vh] overflow-hidden">
      {/* Close Button */}
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-1 right-1 z-10 bg-white/10 hover:bg-white/20 text-white rounded-full p-1.5 transition-all duration-300 backdrop-blur-sm"
      >
        <X size={14} className="sm:w-4 sm:h-4" />
      </button>

      {/* Header */}
      <div className="text-center py-1 sm:py-1.5 px-2 sm:px-3 bg-gradient-to-r from-emerald-600 to-teal-600">
        <h3 className="text-white font-semibold text-xs sm:text-sm">🎓 Explore Our Courses</h3>
      </div>

      {/* Scrolling Container */}
      <div 
        ref={scrollContainerRef}
        className="overflow-x-auto overflow-y-hidden py-1.5 sm:py-2 scrollbar-hide cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <div className={`${isDragging ? '' : 'animate-scroll-mobile sm:animate-scroll'} flex gap-2 sm:gap-3 px-2 sm:px-3`}>
          {/* Double the courses for seamless loop */}
          {[...courses, ...courses].map((course, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-44 sm:w-56 bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              {/* Course Image */}
              <div className="relative h-20 sm:h-24 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-90`}></div>
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover mix-blend-overlay"
                />
                <div className="absolute top-1.5 sm:top-2 right-1.5 sm:right-2 bg-white text-emerald-600 font-bold px-1.5 sm:px-2 py-0.5 rounded-full text-[10px] sm:text-xs shadow-lg">
                  {course.price}
                </div>
              </div>

              {/* Course Content */}
              <div className="p-2 sm:p-3">
                <h4 className="font-bold text-xs sm:text-sm text-gray-800 mb-0.5 line-clamp-1">
                  {course.title}
                </h4>
                <p className="text-gray-600 text-[10px] sm:text-xs mb-1.5 sm:mb-2 line-clamp-1">
                  {course.subtitle}
                </p>

                {/* Stats */}
                <div className="flex items-center justify-between text-[10px] sm:text-xs text-gray-500 mb-1.5 sm:mb-2">
                  <div className="flex items-center gap-0.5 sm:gap-1">
                    <Users size={10} className="text-emerald-600 sm:w-3 sm:h-3" />
                    <span>{course.students}</span>
                  </div>
                  <div className="flex items-center gap-0.5 sm:gap-1">
                    <Clock size={10} className="text-blue-600 sm:w-3 sm:h-3" />
                    <span>{course.duration}</span>
                  </div>
                </div>

                {/* Enroll Button */}
                <button className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold py-1 sm:py-1.5 text-[10px] sm:text-xs rounded-md hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 shadow-md hover:shadow-lg">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-mobile {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
        }

        .animate-scroll-mobile {
          animation: scroll-mobile 30s linear infinite;
        }

        .animate-scroll:hover,
        .animate-scroll-mobile:hover {
          animation-play-state: paused;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .cursor-grab {
          cursor: grab;
        }

        .cursor-grabbing,
        .active\:cursor-grabbing:active {
          cursor: grabbing;
        }

        @media (max-width: 640px) {
          .line-clamp-1 {
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        }
      `}</style>
    </div>
  );
};

export default FloatingCourseCarousel;