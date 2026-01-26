import React from 'react';
import { ChevronLeft, ChevronRight, Flag, Users, ArrowRight } from 'lucide-react';

const MentorshipProgram = () => {
  const mentors = [
    { 
      name: 'Bill Gates', 
      role: 'Co-founder & Former CEO', 
      sessions: '16 sessions',
      status: 'Most Active',
      experience: '20 Years' 
    },
    { 
      name: 'Bill Gates', 
      role: 'Co-founder & Former CEO', 
      sessions: '16 sessions',
      status: null,
      experience: '20 Years' 
    },
    { 
      name: 'Bill Gates', 
      role: 'Co-founder & Former CEO', 
      sessions: '16 sessions',
      status: null,
      experience: '20 Years' 
    },
    { 
      name: 'Bill Gates', 
      role: 'Co-founder & Former CEO', 
      sessions: '16 sessions',
      status: null,
      experience: '20 Years' 
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Placeholder for Navbar */}
      <div className="h-16 bg-yellow-700 flex items-center justify-between px-6">
        <div className="text-white font-semibold">NAVBAR PLACEHOLDER</div>
      </div>

      <div className="flex">
        {/* Placeholder for Sidebar */}
        <div className="w-64 bg-gray-800 min-h-screen">
          <div className="text-white p-6">SIDEBAR PLACEHOLDER</div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* 1ST SECTION - Hero Section */}
          <div className="bg-gray-200 px-16 py-20">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-6xl font-bold leading-tight mb-6" style={{ color: '#E6C72E' }}>
                  Grow Your Career Through Mentorship & Community
                </h1>
                <p className="text-gray-800 text-lg mb-8 leading-relaxed">
                  Support the next generation of HSI professionals through mentorship, volunteering, and advocacy.
                </p>
                <button className="bg-gray-700 hover:bg-gray-800 font-semibold px-8 py-3 rounded-full transition" style={{ color: '#E6C72E' }}>
                  Get a Mentor
                </button>
              </div>
<div className="relative h-125 w-full max-w-2xl mx-auto">
  {/* 1st layer - Laptop image (Back/Left) */}
  {/* Width decreased to 66% (w-2/3), height is implicit via aspect ratio or h-full */}
  <div className="absolute top-0 left- w-1/2 z-0">
    <img 
      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=800&fit=crop" 
      alt="Mentorship session 1" 
      className="rounded-3xl shadow-xl w-full h-100 object-cover"
    />
  </div>

  {/* 2nd layer - High-five image (Front/Right) */}
  {/* Width decreased to 50% (w-1/2) and positioned for a taller overlap */}
  <div className="absolute bottom-0 right-30 w-1/2 z-10">
    <img 
      src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500&h=700&fit=crop" 
      alt="Mentorship session 2" 
      className="rounded-3xl shadow-2xl w-full h-87.5 object-cover"
    />
  </div>
</div>
            </div>
          </div>

          {/* 2ND SECTION - How the Program Works */}
          <div className="px-16 py-20" style={{ backgroundColor: 'rgba(230, 199, 46, 0.13)' }}>
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
              {/* Left side - Title and description */}
              <div>
                <h2 className="text-5xl font-bold mb-6" style={{ color: '#E6C72E' }}>
                  How the Program Works
                </h2>
                <p className="text-gray-800 text-lg leading-relaxed">
                  Connect with experienced alumni, schedule mentorship sessions, and take part in volunteer initiatives designed to support career growth and community engagement.
                </p>
              </div>

              {/* Right side - 2x2 grid of cards */}
              <div className="grid grid-cols-2 gap-6">
                {/* Be a Mentor */}
                <div className="bg-white p-6 rounded-2xl border-2 border-gray-200 shadow-sm">
                  <h3 className="font-bold text-lg mb-3">Be a Mentor</h3>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    Share your experience, guide juniors, and give back to the HSI community by mentoring interns and alumni.
                  </p>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#E6C72E' }}>
                    <ArrowRight className="w-5 h-5 text-white" strokeWidth={3} />
                  </div>
                </div>

                {/* Find a Mentor */}
                <div className="bg-white p-6 rounded-2xl border-2 border-gray-200 shadow-sm">
                  <h3 className="font-bold text-lg mb-3">Find a Mentor</h3>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    Get matched with experienced professionals based on your goals, skills, and career path.
                  </p>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#E6C72E' }}>
                    <ArrowRight className="w-5 h-5 text-white" strokeWidth={3} />
                  </div>
                </div>

                {/* Volunteer & Speak */}
                <div className="bg-white p-6 rounded-2xl border-2 border-gray-200 shadow-sm">
                  <h3 className="font-bold text-lg mb-3">Volunteer & Speak</h3>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    Join outreach programs, tech talks, and advocacy events as a volunteer or speaker.
                  </p>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#E6C72E' }}>
                    <ArrowRight className="w-5 h-5 text-white" strokeWidth={3} />
                  </div>
                </div>

                {/* Schedule Sessions */}
                <div className="bg-white p-6 rounded-2xl border-2 border-gray-200 shadow-sm">
                  <h3 className="font-bold text-lg mb-3">Schedule Sessions</h3>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    Book virtual or onsite mentorship sessions at a time that works for both mentor and mentee.
                  </p>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#E6C72E' }}>
                    <ArrowRight className="w-5 h-5 text-white" strokeWidth={3} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3RD SECTION - Discover Mentors */}
          <div className="bg-gray-100 px-16 py-20">
            <div className="max-w-7xl mx-auto">
              <div className="flex justify-between items-center mb-10">
                <h2 className="text-4xl font-bold text-gray-900">Discover Mentors</h2>
                <div className="flex items-center gap-3">
                  <button className="px-6 py-2 border-2 border-gray-900 rounded-full text-sm font-semibold hover:bg-gray-900 hover:text-white transition">
                    Explore all
                  </button>
                  <button className="p-2 border-2 border-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition">
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button className="p-2 border-2 border-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="grid md:grid-cols-4 gap-6">
                {mentors.map((mentor, index) => (
                  <div 
                    key={index} 
                    className="bg-white rounded-2xl overflow-hidden shadow-sm border-2 border-gray-200 hover:ring-4 hover:ring-blue-400 transition-all cursor-pointer"
                  >
                    <div className="relative">
                      <img 
                        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=faces" 
                        alt={mentor.name}
                        className="w-full h-56 object-cover"
                      />
                      {mentor.status && (
                        <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-xs font-semibold text-gray-700">
                          {mentor.status}
                        </div>
                      )}
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-lg mb-1">{mentor.name}</h3>
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                        <Flag className="w-4 h-4" />
                        <span>{mentor.role}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                        <Users className="w-4 h-4" />
                        <span>{mentor.sessions}</span>
                      </div>
                      <div className="pt-3 border-t border-gray-200">
                        <div className="text-xs text-gray-500 mb-1">Experience</div>
                        <div className="font-semibold text-sm text-gray-900">{mentor.experience}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 4TH SECTION - Why Join the Program */}
          <div className="bg-white px-16 py-20">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-5xl font-bold mb-12" style={{ color: '#E6C72E' }}>
                Why Join the Program
              </h2>
              
              <div className="grid md:grid-cols-[350px_1fr] gap-8 items-start">
                {/* Left side - Single image (smaller size) */}
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=350&h=450&fit=crop" 
                    alt="Career Growth"
                    className="rounded-2xl object-cover w-full"
                  />
                </div>

                {/* Right side - 2x2 grid of cards */}
                <div className="grid grid-cols-2 gap-6">
                  {/* Career Growth */}
                  <div className="bg-white p-6 rounded-2xl border-2" style={{ borderColor: '#E6C72E' }}>
                    <h3 className="font-bold text-lg mb-3">Career Growth</h3>
                    <p className="text-gray-700 leading-relaxed text-sm">
                      Receive personalized guidance from experienced professionals who can help you navigate career decisions, develop in-demand skills, and plan your professional growth.
                    </p>
                  </div>

                  {/* Meaningful Connections */}
                  <div className="bg-white p-6 rounded-2xl border-2" style={{ borderColor: '#E6C72E' }}>
                    <h3 className="font-bold text-lg mb-3">Meaningful Connections</h3>
                    <p className="text-gray-700 leading-relaxed text-sm">
                      Build long-term relationships with alumni, mentors, and peers that go beyond sessions—creating a strong and supportive professional network within HSI.
                    </p>
                  </div>

                  {/* Give Back */}
                  <div className="bg-white p-6 rounded-2xl border-2" style={{ borderColor: '#E6C72E' }}>
                    <h3 className="font-bold text-lg mb-3">Give Back</h3>
                    <p className="text-gray-700 leading-relaxed text-sm">
                      Make a positive impact by supporting interns, junior members, and community initiatives through mentorship, volunteering, and knowledge-sharing activities.
                    </p>
                  </div>

                  {/* Recognition & Tracking */}
                  <div className="bg-white p-6 rounded-2xl border-2" style={{ borderColor: '#E6C72E' }}>
                    <h3 className="font-bold text-lg mb-3">Recognition & Tracking</h3>
                    <p className="text-gray-700 leading-relaxed text-sm">
                      Gain recognition for your contributions with badges, certificates, and a clear record of mentorship sessions and volunteer hours—all tracked in one place.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorshipProgram;