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
  ChevronRight,
  Menu,
  X,
} from "lucide-react";
import hsiLogo from "../assets/hsi.png";

const MentorFinderUI = () => {
  const [activeNav, setActiveNav] = useState("Mentorship & Volunteer Programs");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const mentors = Array(8).fill({
    name: "Bill Gates",
    role: "Technology & Entrepreneurship",
    title: "Co-founder & Former CEO",
    sessions: 16,
    isMentor: true,
    tags: ["Python", "JavaScript", "HTML", "PHP", "Laravel"],
  });

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
    { icon: <Bell className="w-4 h-4" />, label: "Networking & Leadership" },
    {
      icon: <Trophy className="w-4 h-4" />,
      label: "Achievements & Recognition",
    },
    {
      icon: <Calendar className="w-4 h-4" />,
      label: "Events & Community Engagement",
    },
    { icon: <Users className="w-4 h-4" />, label: "Alumni Connections" },
    {
      icon: <Users className="w-4 h-4" />,
      label: "Mentorship & Volunteer Programs",
      active: true,
    },
    { icon: <FileText className="w-4 h-4" />, label: "Documents & Records" },
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
        <div className="h-11 bg-[#4a4a3a] flex items-center px-4 border-r border-gray-600 shrink-0">
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
            {navItems.slice(0, 7).map((item, idx) => (
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
        <div className="h-11 bg-[#7a7447] flex items-center justify-between px-4 lg:px-6 border-b border-gray-600 shrink-0">
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
                <img
                  src="/pages/assets/billGates.jpg"
                  alt="User"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-white hidden sm:block">
                <div className="text-xs font-semibold">MARK ZUCKERBERG</div>
                <div className="text-xs text-gray-300">Admin</div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-auto p-8">
          <div>
            <h1 className="text-3xl font-semibold text-gray-800 mb-2">
              Find a Mentor
            </h1>
            <p className="text-sm text-gray-600 mb-6">
              Browse experienced alumni mentors and request mentors based on
              your goals, skills and availability
            </p>

            {/* Search Filters */}
            <div className="flex gap-3 mb-6">
              <div className="relative flex-1 max-w-xs">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <button className="px-4 py-2 border border-gray-300 rounded bg-white text-sm text-gray-700 flex items-center gap-2 hover:bg-gray-50">
                Field / Role
                <ChevronDown className="w-4 h-4" />
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded bg-white text-sm text-gray-700 flex items-center gap-2 hover:bg-gray-50">
                Experience
                <ChevronDown className="w-4 h-4" />
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded bg-white text-sm text-gray-700 flex items-center gap-2 hover:bg-gray-50">
                Sessions
                <ChevronDown className="w-4 h-4" />
              </button>
              <button className="px-6 py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded text-sm font-medium">
                SEARCH
              </button>
            </div>

            {/* Mentor Cards Grid */}
            <div className="grid grid-cols-2 gap-6">
              {mentors.map((mentor, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 p-5"
                >
                  <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden shrink-0">
                        <img
                          src="/api/placeholder/48/48"
                          alt={mentor.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 text-base">
                          {mentor.name}
                        </h3>
                        <p className="text-sm text-gray-600">{mentor.role}</p>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full border border-green-300">
                      ACTIVE
                    </span>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <div className="w-4 h-4 text-gray-400">💼</div>
                      <span>{mentor.title}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <div className="w-4 h-4 text-gray-400">📅</div>
                      <span>{mentor.sessions} sessions</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <div className="w-4 h-4 text-gray-400">👤</div>
                      <span>Top Mentor</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {mentor.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full border border-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2">
                    <button className="flex-1 py-2 px-3 bg-yellow-600 hover:bg-yellow-700 text-white text-sm font-medium rounded whitespace-nowrap">
                      Request Mentorship
                    </button>
                    <button className="flex-1 py-2 px-3 bg-yellow-600 hover:bg-yellow-700 text-white text-sm font-medium rounded whitespace-nowrap">
                      View Profile
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-2 mt-8 flex-wrap">
              <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-50 shrink-0">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button className="w-8 h-8 flex items-center justify-center bg-yellow-600 text-white rounded font-medium shrink-0">
                01
              </button>
              <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-50 shrink-0">
                02
              </button>
              <span className="px-2 hidden sm:inline">...</span>
              <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-50 shrink-0">
                10
              </button>
              <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-50 shrink-0">
                11
              </button>
              <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-50 shrink-0">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorFinderUI;
