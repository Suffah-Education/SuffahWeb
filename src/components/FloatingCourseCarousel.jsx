import React, { useState } from 'react';
import { X, Users, Clock } from 'lucide-react';

const FloatingCourseCarousel = () => {
  const [isVisible, setIsVisible] = useState(true);

  const courses = [
    {
      title: "Basic Qaida Learning",
      subtitle: "Learn to read Qaida From Basics",
      price: "499Rs/mo",
      students: "120",
      duration: "6 Months",
      image: "/images/Basic-Qaida-Your-Gateway-to-the-Quran - Copy.jpg",
      color: "from-emerald-500 to-teal-600"
    },
    {
      title: "Nazera-e-Quran",
      subtitle: "Complete Quran nazera program",
      price: "499Rs/mo",
      students: "85",
      duration: "1.5 Years",
      image: "/images/Nazera.png",
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "Hifz-e-Quran",
      subtitle: "Complete Hifz-e-Quran Program",
      price: "599Rs/mo",
      students: "200",
      duration: "3 Year",
      image: "/images/hifz-e-quran.jpg",
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Tajweed-e-Quran(تجویدِ قرآن)",
      subtitle: "Advanced pronunciation rules",
      price: "499Rs/mo",
      students: "150",
      duration: "1 Year",
      image: "/images/hq720.jpg",
      color: "from-amber-500 to-orange-600"
    },
    {
      title: "Islamic Studies",
      subtitle: "Fundamentals of Islamic Knowledge",
      price: "399Rs/mo",
      students: "95",
      duration: "4 Months",
      image: "https://images.unsplash.com/photo-1519817650390-64a93db51149?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80p",
      color: "from-cyan-500 to-blue-600"
    },
    {
      title: "Seerah Studies",
      subtitle: "Life of Prophet Muhammad (PBUH)",
      price: "299Rs/mo",
      students: "180",
      duration: "3 Months", 
      image: "/images/default.png",
      color: "from-rose-500 to-red-600"
    }
  ];

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 shadow-2xl border-t border-emerald-500">
      {/* Close Button */}
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-1 right-1 z-10 bg-white/10 hover:bg-white/20 text-white rounded-full p-1.5 transition-all duration-300 backdrop-blur-sm"
      >
        <X size={16} />
      </button>

      {/* Header */}
      <div className="text-center py-1.5 px-3 bg-gradient-to-r from-emerald-600 to-teal-600">
        <h3 className="text-white font-semibold text-sm">🎓 Explore Our Courses</h3>
      </div>

      {/* Scrolling Container */}
      <div className="overflow-hidden py-1">
        <div className="animate-scroll flex gap-3 px-3">
          {/* Double the courses for seamless loop */}
          {[...courses, ...courses].map((course, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-56 bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 hover:shadow-xl transition-all duration-300npm"
            >
              {/* Course Image */}
              <div className="relative h-6 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-90`}></div>
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover mix-blend-overlay"
                />
                <div className="absolute top-2 right-2 bg-white text-emerald-600 font-bold px-2 py-0.5 rounded-full text-xs shadow-lg">
                  {course.price}
                </div>
              </div>

              {/* Course Content */}
              <div className="p-3">
                <h4 className="font-bold text-sm text-gray-800 mb-0.5 line-clamp-1">
                  {course.title}
                </h4>
                <p className="text-gray-600 text-xs mb-2 line-clamp-1">
                  {course.subtitle}
                </p>

                {/* Stats */}
                <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                  <div className="flex items-center gap-1">
                    <Users size={12} className="text-emerald-600" />
                    <span>{course.students}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={12} className="text-blue-600" />
                    <span>{course.duration}</span>
                  </div>
                </div>

                {/* Enroll Button */}
                <button className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold py-1.5 text-xs rounded-md hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 shadow-md hover:shadow-lg">
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

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default FloatingCourseCarousel;