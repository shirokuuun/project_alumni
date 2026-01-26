import React from 'react';
import flagIcon from '../../assets/flag.svg';
import clockIcon from '../../assets/clock.svg';
import refreshIcon from '../../assets/loading.svg';
import star from '../../assets/star.svg';
import user from '../../assets/user.svg'

export default function RequestMentorship() {
  return (
    <div className="flex min-h-screen bg-gray-100 font-sans">
      
      <aside className="hidden md:block w-64 bg-[#52525b] flex-shrink-0">
      </aside>

      <div className="flex-1 flex flex-col min-w-0">
        
        {/* Header */}
        <header className="h-16 bg-[#787130] flex items-center justify-between px-4 md:px-8 shadow-md">
        </header>

        <main className="flex-1 p-4 md:p-8 overflow-y-auto">
          
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Request Mentorship</h1>
          <p className="text-gray-500 mt-1 italic text-sm">Send a request to your chosen mentor and start your mentorship journey.</p>

          <div className="mt-6 space-y-6 max-w-4xl">
            
            <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-gray-200">
              <h2 className="text-lg font-bold text-gray-800 mb-4">Mentor Summary</h2>
              
              <div className="flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-left">
                <img 
                  src={user} 
                  alt="User Icon" 
                  className="w-24 h-24 rounded-full object-cover border-4 border-gray-100 flex-shrink-0"
                />
                
                <div className="flex-1 w-full">
                  <h3 className="text-2xl font-bold text-gray-900">Bill Gates</h3>
                  <p className="text-sm text-gray-600 font-medium">Technology & Entrepreneurship</p>
                  
                  <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-3 text-xs font-medium text-gray-500">
                    <div className="flex items-center gap-1"><img src={flagIcon} alt="Flag" className="w-3 h-3" /> Co-founder & Former CEO</div>
                    <div className="flex items-center gap-1"><img src={clockIcon} alt="Clock" className="w-3 h-3" /> 20 yrs Experience</div>
                    <div className="flex items-center gap-1"><img src={refreshIcon} alt="Refresh" className="w-3 h-3" /> 18 sessions</div>
                    <div className="flex items-center gap-1 "><img src={star} alt="Star" className="w-4 h-4" /> Top Mentor</div>
                  </div>

                  <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-4">
                    {["Python", "JavaScript", "HTML", "PHP", "Laravel"].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-gray-200 text-[#787130] text-xs font-semibold rounded-full border border-[#787130]-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-gray-200">
              <h2 className="text-lg font-bold text-gray-800 mb-6">Request Form</h2>
              
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-gray-800">Mentorship Goal</label>
                  <select className="w-full p-3 bg-gray-100 rounded-lg text-sm border border-black focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500 outline-none text-gray-700 appearance-none">
                    <option>Skill Development</option>
                    <option>Career Advice</option>
                    <option>Networking</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-gray-800">Preferred Schedule</label>
                  <div className="relative w-full">
                    <input 
                      type="date" 
                      className="w-full p-3 bg-gray-100 rounded-lg text-sm border border-black focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500 outline-none text-gray-700"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2 md:col-span-1">
                  <label className="text-xs font-bold text-gray-800">Session Type</label>
                  <select className="w-full p-3 bg-gray-100 rounded-lg text-sm border border-black focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500 outline-none text-gray-700 appearance-none">
                    <option>Virtual</option>
                    <option>In-Person</option>
                    <option>Hybrid</option>
                  </select>
                </div>
                
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="text-xs font-bold text-gray-800">Message to Mentor</label>
                  <textarea 
                    rows="4" 
                    className="w-full p-3 bg-gray-100 rounded-lg text-sm border border-black focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500 outline-none text-gray-700"
                    defaultValue="Hi! I'm an HSI alumni looking to improve my web development skills. I'd like guidance on building a portfolio and preparing for interviews."
                  ></textarea>
                </div>

                <div className="md:col-span-2 flex justify-end">
                    <button 
                    type="button" 
                    className="w-full md:w-auto bg-[#eab308] text-black font-bold py-2 px-6 rounded-lg hover:bg-yellow-600 transition shadow-md cursor-pointer"
                    >
                    Send Request
                    </button>
                </div>

              </form>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
