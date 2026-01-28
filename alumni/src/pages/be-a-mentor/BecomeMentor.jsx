import React, { useState } from "react";
import {
  Search,
  ChevronDown,
  User,
  Users,
  FileText,
  Trophy,
  Calendar,
  Bell,
  ChevronLeft,
  Menu,
  X,
  Check,
  Clock,
  Award,
  Target,
} from "lucide-react";
import hsiLogo from "../../assets/hsi.png";

const BecomeMentor = () => {
  const [activeNav, setActiveNav] = useState("Mentorship & Volunteer Programs");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navItems = [
    {
      icon: <div className="w-4 h-4 bg-gray-400 rounded" />,
      label: "Dashboard",
    },
    {
      icon: <Users className="w-4 h-4" />,
      label: "Directory & Networking",
      hasSubmenu: true,
    },
    {
      icon: <Trophy className="w-4 h-4" />,
      label: "Career & Job Opportunities",
    },
    {
      icon: <div className="w-4 h-4 bg-gray-400 rounded" />,
      label: "Training & Learnings",
    },
    {
      icon: <Trophy className="w-4 h-4" />,
      label: "Achievements & Recognition",
    },
    {
      icon: <Calendar className="w-4 h-4" />,
      label: "Events & Community Engagement",
    },
    {
      icon: <Bell className="w-4 h-4" />,
      label: "Announcements",
    },
  ];

  const benefitCards = [
    {
      title: "Build Connections",
      description:
        "Connect with alumni and professionals across different roles and fields through meaningful mentorship and collaboration.",
    },
    {
      title: "Support Career Growth",
      description:
        "Help interns, trainees, and junior professionals grow by sharing real-world experience, guidance, and practical insights.",
    },
    {
      title: "Extend Your Impact",
      description:
        "Contribute beyond mentoring by joining speaking engagements, outreach programs, and community initiatives.",
    },
    {
      title: "Earn Recognition",
      description:
        "Receive badges, certificates, and a clear record of your mentorship sessions and volunteer contributions.",
    },
  ];

  const eligibilityRequirements = [
    {
      title: "Minimum Experience",
      description:
        "At least 2 years of relevant work experience in your field or role.",
    },
    {
      title: "Availability",
      description:
        "Able to commit to at least 1 session per month and respond to mentee requests within a reasonable time.",
    },
    {
      title: "Professional Conduct",
      description:
        "Willing to provide guidance in a respectful, constructive, and supportive manner.",
    },
    {
      title: "Mentorship Focus",
      description:
        "Able to share real-world insights, industry experience, and career advice relevant to interns, trainees, or junior professionals.",
    },
  ];

  const mentorResponsibilities = [
    "Provide career guidance and skills support",
    "Review portfolios, resumes, or projects",
    "Share insights on job roles and industry trends",
    "Support mentees through short-term coaching or long-term guidance",
  ];

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed lg:static inset-y-0 left-0 w-64 lg:w-52 bg-[#3a3a3a] text-white flex flex-col z-50 transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Logo */}
        <div className="h-15 bg-[#4a4a3a] flex items-center px-4 border-r border-gray-600 shrink-0">
          <div className="flex items-center gap-2">
            <img className="w-12 h-auto" src={hsiLogo} alt="Logo" />
          </div>
          <button className="ml-auto text-gray-400 hover:text-white lg:block hidden">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            className="ml-auto text-gray-400 hover:text-white lg:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Menu Section */}
        <div className="px-3 py-2 overflow-y-auto">
          <div className="text-xs text-gray-400 font-semibold mb-2 px-2">
            MENU
          </div>
          <nav className="space-y-1">
            {navItems.map((item, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActiveNav(item.label);
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded text-sm ${
                  activeNav === item.label ? "bg-gray-700" : "hover:bg-gray-700"
                }`}
              >
                {item.icon}
                <span className="flex-1 text-left text-xs">{item.label}</span>
                {item.hasSubmenu && <ChevronDown className="w-3 h-3" />}
              </button>
            ))}
          </nav>
        </div>

        {/* Highlighted Menu Item */}
        <div className="px-3 pb-2">
          <button
            onClick={() => {
              setActiveNav("Mentorship & Volunteer Programs");
              setSidebarOpen(false);
            }}
            className="w-full flex items-center gap-3 px-3 py-2 rounded text-sm bg-yellow-600 hover:bg-yellow-700"
          >
            <Users className="w-4 h-4" />
            <span className="flex-1 text-left text-xs font-medium">
              Mentorship & Volunteer Programs
            </span>
          </button>
        </div>

        <div className="px-3 pb-2">
          <button
            className="w-full flex items-center gap-3 px-3 py-2 rounded text-sm hover:bg-gray-700"
            onClick={() => setSidebarOpen(false)}
          >
            <FileText className="w-4 h-4" />
            <span className="flex-1 text-left text-xs">
              Documents & Records
            </span>
          </button>
        </div>

        {/* Other Section */}
        <div className="px-3 mt-4">
          <div className="text-xs text-gray-400 font-semibold mb-2 px-2">
            OTHER
          </div>
          <button className="w-full flex items-center gap-3 px-3 py-2 rounded text-sm hover:bg-gray-700">
            <User className="w-4 h-4" />
            <span className="flex-1 text-left text-xs">Profile</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <div className="h-15 bg-[#7a7447] flex items-center justify-between px-4 lg:px-6 border-b border-gray-600 shrink-0">
          <div className="flex items-center gap-3 flex-1">
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white hover:text-gray-200"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="w-5 h-5" />
            </button>

            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-10 pr-4 py-1.5 rounded bg-white text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden shrink-0">
                <img src="" alt="User" className="w-full h-full object-cover" />
              </div>
              <div className="text-white hidden sm:block">
                <div className="text-xs font-semibold">MARK ZUCKERBERG</div>
                <div className="text-xs text-gray-300">Admin</div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-auto p-6 lg:p-8">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-2">
              Become a Mentor
            </h1>
            <p className="text-sm text-gray-600">
              Share your knowledge, guide future professionals, and give back to
              the HSI community.
            </p>
          </div>

          {/* Why Become a Mentor Section */}
          <div className="mb-8">
            <h2 className="text-xl lg:text-2xl font-semibold text-yellow-600 mb-6 text-center">
              Why Become a Mentor
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6">
              {benefitCards.map((card, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 p-5 lg:p-6 hover:shadow-md transition-shadow"
                >
                  <h3 className="font-bold text-gray-800 text-base mb-3">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Combined Eligibility and Responsibilities Section */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-8">
            {/* Mentor Eligibility */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 lg:p-8">
              <h2 className="text-lg lg:text-xl font-semibold text-gray-800 mb-2">
                Mentor Eligibility
              </h2>
              <p className="text-sm text-gray-600 mb-6">
                To ensure a meaningful mentorship experience, mentors are
                expected to meet the following requirements:
              </p>

              <div className="space-y-5">
                {eligibilityRequirements.map((req, idx) => (
                  <div key={idx} className="flex gap-3">
                    <div className="shrink-0 mt-1">
                      <div className="w-5 h-5 rounded border-2 border-gray-800 flex items-center justify-center">
                        <Check className="w-3 h-3 text-gray-800" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 text-sm mb-1">
                        {req.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {req.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* What Mentors Will Be Doing */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 lg:p-8">
              <h2 className="text-lg lg:text-xl font-semibold text-gray-800 mb-2">
                What Mentors Will Be Doing
              </h2>
              <p className="text-sm text-gray-600 mb-6">
                Mentors should be prepared to:
              </p>
              <ul className="space-y-4 mb-6">
                {mentorResponsibilities.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm text-gray-600"
                  >
                    <span className="text-yellow-600 font-bold mt-0.5">•</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Additional content to fill space */}
              <div className="mt-6 pt-6 border-t border-gray-200 space-y-4">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-yellow-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-800 text-sm mb-1">
                      Time Commitment
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      We recommend dedicating at least 1-2 hours per month for
                      mentorship sessions. This flexible schedule allows you to
                      make a meaningful impact.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-yellow-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-800 text-sm mb-1">
                      Recognition Program
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Track your mentorship hours and earn badges for milestone
                      achievements as you guide the next generation of
                      professionals.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-700 bg-yellow-50 p-3 rounded-lg border border-yellow-100">
                  <Target className="w-5 h-5 text-yellow-600 shrink-0" />
                  <span className="font-medium">
                    Regular monthly sessions work best for building strong
                    mentor-mentee relationships.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Ready to Mentor Section */}
          <div className="bg-gradient-to-br from-yellow-50 to-white rounded-lg shadow-sm border border-gray-200 p-8 lg:p-10 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-3">
                Ready to Mentor?
              </h2>
              <p className="text-sm lg:text-base text-gray-600 mb-6">
                If you meet the requirements, proceed to the sign-up form to
                become a mentor. Your contribution will help shape the next
                generation of HSI professionals and make a lasting impact on
                their careers.
              </p>
              <button className="px-10 py-3.5 bg-yellow-600 hover:bg-yellow-700 text-white text-sm font-semibold rounded-lg transition-all hover:shadow-lg hover:scale-105 transform inline-flex items-center gap-2">
                <Users className="w-4 h-4" />
                Become a Mentor
              </button>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-xs text-gray-500">
                  Questions? Contact the mentorship program coordinator at{" "}
                  <a
                    href="mailto:mentorship@hsi.com"
                    className="text-yellow-600 hover:underline"
                  >
                    mentorship.hs@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BecomeMentor;
